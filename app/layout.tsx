import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { companyInfo, productData } from "@/lib/site-data";
import { buildAbsoluteUrl, getOrganizationStructuredData, getSiteUrl } from "@/lib/seo";

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
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "K-PharmRx | PDRN Liquid Shot",
    template: "%s | K-PharmRx",
  },
  description:
    "PDRN 리퀴드샷 공식 스토어입니다. 제품 정보, 원료 구성, 주문 안내를 한눈에 확인해 보세요.",
  applicationName: companyInfo.brandName,
  alternates: {
    canonical: buildAbsoluteUrl("/"),
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "K-PharmRx | PDRN Liquid Shot",
    description:
      "PDRN 리퀴드샷 공식 스토어. 제품 정보와 가격, 원료 구성을 한눈에 확인해 보세요.",
    url: buildAbsoluteUrl("/"),
    siteName: companyInfo.brandName,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: buildAbsoluteUrl(productData.imagePath),
        width: 1200,
        height: 1200,
        alt: productData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K-PharmRx | PDRN Liquid Shot",
    description: "PDRN 리퀴드샷 공식 스토어",
    images: [buildAbsoluteUrl(productData.imagePath)],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(getOrganizationStructuredData()),
              }}
            />
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
