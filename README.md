<div align="center">

# 🇮🇪 Ireland RAG Assistant

### AI-Powered Knowledge Assistant for Expats in Ireland

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![LlamaParse](https://img.shields.io/badge/LlamaParse-Powered-purple?style=for-the-badge)](https://cloud.llamaindex.ai/)
[![Pinecone](https://img.shields.io/badge/Pinecone-Vector_DB-teal?style=for-the-badge)](https://www.pinecone.io/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br />

[English](#-overview) · [Türkçe](#-genel-bakış)



**A sophisticated RAG (Retrieval-Augmented Generation) system that provides accurate, real-time information about living in Ireland — from visa requirements to tax calculations.**

[Live Demo](https://chatgpt.com/g/g-693c3f003b308191a3aa51cf1e75e47e-ireland-expat-assistant) · [Report Bug](https://github.com/cemkoyluoglu/ireland-rag-assistant/issues) · [Request Feature](https://github.com/cemkoyluoglu/ireland-rag-assistant/issues)

</div>

---

<br />

# 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Knowledge Base](#-knowledge-base)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Türkçe Dokümantasyon](#-türkçe-dokümantasyon)

<br />

---

<br />

# 🌟 Overview

**Ireland RAG Assistant** is an enterprise-grade conversational AI application designed to assist Turkish-speaking expats living in or relocating to Ireland. Built on modern RAG architecture, it combines the power of large language models with a curated knowledge base of official Irish government documents.

The system processes complex queries about taxation, visa requirements, social welfare, healthcare, and housing with high accuracy by retrieving relevant information from authenticated sources before generating responses.

<br />

## Why Ireland RAG?

| Challenge | Our Solution |
|-----------|-------------|
| 🔍 Information is scattered across multiple government websites | Unified knowledge base with 18+ official documents |
| 🌐 Most resources are only in English | Natural Turkish language support |
| 📊 Tax calculations are complex | Automated PAYE, USC, PRSI calculations |
| ⏰ Government offices have limited hours | 24/7 AI-powered assistance |
| 📝 Visa requirements change frequently | Regularly updated document database |

<br />

---

<br />

# ✨ Features

<table>
<tr>
<td width="50%">

### 💰 Tax & Finance
- **PAYE Calculator** — Income tax computation
- **USC Analysis** — Universal Social Charge breakdown  
- **PRSI Contributions** — Social insurance calculations
- **Tax Credits** — Available deductions and credits
- **Budget Updates** — Latest Finance Bill information

</td>
<td width="50%">

### 📋 Immigration & Visa
- **Stamp Categories** — All stamp types explained
- **Employment Permits** — Critical Skills & General permits
- **Ankara Agreement** — Turkish citizen special provisions
- **Family Reunification** — Non-EEA family policies
- **IRP Renewal** — Registration requirements

</td>
</tr>
<tr>
<td width="50%">

### 🏥 Healthcare
- **Medical Cards** — Application process & eligibility
- **HSE Services** — National health service guide
- **GP Visit Cards** — Alternative healthcare options
- **Emergency Services** — When and how to access

</td>
<td width="50%">

### 🏠 Housing & Benefits
- **Rent Tax Credit** — Claim up to €750/year
- **Tenant Rights** — Legal protections explained
- **Social Welfare** — SW19 payment rates
- **PPS Number** — Application guidance

</td>
</tr>
</table>

<br />

### 🎯 Key Capabilities

```
┌─────────────────────────────────────────────────────────────────────┐
│  🔄 Real-time RAG Pipeline                                          │
│  ├── Document ingestion via LlamaParse                             │
│  ├── Semantic search with Pinecone vector database                 │
│  ├── Context-aware response generation                              │
│  └── Source attribution for transparency                           │
├─────────────────────────────────────────────────────────────────────┤
│  💬 Conversational Interface                                        │
│  ├── Session persistence across page reloads                       │
│  ├── Markdown rendering with syntax highlighting                   │
│  ├── Mobile-responsive design                                       │
│  └── Accessibility-first approach                                   │
├─────────────────────────────────────────────────────────────────────┤
│  🔒 Enterprise Security                                             │
│  ├── No PII storage on client                                      │
│  ├── Secure webhook communication                                   │
│  ├── Rate limiting support                                          │
│  └── GDPR-compliant architecture                                   │
└─────────────────────────────────────────────────────────────────────┘
```

<br />

---

<br />

# 🏗 Architecture

```
                                    ┌─────────────────────────────────┐
                                    │         Knowledge Base          │
                                    │   (Official Irish Documents)    │
                                    └───────────────┬─────────────────┘
                                                    │
                                                    ▼
┌──────────────┐    ┌──────────────┐    ┌─────────────────────────────┐
│   User       │    │   Next.js    │    │      RAG Pipeline           │
│   Browser    │◄──►│   Frontend   │◄──►│                             │
│              │    │   (React)    │    │  ┌─────────┐ ┌───────────┐  │
└──────────────┘    └──────────────┘    │  │LlamaParse│ │  OpenAI   │  │
                           │            │  │  Parser  │ │ Embeddings│  │
                           │            │  └────┬────┘ └─────┬─────┘  │
                           ▼            │       │            │        │
                    ┌──────────────┐    │       ▼            ▼        │
                    │   n8n        │    │  ┌─────────────────────┐    │
                    │   Workflow   │◄───┼──│   Pinecone          │    │
                    │   Engine     │    │  │   Vector Database   │    │
                    └──────────────┘    │  └─────────────────────┘    │
                           │            │                             │
                           ▼            │       ▼                     │
                    ┌──────────────┐    │  ┌─────────────────────┐    │
                    │   OpenAI     │    │  │   GPT-4 / GPT-3.5   │    │
                    │   GPT API    │◄───┼──│   Response Gen      │    │
                    └──────────────┘    │  └─────────────────────┘    │
                                        └─────────────────────────────┘
```

<br />

### Data Flow

1. **Document Ingestion** — PDFs are converted to Markdown using LlamaParse
2. **Vectorization** — Text chunks are embedded using OpenAI embeddings
3. **Storage** — Vectors stored in Pinecone with metadata
4. **Query Processing** — User questions are embedded and matched against knowledge base
5. **Response Generation** — Relevant context is injected into GPT prompt for accurate answers

<br />

---

<br />

# 🛠 Tech Stack

<table>
<tr>
<td align="center" width="100">
<img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
<br /><sub><b>Next.js 14</b></sub>
</td>
<td align="center" width="100">
<img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
<br /><sub><b>React 18</b></sub>
</td>
<td align="center" width="100">
<img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
<br /><sub><b>TypeScript</b></sub>
</td>
<td align="center" width="100">
<img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
<br /><sub><b>Tailwind</b></sub>
</td>
<td align="center" width="100">
<img src="https://skillicons.dev/icons?i=python" width="48" height="48" alt="Python" />
<br /><sub><b>Python</b></sub>
</td>
<td align="center" width="100">
<img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
<br /><sub><b>Vercel</b></sub>
</td>
</tr>
</table>

### Core Technologies

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | Next.js 14 (App Router) | Server-side rendering, routing |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Language** | TypeScript | Type-safe development |
| **Document Processing** | LlamaParse | PDF to Markdown conversion |
| **Vector Database** | Pinecone | Semantic search & retrieval |
| **AI/ML** | OpenAI GPT-4 | Embeddings & text generation |
| **Workflow** | n8n | Backend orchestration |
| **Deployment** | Vercel | Edge deployment & CDN |

<br />

---

<br />

# 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **Python** 3.9+ (for document processing)
- **npm** or **yarn** or **pnpm**
- **API Keys**: OpenAI, Pinecone, LlamaCloud

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/cemkoyluoglu/ireland-rag-assistant.git
cd ireland-rag-assistant

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Configure your API keys in .env.local
# Edit NEXT_PUBLIC_WEBHOOK_URL, LLAMA_CLOUD_API_KEY, etc.

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

<br />

### Environment Configuration

Create a `.env.local` file with the following variables:

```env
# Frontend Webhook
NEXT_PUBLIC_WEBHOOK_URL=https://your-n8n-url/webhook/ireland-rag

# LlamaCloud (PDF Processing)
LLAMA_CLOUD_API_KEY=llx-your-key-here

# Pinecone (Vector Database)
PINECONE_API_KEY=pcsk_your-key-here
PINECONE_INDEX=ireland-rag-assistant
PINECONE_HOST=your-index.svc.pinecone.io

# OpenAI (Optional - if not using n8n)
OPENAI_API_KEY=sk-your-key-here
```

<br />

### Document Processing

To convert PDFs to the knowledge base:

```bash
# 1. Install Python dependencies
pip install -r requirements.txt

# 2. Place PDFs in official_pdfs/ directory

# 3. Run conversion script
python convert_pdfs_to_markdown.py
```

<br />

---

<br />

# 📁 Project Structure

```
ireland-rag-assistant/
├── 📂 app/                          # Next.js App Router
│   ├── globals.css                  # Global styles & Tailwind
│   ├── layout.tsx                   # Root layout component
│   └── page.tsx                     # Main page component
│
├── 📂 components/                   # React components
│   ├── Chat.tsx                     # Main chat container
│   ├── Footer.tsx                   # Footer component
│   ├── Header.tsx                   # Header with branding
│   ├── LoadingIndicator.tsx         # Typing animation
│   ├── Message.tsx                  # Message bubble component
│   └── index.ts                     # Barrel exports
│
├── 📂 official_pdfs/                # Source documents (18 files)
│   ├── Benefits_and_Taxes_Booklet_2025.pdf
│   ├── Budget_2026_Tax_Policy_Changes_Summary.pdf
│   ├── Citizenship_Guidance_Document_2024.pdf
│   ├── Critical_Skills_Employment_Permits_Checklist.pdf
│   ├── Finance_Bill_2025.pdf
│   ├── ... and more
│   └── README.md
│
├── 📂 markdown_files/               # Processed documents (output)
│
├── 📄 convert_pdfs_to_markdown.py   # LlamaParse conversion script
├── 📄 requirements.txt              # Python dependencies
├── 📄 package.json                  # Node.js dependencies
├── 📄 tailwind.config.ts            # Tailwind configuration
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 next.config.js                # Next.js configuration
└── 📄 .env.example                  # Environment template
```

<br />

---

<br />

# 📡 API Reference

### Webhook Endpoint

The application communicates with an n8n webhook for processing queries.

#### Request

```http
POST /webhook/ireland-rag
Content-Type: application/json
```

```json
{
  "sessionId": "550e8400-e29b-41d4-a716-446655440000",
  "message": "How do I calculate my PAYE tax?",
  "source": "web"
}
```

#### Response

```json
{
  "ok": true,
  "response": "To calculate your PAYE tax in Ireland, you need to consider..."
}
```

<br />

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `sessionId` | `string` | UUID v4 for conversation continuity |
| `message` | `string` | User's question or message |
| `source` | `string` | Client identifier (`"web"`, `"mobile"`, etc.) |

<br />

---

<br />

# 📚 Knowledge Base

The RAG system is powered by **18 official Irish government documents**, ensuring accuracy and reliability:

<details>
<summary><b>📋 View Complete Document List</b></summary>

<br />

| Document | Category | Source |
|----------|----------|--------|
| Benefits and Taxes Booklet 2025 | Finance | Revenue |
| Budget 2026 Tax Policy Changes | Finance | Gov.ie |
| Finance Bill 2025 | Finance | Oireachtas |
| Finance Bill Explanatory Memo | Finance | Oireachtas |
| Revenue Budget 2026 Summary | Finance | Revenue |
| PRSI Contribution Rates SW14 | Social Welfare | DEASP |
| SW19 Rates of Payment 2025 | Social Welfare | DEASP |
| Rent Tax Credit Review | Housing | Revenue |
| Good Landlord Tenant Guide | Housing | RTB |
| Critical Skills Permits Checklist | Immigration | DETE |
| General Employment Permits Checklist | Immigration | DETE |
| Non-EEA Family Reunification Policy | Immigration | INIS |
| IRP Renewal Documents Guide | Immigration | GNIB |
| Citizenship Guidance 2024 | Immigration | INIS |
| HSE National Service Plan 2025 | Healthcare | HSE |
| Medical Card Application Form | Healthcare | HSE |
| Medical Card Assessment Guidelines | Healthcare | HSE |

</details>

<br />

---

<br />

# 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/cemkoyluoglu/ireland-rag-assistant)

1. Click the button above or import the repository on [Vercel](https://vercel.com)
2. Add environment variables in Project Settings
3. Deploy!

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
docker build -t ireland-rag .
docker run -p 3000:3000 ireland-rag
```

<br />

---

<br />

# 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Standards

- Follow ESLint configuration
- Write TypeScript with proper types
- Include JSDoc comments for functions
- Test your changes thoroughly

### Reporting Issues

Please use the [GitHub Issues](https://github.com/cemkoyluoglu/ireland-rag-assistant/issues) page to report bugs or request features.

<br />

---

<br />

# 📄 License

```
MIT License

Copyright (c) 2025 Cem Koyluoglu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

<br />

---

<br />

# 👤 Author

<div align="center">

<img src="https://github.com/cemkoyluoglu.png" width="100" height="100" style="border-radius: 50%;" alt="Cem Koyluoglu" />

### **Cem Koyluoglu**

*Full-Stack Developer & AI Engineer*

[![GitHub](https://img.shields.io/badge/GitHub-@cemkoyluoglu-181717?style=for-the-badge&logo=github)](https://github.com/cemkoyluoglu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-cemkoyluoglu-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/cemkoyluoglu)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail)](mailto:contact@cemkoyluoglu.com)

</div>

<br />

---

<br />
<br />
<br />

<div align="center">

# 🇹🇷 TÜRKÇE DOKÜMANTASYON

</div>

<br />

---

<br />

# 🌟 Genel Bakış

**Ireland RAG Assistant**, İrlanda'da yaşayan veya İrlanda'ya taşınmak isteyen Türkler için tasarlanmış, kurumsal düzeyde bir yapay zeka sohbet uygulamasıdır. Modern RAG (Retrieval-Augmented Generation) mimarisi üzerine inşa edilmiş bu sistem, büyük dil modellerinin gücünü resmi İrlanda hükümeti belgelerinden oluşan özenle seçilmiş bir bilgi tabanıyla birleştirir.

<br />

## Neden Ireland RAG?

| Sorun | Çözümümüz |
|-------|----------|
| 🔍 Bilgiler birçok farklı web sitesine dağılmış | 18+ resmi belgeden oluşan birleşik bilgi tabanı |
| 🌐 Kaynakların çoğu yalnızca İngilizce | Doğal Türkçe dil desteği |
| 📊 Vergi hesaplamaları karmaşık | Otomatik PAYE, USC, PRSI hesaplamaları |
| ⏰ Devlet daireleri sınırlı saatlerde açık | 7/24 yapay zeka destekli yardım |
| 📝 Vize gereksinimleri sık değişiyor | Düzenli güncellenen belge veritabanı |

<br />

---

<br />

# ✨ Özellikler

<table>
<tr>
<td width="50%">

### 💰 Vergi ve Finans
- **PAYE Hesaplayıcı** — Gelir vergisi hesaplama
- **USC Analizi** — Evrensel Sosyal Ücret dökümü
- **PRSI Katkıları** — Sosyal sigorta hesaplamaları
- **Vergi Kredileri** — Mevcut indirimler ve krediler
- **Bütçe Güncellemeleri** — En son Finans Yasası bilgileri

</td>
<td width="50%">

### 📋 Göçmenlik ve Vize
- **Stamp Kategorileri** — Tüm stamp türleri açıklamalı
- **Çalışma İzinleri** — Critical Skills ve Genel izinler
- **Ankara Anlaşması** — Türk vatandaşlarına özel haklar
- **Aile Birleşimi** — AEB dışı aile politikaları
- **IRP Yenileme** — Kayıt gereksinimleri

</td>
</tr>
<tr>
<td width="50%">

### 🏥 Sağlık
- **Medical Card** — Başvuru süreci ve uygunluk
- **HSE Hizmetleri** — Ulusal sağlık hizmeti rehberi
- **GP Visit Card** — Alternatif sağlık seçenekleri
- **Acil Durumlar** — Ne zaman ve nasıl başvurulur

</td>
<td width="50%">

### 🏠 Konut ve Yardımlar
- **Rent Tax Credit** — Yıllık €750'ye kadar talep edin
- **Kiracı Hakları** — Yasal korumalar
- **Sosyal Yardımlar** — SW19 ödeme oranları
- **PPS Numarası** — Başvuru rehberliği

</td>
</tr>
</table>

<br />

---

<br />

# 🚀 Kurulum

### Gereksinimler

- **Node.js** 18.17 veya üzeri
- **Python** 3.9+ (belge işleme için)
- **npm** veya **yarn** veya **pnpm**
- **API Anahtarları**: OpenAI, Pinecone, LlamaCloud

### Hızlı Başlangıç

```bash
# 1. Repository'yi klonlayın
git clone https://github.com/cemkoyluoglu/ireland-rag-assistant.git
cd ireland-rag-assistant

# 2. Bağımlılıkları yükleyin
npm install

# 3. Ortam değişkenlerini ayarlayın
cp .env.example .env.local

# 4. .env.local dosyasında API anahtarlarını yapılandırın
# NEXT_PUBLIC_WEBHOOK_URL, LLAMA_CLOUD_API_KEY vb. düzenleyin

# 5. Geliştirme sunucusunu başlatın
npm run dev
```

Uygulamayı görmek için [http://localhost:3000](http://localhost:3000) adresini açın.

<br />

### Ortam Değişkenleri Yapılandırması

Aşağıdaki değişkenlerle bir `.env.local` dosyası oluşturun:

```env
# Frontend Webhook
NEXT_PUBLIC_WEBHOOK_URL=https://n8n-adresiniz/webhook/ireland-rag

# LlamaCloud (PDF İşleme)
LLAMA_CLOUD_API_KEY=llx-anahtariniz

# Pinecone (Vektör Veritabanı)
PINECONE_API_KEY=pcsk_anahtariniz
PINECONE_INDEX=ireland-rag-assistant
PINECONE_HOST=index-adresiniz.svc.pinecone.io

# OpenAI (İsteğe bağlı - n8n kullanmıyorsanız)
OPENAI_API_KEY=sk-anahtariniz
```

<br />

### Belge İşleme

PDF'leri bilgi tabanına dönüştürmek için:

```bash
# 1. Python bağımlılıklarını yükleyin
pip install -r requirements.txt

# 2. PDF'leri official_pdfs/ dizinine yerleştirin

# 3. Dönüştürme scriptini çalıştırın
python convert_pdfs_to_markdown.py
```

<br />

---

<br />

# 📁 Proje Yapısı

```
ireland-rag-assistant/
├── 📂 app/                          # Next.js App Router
│   ├── globals.css                  # Global stiller ve Tailwind
│   ├── layout.tsx                   # Kök layout bileşeni
│   └── page.tsx                     # Ana sayfa bileşeni
│
├── 📂 components/                   # React bileşenleri
│   ├── Chat.tsx                     # Ana sohbet konteyner
│   ├── Footer.tsx                   # Alt bilgi bileşeni
│   ├── Header.tsx                   # Üst bilgi ve marka
│   ├── LoadingIndicator.tsx         # Yazma animasyonu
│   ├── Message.tsx                  # Mesaj baloncuğu bileşeni
│   └── index.ts                     # Barrel export'lar
│
├── 📂 official_pdfs/                # Kaynak belgeler (18 dosya)
│   └── ... resmi İrlanda belgeleri
│
├── 📂 markdown_files/               # İşlenmiş belgeler (çıktı)
│
├── 📄 convert_pdfs_to_markdown.py   # LlamaParse dönüştürme scripti
├── 📄 requirements.txt              # Python bağımlılıkları
├── 📄 package.json                  # Node.js bağımlılıkları
└── 📄 .env.example                  # Ortam değişkenleri şablonu
```

<br />

---

<br />

# 📡 API Referansı

### Webhook Endpoint

Uygulama, sorguları işlemek için bir n8n webhook ile iletişim kurar.

#### İstek

```http
POST /webhook/ireland-rag
Content-Type: application/json
```

```json
{
  "sessionId": "550e8400-e29b-41d4-a716-446655440000",
  "message": "PAYE vergimi nasıl hesaplarım?",
  "source": "web"
}
```

#### Yanıt

```json
{
  "ok": true,
  "response": "İrlanda'da PAYE verginizi hesaplamak için..."
}
```

<br />

### Parametreler

| Parametre | Tür | Açıklama |
|-----------|-----|----------|
| `sessionId` | `string` | Sohbet sürekliliği için UUID v4 |
| `message` | `string` | Kullanıcının sorusu veya mesajı |
| `source` | `string` | İstemci tanımlayıcı (`"web"`, `"mobile"` vb.) |

<br />

---

<br />

# 📚 Bilgi Tabanı

RAG sistemi, doğruluk ve güvenilirlik sağlayan **18 resmi İrlanda hükümeti belgesiyle** desteklenmektedir:

<details>
<summary><b>📋 Tam Belge Listesini Görüntüle</b></summary>

<br />

| Belge | Kategori | Kaynak |
|-------|----------|--------|
| Sosyal Yardım ve Vergiler Kitapçığı 2025 | Finans | Revenue |
| Bütçe 2026 Vergi Politikası Değişiklikleri | Finans | Gov.ie |
| Finans Yasası 2025 | Finans | Oireachtas |
| Finans Yasası Açıklama Notu | Finans | Oireachtas |
| Revenue Bütçe 2026 Özeti | Finans | Revenue |
| PRSI Katkı Oranları SW14 | Sosyal Yardım | DEASP |
| SW19 Ödeme Oranları 2025 | Sosyal Yardım | DEASP |
| Kira Vergi Kredisi İncelemesi | Konut | Revenue |
| İyi Ev Sahibi Kiracı Rehberi | Konut | RTB |
| Critical Skills İzin Kontrol Listesi | Göçmenlik | DETE |
| Genel Çalışma İzni Kontrol Listesi | Göçmenlik | DETE |
| AEB Dışı Aile Birleşimi Politikası | Göçmenlik | INIS |
| IRP Yenileme Belgeleri Rehberi | Göçmenlik | GNIB |
| Vatandaşlık Rehberi 2024 | Göçmenlik | INIS |
| HSE Ulusal Hizmet Planı 2025 | Sağlık | HSE |
| Medical Card Başvuru Formu | Sağlık | HSE |
| Medical Card Değerlendirme Kılavuzu | Sağlık | HSE |

</details>

<br />

---

<br />

# 🚢 Dağıtım

### Vercel (Önerilen)

[![Vercel ile Dağıt](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/cemkoyluoglu/ireland-rag-assistant)

1. Yukarıdaki butona tıklayın veya [Vercel](https://vercel.com)'e repository'yi import edin
2. Proje Ayarları'nda ortam değişkenlerini ekleyin
3. Dağıtın!

<br />

---

<br />

# 🤝 Katkıda Bulunma

Katkılar, açık kaynak topluluğunu harika yapan şeydir! Yaptığınız her katkı **çok değerlidir**.

### Nasıl Katkıda Bulunulur

1. Repository'yi **Fork** edin
2. Özellik dalınızı **oluşturun** (`git checkout -b feature/HarikaOzellik`)
3. Değişikliklerinizi **commit** edin (`git commit -m 'Harika bir özellik ekle'`)
4. Dalı **push** edin (`git push origin feature/HarikaOzellik`)
5. Bir **Pull Request** açın

<br />

---

<br />

# 📄 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır — detaylar için [LICENSE](LICENSE) dosyasına bakın.

```
MIT Lisansı

Telif Hakkı (c) 2025 Cem Koyluoglu

Bu yazılımın ve ilişkili dokümantasyon dosyalarının ("Yazılım") bir kopyasını 
alan herhangi bir kişiye, aşağıdaki koşullara tabi olarak, Yazılımı 
kısıtlama olmaksızın kullanma, kopyalama, değiştirme, birleştirme, yayımlama, 
dağıtma, alt lisanslama ve/veya satma hakları dahil olmak üzere, Yazılımla 
ilgili işlem yapma izni ücretsiz olarak verilir.
```

<br />

---

<br />

<div align="center">

### ⭐ Bu projeyi faydalı bulduysanız yıldız vermeyi unutmayın!

<br />

**Tüm Hakları Saklıdır © 2025 Cem Koyluoglu**

<br />

Made with ❤️ in Dublin, Ireland 🇮🇪

<br />

[⬆ Başa Dön](#-ireland-rag-assistant)

</div>
