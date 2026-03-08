import type { Metadata } from "next";
import Link from "next/link";

import { EditorialPhoto } from "@/components/editorial-photo";
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
  supportingPhotos,
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

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="glass-panel overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 xl:grid-cols-[0.98fr_1.02fr] xl:items-center">
            <ProductVisual variant="hero" priority className="min-h-[420px] sm:min-h-[600px]" />

            <div className="space-y-7">
              <div>
                <p className="eyebrow">Product detail</p>
                <h1 className="hero-display mt-5 max-w-[10ch] break-keep">{productData.name}</h1>
                <p className="mt-6 text-[1.08rem] leading-8 text-muted">
                  {productData.category} / {productData.pack}
                </p>
                <p className="section-note mt-6 max-w-2xl">{productData.heroDescription}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {packageDetails.map((detail, index) => (
                  <article key={detail.title} className={index === 0 || index === 3 ? "feature-card" : "outline-card"}>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-muted">{detail.title}</p>
                    <p className="mt-4 font-display text-[clamp(1.5rem,2vw,2.2rem)] leading-[1.14] tracking-[-0.04em] text-ink">
                      {detail.value}
                    </p>
                  </article>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/order" className="pill inline-flex">
                  주문하기
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(170,144,145,0.3)] bg-white/58 px-6 py-4 text-sm font-medium text-ink transition duration-200 hover:bg-white/78"
                >
                  자주 묻는 질문
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Product points"
        title="제품을 더 쉽게 이해하게 만드는 네 가지 포인트"
        description="핵심 배합, 휴대성, 패키지 인상, 선물 무드까지 실제 제품을 볼 때 가장 먼저 읽히는 요소만 선별해 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {signaturePoints.map((point, index) => (
            <article key={point.title} className={index === 1 ? "ink-panel p-7" : index === 2 ? "feature-card" : "story-slab"}>
              <p className={`text-[11px] uppercase tracking-[0.34em] ${index === 1 ? "text-white/54" : "text-[#8c1656]"}`}>
                {point.label}
              </p>
              <h2 className={`card-title mt-4 ${index === 1 ? "text-white" : ""}`}>{point.title}</h2>
              <p className={`mt-4 break-keep text-sm leading-8 ${index === 1 ? "text-white/74" : "text-muted"}`}>{point.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Ingredient story"
        title="한 포에 담긴 주요 원료를 제품 무드와 함께 보여줍니다"
        description="원료 정보는 숫자만으로 끝나지 않습니다. 이 제품이 어떤 결의 이너뷰티인지까지 읽히도록 배합량과 톤을 함께 보여주는 구성이 중요합니다."
      >
        <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <EditorialPhoto
            src={supportingPhotos[0].imagePath}
            alt={supportingPhotos[0].title}
            eyebrow="Pharmacy reference"
            title={supportingPhotos[0].title}
            body={supportingPhotos[0].body}
            className="min-h-[540px]"
          />
          <div className="grid gap-4">
            <article className="story-slab">
              <p className="eyebrow">한 포 기준</p>
              <h2 className="card-title mt-4">PDRN 3,000mg · 피쉬콜라겐 1,000mg · 병풀추출분말 200mg</h2>
              <p className="card-copy mt-4">
                제품 전면에 드러나는 핵심 배합을 그대로 가져와 제품 성격이 더 선명하게 읽히도록 정리했습니다.
              </p>
            </article>
            <div className="grid gap-4 lg:grid-cols-3">
              {productData.ingredients.map((ingredient, index) => (
                <article key={ingredient.title} className={index === 1 ? "ink-panel p-7" : "outline-card"}>
                  <p className={`eyebrow ${index === 1 ? "text-white/54" : ""}`}>{ingredient.amount}</p>
                  <h2 className={`card-title mt-4 ${index === 1 ? "text-white" : ""}`}>{ingredient.title}</h2>
                  <p className={`mt-4 break-keep text-sm leading-8 ${index === 1 ? "text-white/74" : "text-muted"}`}>{ingredient.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Routine scenes"
        title="일상에서 만나는 PDRN 리퀴드샷"
        description="아침 준비, 사무실, 외출과 선물용까지 실제로 제품이 놓이는 장면을 기준으로 루틴 이미지를 더 풍부하게 정리했습니다."
      >
        <div className="grid gap-6 xl:grid-cols-[0.98fr_1.02fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {routineScenes.map((scene, index) => (
              <article key={scene.step} className={index === 1 ? "story-slab" : "outline-card"}>
                <p className="font-accent text-[3rem] italic leading-none text-[#8c1656]">{scene.step}</p>
                <h2 className="card-title mt-4">{scene.title}</h2>
                <p className="card-copy mt-4">{scene.text}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-5">
            <EditorialPhoto
              src={supportingPhotos[1].imagePath}
              alt={supportingPhotos[1].title}
              eyebrow="Daily shot"
              title={supportingPhotos[1].title}
              body={supportingPhotos[1].body}
              className="min-h-[360px]"
            />
            <article className="feature-card">
              <p className="eyebrow">구성 안내</p>
              <h2 className="card-title mt-4">한 박스 10포 구성, 액상 스틱 타입</h2>
              <p className="card-copy mt-4">
                부피가 큰 통 제품보다 필요한 수량만 가볍게 챙기기 쉬운 포맷으로 정리해, 데일리 루틴 제품처럼
                부담 없이 이어가기 좋습니다.
              </p>
              <div className="section-grid-line mt-6 pt-6 text-sm leading-7 text-ink">
                판매가 {formatKrw(productData.price)} / 구성 {productData.pack}
              </div>
            </article>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Package library"
        title="제품 무드를 더 풍부하게 보여주는 패키지 비주얼"
        description="실제 제품 이미지를 중심에 두고, 약국 무드와 데스크 장면을 보조적으로 섞어 브랜드의 밀도를 높였습니다."
      >
        <div className="grid gap-5 lg:grid-cols-[1.06fr_0.94fr]">
          <article className="feature-card p-0">
            <ProductVisual variant={editorialGallery[0].variant} className="min-h-[380px] rounded-b-none sm:min-h-[520px]" />
            <div className="p-7 sm:p-8">
              <p className="eyebrow">Main package</p>
              <h2 className="card-title mt-4">{editorialGallery[1].title}</h2>
              <p className="card-copy mt-4">{editorialGallery[1].body}</p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            <EditorialPhoto
              src={supportingPhotos[2].imagePath}
              alt={supportingPhotos[2].title}
              eyebrow="Desk mood"
              title={supportingPhotos[2].title}
              body={supportingPhotos[2].body}
              className="min-h-[260px]"
            />
            <article className="outline-card p-0">
              <ProductVisual variant={editorialGallery[4].variant} className="min-h-[240px] rounded-b-none" />
              <div className="p-6">
                <p className="eyebrow">Gift edit</p>
                <h2 className="card-title mt-4">{editorialGallery[4].title}</h2>
                <p className="card-copy mt-4">{editorialGallery[4].body}</p>
              </div>
            </article>
            <EditorialPhoto
              src={supportingPhotos[0].imagePath}
              alt={supportingPhotos[0].title}
              eyebrow="Pharmacy tone"
              title={supportingPhotos[0].title}
              body={supportingPhotos[0].body}
              className="min-h-[260px]"
            />
            <article className="story-slab p-0">
              <ProductVisual variant={editorialGallery[5].variant} className="min-h-[240px] rounded-b-none" />
              <div className="p-6">
                <p className="eyebrow">Signature cut</p>
                <h2 className="card-title mt-4">{editorialGallery[5].title}</h2>
                <p className="card-copy mt-4">{editorialGallery[5].body}</p>
              </div>
            </article>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Review notes"
        title="실제 구매 시 먼저 반응하는 포인트"
        description="휴대성, 첫인상, 선물용 무드처럼 제품을 처음 접하는 분들이 주로 언급하는 포인트를 장면 중심으로 묶었습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {sampleReviews.slice(0, 6).map((review, index) => (
            <article
              key={review.name}
              className={`${index === 1 || index === 4 ? "story-slab" : "outline-card"} ${index === 2 ? "feature-card" : ""}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-sm text-muted">{review.tag}</p>
                </div>
                <p className="text-sm font-semibold text-[#8c1656]">★★★★★</p>
              </div>
              <h2 className="mt-5 font-display text-[clamp(1.35rem,1.8vw,1.95rem)] leading-[1.22] tracking-[-0.04em] text-ink">
                {review.title}
              </h2>
              <p className="mt-4 break-keep text-sm leading-8 text-muted">{review.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
