import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionShell } from "@/components/section-shell";
import { formatKrw, productData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "제품",
  description: "PDRN 리퀴드샷의 제품 구성과 가격을 확인해 보세요.",
};

export default function ProductPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="glass-panel overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#f8e4ee] via-[#fffaf7] to-[#ece5de] p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.95),transparent_30%),radial-gradient(circle_at_72%_72%,rgba(255,216,235,0.72),transparent_30%)]" />
              <Image
                src={productData.imagePath}
                alt={productData.name}
                width={760}
                height={760}
                className="relative mx-auto w-full max-w-[460px]"
                priority
              />
            </div>

            <div>
              <p className="eyebrow">Product Detail</p>
              <h1 className="section-title mt-4">{productData.name}</h1>
              <p className="mt-4 text-lg leading-8 text-muted">
                {productData.category} / {productData.pack}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="feature-card">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted">Price</p>
                  <p className="mt-3 text-2xl font-semibold text-ink">{formatKrw(productData.price)}</p>
                </div>
                <div className="feature-card">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted">Package</p>
                  <p className="mt-3 text-2xl font-semibold text-ink">{productData.pack}</p>
                </div>
              </div>

              <p className="mt-8 text-sm leading-7 text-muted">
                개별 스틱으로 구성되어 가볍게 챙기기 좋고, 부드러운 패키지 무드로 일상에 자연스럽게
                어울리는 제품입니다.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/order" className="pill inline-flex">
                  주문하기
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center rounded-full border border-[#d8c5d0] bg-white/65 px-6 py-4 text-sm font-semibold text-ink transition hover:bg-white"
                >
                  자주 묻는 질문
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="What's Inside"
        title="제품 정보를 간결하게 한눈에"
        description="패키지 표기 기준 주요 원료와 구성을 보기 편하게 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {productData.ingredients.map((ingredient) => (
            <article key={ingredient.title} className="feature-card">
              <p className="eyebrow">{ingredient.amount}</p>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{ingredient.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{ingredient.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
