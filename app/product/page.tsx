import type { Metadata } from "next";
import Link from "next/link";

import { ProductVisual } from "@/components/product-visual";
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
  description: "PDRN 리퀴드샷의 제품 구성, 판매가, 핵심 배합과 패키지 포인트를 확인해 보세요.",
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
        <div className="glass-panel overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <ProductVisual variant="hero" className="min-h-[380px] sm:min-h-[580px]" />

            <div>
              <p className="eyebrow">제품 소개</p>
              <h1 className="section-title mt-4 max-w-3xl">{productData.name}</h1>
              <p className="mt-4 break-keep text-lg leading-8 text-muted">
                {productData.category} / {productData.pack}
              </p>
              <p className="mt-6 break-keep text-sm leading-8 text-muted">{productData.heroDescription}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {packageDetails.map((detail, index) => (
                  <article key={detail.title} className={index === 0 || index === 3 ? "feature-card" : "outline-card"}>
                    <p className="text-sm tracking-[0.18em] text-muted">{detail.title}</p>
                    <p className="mt-3 break-keep text-[clamp(1.3rem,1.9vw,1.9rem)] font-semibold text-ink">
                      {detail.value}
                    </p>
                  </article>
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
        eyebrow="제품 포인트"
        title="제품을 이해하기 쉽게 정리한 네 가지 포인트"
        description="핵심 배합, 데일리 포맷, 패키지 인상, 선물용 무드까지 처음 보는 분도 빠르게 이해할 수 있도록 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {signaturePoints.map((point, index) => (
            <article key={point.title} className={index === 1 || index === 3 ? "story-slab" : "outline-card"}>
              <p className="eyebrow">{point.label}</p>
              <h2 className="card-title mt-4">{point.title}</h2>
              <p className="card-copy mt-4">{point.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="핵심 배합"
        title="한 포에 담긴 주요 원료"
        description="패키지 표기 기준 주요 원료와 배합량을 한눈에 읽히도록 구성했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <ProductVisual variant="dark" className="min-h-[340px] sm:min-h-[480px]" />
          <div className="grid gap-5 lg:grid-cols-3">
            {productData.ingredients.map((ingredient, index) => (
              <article key={ingredient.title} className={index === 1 ? "ink-panel p-8" : "story-slab"}>
                <p className={`eyebrow ${index === 1 ? "text-white/60" : ""}`}>{ingredient.amount}</p>
                <h2 className={`mt-4 card-title ${index === 1 ? "text-white" : ""}`}>{ingredient.title}</h2>
                <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/75" : "text-muted"}`}>{ingredient.description}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="루틴 장면"
        title="일상에서 만나는 PDRN 리퀴드샷"
        description="출근 준비 전, 사무실, 외출과 선물용까지 실제로 제품이 놓이는 장면을 중심으로 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {routineScenes.map((scene, index) => (
              <article key={scene.step} className={index === 1 ? "feature-card" : "outline-card"}>
                <p className="font-serif text-4xl italic text-[#8b125c]">{scene.step}</p>
                <h2 className="card-title mt-4">{scene.title}</h2>
                <p className="card-copy mt-4">{scene.text}</p>
              </article>
            ))}
          </div>

          <article className="story-slab">
            <p className="eyebrow">구성 안내</p>
            <h2 className="card-title mt-3">한 박스 10포 구성, 액상 스틱 타입</h2>
            <p className="card-copy mt-4">
              부피가 큰 통 제품보다 필요한 수량만 가볍게 챙기기 쉬운 포맷으로 정리해, 데일리 루틴 제품처럼
              부담 없이 이어가기 좋습니다.
            </p>
            <div className="section-grid-line mt-6 pt-6 text-sm leading-7 text-ink">
              판매가 {formatKrw(productData.price)} / 구성 {productData.pack}
            </div>
            <div className="mt-6">
              <ProductVisual variant="focus" className="min-h-[260px]" />
            </div>
          </article>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="패키지 컷"
        title="제품 무드를 풍부하게 보여주는 패키지 비주얼"
        description="실제 제품 이미지를 기준으로 전면, 메인 패키지, 선물용 인상까지 서로 다른 결로 전개했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="feature-card p-0">
            <ProductVisual variant={editorialGallery[0].variant} className="min-h-[360px] rounded-b-none sm:min-h-[500px]" />
            <div className="p-7">
              <p className="eyebrow">메인 패키지</p>
              <h2 className="card-title mt-3">{editorialGallery[1].title}</h2>
              <p className="card-copy mt-4">{editorialGallery[1].body}</p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {editorialGallery.slice(3, 6).map((item, index) => (
              <article key={item.title} className={index === 1 ? "story-slab p-0" : "outline-card p-0"}>
                <ProductVisual variant={item.variant} className="min-h-[220px] rounded-b-none" />
                <div className="p-6">
                  <p className="eyebrow">상세 컷</p>
                  <h2 className="card-title mt-3">{item.title}</h2>
                  <p className="card-copy mt-4">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="리뷰"
        title="실제 구매 시 먼저 반응하는 포인트"
        description="휴대성, 첫인상, 선물용 무드처럼 제품을 처음 접하는 분들이 주로 언급하는 포인트를 모았습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {sampleReviews.slice(0, 6).map((review, index) => (
            <article
              key={review.name}
              className={`${index % 3 === 1 ? "story-slab" : "outline-card"} shadow-[0_16px_40px_rgba(74,52,64,0.08)]`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-sm text-muted">{review.tag}</p>
                </div>
                <p className="text-sm font-semibold text-[#8b125c]">★★★★★</p>
              </div>
              <h2 className="mt-5 break-keep text-[clamp(1.35rem,1.8vw,1.8rem)] font-semibold leading-8 text-ink">
                {review.title}
              </h2>
              <p className="mt-4 break-keep text-sm leading-7 text-muted">{review.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
