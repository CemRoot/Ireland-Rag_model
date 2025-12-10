# Dublin Expat Assistant 🇮🇪

İrlanda'da yaşayan Türkler için AI destekli asistan.

## Özellikler

- 💰 Vergi hesaplama (PAYE, USC, PRSI)
- 📋 Vize bilgileri (Stamp 1G, Ankara Anlaşması)
- 🆔 PPS başvurusu rehberliği
- 🏠 Kira ve Rent Tax Credit bilgileri
- 📄 Bordro analizi

## Teknolojiler

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

## Kurulum

### 1. Bağımlılıkları yükleyin

```bash
npm install
```

### 2. Ortam değişkenlerini ayarlayın

`.env.example` dosyasını `.env.local` olarak kopyalayın:

```bash
cp .env.example .env.local
```

Ardından `NEXT_PUBLIC_WEBHOOK_URL` değişkenini n8n webhook URL'iniz ile güncelleyin:

```env
NEXT_PUBLIC_WEBHOOK_URL=https://your-n8n-url/webhook/dublin-expat
```

### 3. Geliştirme sunucusunu başlatın

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## API Entegrasyonu

Uygulama, n8n webhook'una POST istekleri gönderir:

```typescript
// İstek
{
  sessionId: string,  // UUID v4, sessionStorage'da saklanır
  message: string,    // Kullanıcı mesajı
  source: "web"       // Kaynak tanımlayıcı
}

// Yanıt
{
  ok: boolean,
  response: string    // AI yanıtı
}
```

## Vercel'e Deploy

1. [Vercel](https://vercel.com)'e giriş yapın
2. Bu repository'yi import edin
3. `NEXT_PUBLIC_WEBHOOK_URL` ortam değişkenini ekleyin
4. Deploy edin!

## Proje Yapısı

```
├── app/
│   ├── globals.css      # Global stiller ve Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Ana sayfa
├── components/
│   ├── Chat.tsx         # Chat container
│   ├── Footer.tsx       # Footer bileşeni
│   ├── Header.tsx       # Header bileşeni
│   ├── LoadingIndicator.tsx  # Yükleme animasyonu
│   └── Message.tsx      # Mesaj bileşeni
├── .env.example         # Örnek ortam değişkenleri
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Lisans

MIT

## Geliştirici

**Cem Koyluoglu**

- GitHub: [@cemkoyluoglu](https://github.com/cemkoyluoglu)
- LinkedIn: [cemkoyluoglu](https://linkedin.com/in/cemkoyluoglu)

