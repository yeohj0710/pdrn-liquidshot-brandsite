import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionShell } from "@/components/section-shell";
import {
  editorialGallery,
  formatKrw,
  packageDetails,
  productData,
  routineScenes,
  sampleReviews,
  signaturePoints,
} from "@/lib/site-data";
import { createPageMetadata, getProductStructuredData } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "제품",
  description: "PDRN 리퀴드샷의 제품 구성, 판매가, 주요 원료를 확인해 보세요.",
  path: "/product",
  image: productData.imagePath,
});

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProductStructuredData()),
        }}
      />

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
              <p className="mt-6 text-sm leading-7 text-muted">{productData.heroDescription}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {packageDetails.map((detail) => (
                  <div key={detail.title} className="feature-card">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted">{detail.title}</p>
                    <p className="mt-3 text-2xl font-semibold text-ink">{detail.value}</p>
                  </div>
                ))}
              </div>

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
        eyebrow="What To Expect"
        title="제품을 이해하기 쉽게 정리한 네 가지 포인트"
        description="핵심 배합, 데일리 포맷, 패키지 인상, 선물하기 좋은 무드까지 제품을 대표하는 포인트를 담았습니다."
      >
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {signaturePoints.map((point) => (
            <article key={point.title} className="feature-card">
              <p className="eyebrow">{point.label}</p>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{point.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{point.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="What's Inside"
        title="한 포에 담긴 주요 원료"
        description="패키지 표기 기준 주요 원료와 구성 정보를 보기 좋게 정리했습니다."
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

      <SectionShell
        eyebrow="Daily Scene"
        title="일상에서 만나는 PDRN 리퀴드샷"
        description="브랜드가 상상하는 사용 장면을 통해 제품의 포맷과 무드를 함께 전달합니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {routineScenes.map((scene) => (
            <article key={scene.step} className="feature-card">
              <p className="font-serif text-4xl italic text-[#8b125c]">{scene.step}</p>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{scene.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{scene.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-sm leading-7 text-muted">
          판매가 {formatKrw(productData.price)} / 구성 {productData.pack}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Editorial Cut"
        title="제품 무드를 채우는 비주얼"
        description="클린한 배경, 유리 질감, 라이트 톤의 에디토리얼 컷으로 제품의 결을 함께 보여줍니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {editorialGallery.map((item) => (
            <article key={item.title} className="feature-card overflow-hidden p-0">
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Review"
        title="실제 구매 시 가장 먼저 반응하는 포인트"
        description="휴대성, 패키지 무드, 선물하기 좋은 구성처럼 고객이 먼저 체감하는 반응을 중심으로 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {sampleReviews.map((review) => (
            <article key={review.name} className="feature-card">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-sm text-muted">{review.tag}</p>
                </div>
                <p className="text-sm font-semibold text-[#8b125c]">★★★★★</p>
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-ink">{review.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{review.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
