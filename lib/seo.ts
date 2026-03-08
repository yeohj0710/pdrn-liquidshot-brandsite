import type { Metadata } from "next";

import { companyInfo, productData, siteUrl as fallbackSiteUrl } from "@/lib/site-data";

const resolvedSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
const siteUrl =
  resolvedSiteUrl || (process.env.NODE_ENV === "development" ? "http://localhost:3000" : fallbackSiteUrl);

export function getSiteUrl() {
  return siteUrl;
}

export function buildAbsoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

export function createPageMetadata(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const canonical = buildAbsoluteUrl(input.path);
  const image = input.image ? buildAbsoluteUrl(input.image) : buildAbsoluteUrl(productData.imagePath);

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: companyInfo.brandName,
      locale: "ko_KR",
      type: input.type ?? "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 1200,
          alt: productData.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
    robots: input.noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: false,
          },
        }
      : undefined,
  };
}

export function getOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.brandName,
    alternateName: companyInfo.legalName,
    url: buildAbsoluteUrl("/"),
    logo: buildAbsoluteUrl("/icon.svg"),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyInfo.phone,
        contactType: "customer service",
        areaServed: "KR",
        availableLanguage: ["ko"],
      },
    ],
  };
}

export function getWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.brandName,
    alternateName: "K-PharmRx PDRN Liquid Shot",
    url: buildAbsoluteUrl("/"),
    inLanguage: "ko-KR",
  };
}

export function getProductStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productData.name,
    image: [buildAbsoluteUrl(productData.imagePath)],
    description: productData.heroDescription,
    brand: {
      "@type": "Brand",
      name: companyInfo.brandName,
    },
    category: productData.category,
    sku: "PDRN-LIQUID-SHOT-10X10",
    offers: {
      "@type": "Offer",
      url: buildAbsoluteUrl("/product"),
      priceCurrency: "KRW",
      price: productData.price.toString(),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };
}

export function getFaqStructuredData(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
