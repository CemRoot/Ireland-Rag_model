import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dublin Expat Assistant | İrlanda'daki Türkler için AI Asistan",
  description:
    "İrlanda'da yaşayan Türkler için vergi hesaplama, vize bilgileri, PPS başvurusu ve daha fazlası hakkında yardım alın.",
  keywords: [
    "Dublin",
    "Ireland",
    "Turkish expat",
    "Türk göçmen",
    "vergi hesaplama",
    "PAYE",
    "PPS",
    "vize",
    "Stamp 1G",
  ],
  authors: [{ name: "Cem Koyluoglu" }],
  openGraph: {
    title: "Dublin Expat Assistant",
    description: "İrlanda'daki Türkler için AI Asistan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

