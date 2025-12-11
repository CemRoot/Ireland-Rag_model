"""
Ireland RAG - PDF to Markdown Converter
========================================
LlamaParse kullanarak PDF dosyalarını Markdown'a dönüştürür.

Kullanım:
1. cp .env.example .env
2. .env dosyasına LlamaCloud API key'i ekle
3. pip install -r requirements.txt
4. python convert_pdfs_to_markdown.py
"""

import os
import asyncio
from pathlib import Path

# .env dosyasını yükle
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass  # dotenv yoksa env variables kullan

# ============================================
# 🔑 API KEY (.env dosyasından veya environment'tan)
# ============================================
LLAMA_CLOUD_API_KEY = os.getenv("LLAMA_CLOUD_API_KEY", "llx-YOUR_API_KEY_HERE")

# ============================================
# 📁 KLASÖR AYARLARI
# ============================================
PDF_FOLDER = Path(__file__).parent / "official_pdfs"
MARKDOWN_FOLDER = Path(__file__).parent / "markdown_files"


def check_api_key():
    """API key kontrolü"""
    if LLAMA_CLOUD_API_KEY == "llx-YOUR_API_KEY_HERE" or not LLAMA_CLOUD_API_KEY.startswith("llx-"):
        print("=" * 60)
        print("❌ HATA: LlamaCloud API Key gerekli!")
        print("=" * 60)
        print()
        print("1. https://cloud.llamaindex.ai/api-key adresine git")
        print("2. Ücretsiz hesap oluştur (Google ile giriş yapabilirsin)")
        print("3. API key'i kopyala")
        print("4. Bu script'te LLAMA_CLOUD_API_KEY değişkenine yapıştır")
        print()
        print("Örnek: LLAMA_CLOUD_API_KEY = 'llx-abc123...'")
        print("=" * 60)
        return False
    return True


async def convert_single_pdf(parser, pdf_path: Path, output_folder: Path):
    """Tek bir PDF'i markdown'a dönüştür"""
    try:
        print(f"📄 İşleniyor: {pdf_path.name}")
        
        # Parse et
        result = await parser.aparse(str(pdf_path))
        
        # Markdown olarak al
        markdown_docs = result.get_markdown_documents(split_by_page=False)
        
        if markdown_docs:
            # Markdown içeriğini birleştir
            markdown_content = "\n\n".join([doc.text for doc in markdown_docs])
            
            # Dosya adını oluştur
            md_filename = pdf_path.stem + ".md"
            md_path = output_folder / md_filename
            
            # Kaydet
            with open(md_path, "w", encoding="utf-8") as f:
                # Başlık ekle
                f.write(f"# {pdf_path.stem.replace('_', ' ')}\n\n")
                f.write(f"> Source: {pdf_path.name}\n\n")
                f.write("---\n\n")
                f.write(markdown_content)
            
            print(f"   ✅ Kaydedildi: {md_filename}")
            return True
        else:
            print(f"   ⚠️ Markdown oluşturulamadı: {pdf_path.name}")
            return False
            
    except Exception as e:
        print(f"   ❌ Hata: {pdf_path.name} - {str(e)}")
        return False


async def main():
    """Ana fonksiyon"""
    print("=" * 60)
    print("🇮🇪 Ireland RAG - PDF to Markdown Converter")
    print("   Powered by LlamaParse")
    print("=" * 60)
    print()
    
    # API key kontrolü
    if not check_api_key():
        return
    
    # llama-cloud-services import et
    try:
        from llama_cloud_services import LlamaParse
    except ImportError:
        print("❌ llama-cloud-services paketi yüklü değil!")
        print()
        print("Yüklemek için çalıştır:")
        print("   pip install llama-cloud-services")
        print()
        return
    
    # Klasörleri kontrol et
    if not PDF_FOLDER.exists():
        print(f"❌ PDF klasörü bulunamadı: {PDF_FOLDER}")
        return
    
    # Markdown klasörü oluştur
    MARKDOWN_FOLDER.mkdir(exist_ok=True)
    
    # PDF dosyalarını bul
    pdf_files = list(PDF_FOLDER.glob("*.pdf"))
    
    if not pdf_files:
        print(f"❌ PDF dosyası bulunamadı: {PDF_FOLDER}")
        return
    
    print(f"📚 {len(pdf_files)} PDF dosyası bulundu:")
    for pdf in pdf_files:
        print(f"   - {pdf.name}")
    print()
    
    # LlamaParse parser oluştur
    print("🔧 LlamaParse başlatılıyor...")
    parser = LlamaParse(
        api_key=LLAMA_CLOUD_API_KEY,
        result_type="markdown",
        num_workers=2,  # Paralel işlem sayısı
        verbose=False,
        language="en",
        # Agentic mode - tablolar ve görseller için daha iyi
        parsing_instruction="Extract all text, tables, and structured data. Preserve table formatting in markdown."
    )
    
    print()
    print("📝 PDF'ler Markdown'a dönüştürülüyor...")
    print("-" * 40)
    
    # Her PDF'i dönüştür
    success_count = 0
    fail_count = 0
    
    for pdf_path in pdf_files:
        result = await convert_single_pdf(parser, pdf_path, MARKDOWN_FOLDER)
        if result:
            success_count += 1
        else:
            fail_count += 1
    
    # Özet
    print()
    print("=" * 60)
    print("📊 ÖZET")
    print("=" * 60)
    print(f"   ✅ Başarılı: {success_count}")
    print(f"   ❌ Başarısız: {fail_count}")
    print(f"   📁 Çıktı klasörü: {MARKDOWN_FOLDER}")
    print()
    
    # Oluşturulan dosyaları listele
    md_files = list(MARKDOWN_FOLDER.glob("*.md"))
    if md_files:
        print("📄 Oluşturulan Markdown dosyaları:")
        for md in md_files:
            size_kb = md.stat().st_size / 1024
            print(f"   - {md.name} ({size_kb:.1f} KB)")
    
    print()
    print("🚀 Sonraki adım: Bu .md dosyalarını n8n'e yükle!")


if __name__ == "__main__":
    asyncio.run(main())

