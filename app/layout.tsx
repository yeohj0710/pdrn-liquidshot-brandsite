import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { productData, siteUrl } from "@/lib/site-data";

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "K-PharmRx | PDRN Liquid Shot",
    template: "%s | K-PharmRx",
  },
  description:
    "한국 약국 기반의 더마 이너뷰티 톤으로 설계한 PDRN Liquid Shot 브랜드 사이트입니다.",
  openGraph: {
    title: "K-PharmRx | PDRN Liquid Shot",
    description:
      "한국 약국 기반의 신뢰감과 K-뷰티형 프리미엄 무드를 조합한 PDRN Liquid Shot 브랜드 사이트.",
    images: [{ url: productData.imagePath, width: 1200, height: 1200 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${sans.variable} ${serif.variable} font-sans text-ink antialiased`}>
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.15]" />
          <div className="relative z-10">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
