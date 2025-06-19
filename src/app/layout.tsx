import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marmaray Otomat",
  description: "Marmaray Otomat, kaliteli ve güvenilir otomat hizmetleri sunar.",
  icons: {
    icon: "/logo.png", // public/log.png yolunda olmalı
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Marmaray Otomat",
    description: "Otomat sistemlerinde uzman çözüm ortağınız.",
    url: "https://marmarayotomat.com",
    siteName: "Marmaray Otomat",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Marmaray Otomat",
      },
    ],
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
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
