import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionShell } from "@/components/section-shell";
import {
  contactChannels,
  editorialCards,
  editorialGallery,
  faqItems,
  formatKrw,
  heroStats,
  idealForItems,
  packageDetails,
  productData,
  qualityPromises,
  routineScenes,
  sampleReviews,
  signaturePoints,
  storyHighlights,
} from "@/lib/site-data";
import { createPageMetadata, getWebsiteStructuredData } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "PDRN 리퀴드샷 공식 스토어",
  description:
    "한국 약국 감도의 더마 이너뷰티 브랜드 K-PharmRx의 PDRN 리퀴드샷 공식 스토어입니다. 제품 소개, 원료 구성, 리뷰, FAQ, 문의 정보를 확인해 보세요.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebsiteStructuredData()),
        }}
      />

      <section className="mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="eyebrow">{productData.heroEyebrow}</p>
          <h1 className="section-title mt-4 max-w-4xl">{productData.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{productData.heroDescription}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/product" className="pill inline-flex">
              제품 자세히 보기
            </Link>
            <Link
              href="/order"
              className="inline-flex items-center justify-center rounded-full border border-[#d8c5d0] bg-white/70 px-6 py-4 text-sm font-semibold text-ink transition hover:bg-white"
            >
              주문 페이지
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="feature-card">
                <p className="text-sm uppercase tracking-[0.24em] text-muted">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/70 bg-white/55 p-6 sm:grid-cols-3">
            {storyHighlights.map((item) => (
              <div key={item.title}>
                <p className="text-base font-semibold text-ink">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 top-14 h-48 w-48 rounded-full bg-[#ffd8eb] blur-3xl" />
          <div className="absolute bottom-8 right-6 h-56 w-56 rounded-full bg-[#eadcca] blur-3xl" />
          <div className="glass-panel relative w-full overflow-hidden p-8 shadow-velvet">
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#f8e3ed] via-[#fffaf6] to-[#f2ebe5] p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_24%,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_72%_70%,rgba(255,216,235,0.66),transparent_36%)]" />
              <Image
                src={productData.imagePath}
                alt={productData.name}
                width={760}
                height={760}
                priority
                className="relative z-10 mx-auto w-full max-w-[470px] animate-float"
              />
            </div>

            <div className="mt-6 grid gap-4 rounded-[1.75rem] bg-white/75 p-5 sm:grid-cols-2">
              {packageDetails.map((item) => (
                <div key={item.title}>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted">{item.title}</p>
                  <p className="mt-2 text-lg font-semibold text-ink">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[1.75rem] bg-[#fffaf7] p-5">
              <p className="eyebrow">Daily Note</p>
              <p className="mt-3 text-sm leading-7 text-muted">{productData.purchaseNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="eyebrow">Brand Mood</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              K-PharmRx는 한국 약국의 단정한 신뢰감과 K-뷰티의 부드러운 감각을 함께 담아냅니다.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {editorialCards.map((card) => (
              <article key={card.title} className="rounded-[1.5rem] border border-white/70 bg-white/60 p-5">
                <p className="quote-mark">&quot;</p>
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionShell
        id="brand-story"
        eyebrow="Brand Story"
        title="한국 약국 감도로 완성한 부드럽고 정돈된 데일리 루틴"
        description="PDRN 리퀴드샷은 한눈에 이해되는 단일 제품 구성과 차분한 패키지 무드로, 부담 없이 손이 가는 이너뷰티 루틴을 제안합니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {storyHighlights.map((item) => (
            <article key={item.title} className="feature-card">
              <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Editorial"
        title="브랜드 무드를 채우는 에디토리얼 컷"
        description="클린 뷰티, 더마 무드, 부드러운 핑크 톤이 어우러진 이미지를 중심으로 브랜드의 결을 시각화했습니다."
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
                <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="product-story"
        eyebrow="Product Story"
        title="왜 PDRN 리퀴드샷인가"
        description="브랜드의 결을 가장 선명하게 보여주는 배합, 데일리 포맷, 패키지 무드, 선물하기 좋은 인상을 하나의 제품에 담았습니다."
      >
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {signaturePoints.map((point) => (
            <article key={point.title} className="feature-card">
              <p className="eyebrow">{point.label}</p>
              <h3 className="mt-4 text-2xl font-semibold text-ink">{point.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{point.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="formula-story"
        eyebrow="Key Formula"
        title="한 포에 담은 핵심 배합"
        description="패키지 표기 기준 주요 원료를 중심으로, 제품의 성격을 간결하고 선명하게 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {productData.ingredients.map((ingredient) => (
            <article key={ingredient.title} className="feature-card">
              <p className="eyebrow">{ingredient.amount}</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">{ingredient.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{ingredient.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Daily Scene"
        title="이런 순간에 잘 어울립니다"
        description="실제 구매 전 가장 많이 떠올리는 사용 장면을 기준으로, 제품이 일상에 놓이는 모습을 구체적으로 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {routineScenes.map((scene) => (
            <article key={scene.step} className="feature-card">
              <p className="font-serif text-4xl italic text-[#8b125c]">{scene.step}</p>
              <h3 className="mt-4 text-2xl font-semibold text-ink">{scene.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{scene.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="review-story"
        eyebrow="Review Snapshot"
        title="고객이 먼저 반응하는 포인트"
        description="휴대성, 패키지 무드, 가볍게 챙기는 루틴, 선물하기 좋은 인상처럼 실제 구매 결정에 영향을 주는 포인트를 중심으로 구성했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel p-8">
            <p className="text-base font-semibold text-ink">이런 분께 권합니다</p>
            <div className="mt-6 grid gap-4">
              {idealForItems.map((item, index) => (
                <div key={item} className="rounded-[1.5rem] bg-white/75 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted">Point 0{index + 1}</p>
                  <p className="mt-3 text-base leading-7 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {sampleReviews.map((review) => (
              <article key={review.name} className="feature-card">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">{review.name}</p>
                    <p className="text-sm text-muted">{review.tag}</p>
                  </div>
                  <p className="text-sm font-semibold text-[#8b125c]">★★★★★</p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-ink">{review.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{review.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Why People Like It"
        title="브랜드가 사랑받는 이유"
        description="가볍게 챙기기 쉬운 포맷, 부드러운 패키지, 주요 정보가 잘 보이는 구성까지 고객이 먼저 체감하는 장점을 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {qualityPromises.map((item) => (
            <article key={item.title} className="feature-card">
              <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="faq-preview"
        eyebrow="Quick Guide"
        title="자주 확인하는 안내"
        description="처음 방문하시는 분들이 가장 먼저 확인하는 내용만 추려 간단하게 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {faqItems.slice(0, 4).map((item) => (
            <article key={item.question} className="feature-card">
              <h3 className="text-2xl font-semibold text-ink">{item.question}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/faq" className="pill inline-flex">
            FAQ 전체 보기
          </Link>
        </div>
      </SectionShell>

      <SectionShell
        id="contact"
        eyebrow="Contact"
        title="제품과 주문 관련 문의를 한곳에서"
        description="고객센터, 이메일, 판매자 정보를 확인하고 필요한 페이지로 바로 이동하실 수 있습니다."
        className="pb-20"
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <div className="grid gap-5 sm:grid-cols-3">
            {contactChannels.map((channel) => (
              <article key={channel.title} className="feature-card">
                <p className="eyebrow">{channel.title}</p>
                <h3 className="mt-4 break-all text-xl font-semibold text-ink">{channel.value}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{channel.description}</p>
              </article>
            ))}
          </div>

          <div className="glass-panel p-8">
            <p className="eyebrow">Official Store</p>
            <h3 className="mt-3 text-3xl font-semibold text-ink">PDRN 리퀴드샷 공식 스토어</h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              제품 소개, 주문 안내, 리뷰, 자주 묻는 질문까지 한 흐름 안에서 확인하실 수 있도록
              준비했습니다. 제품 상세 페이지와 주문 페이지를 통해 필요한 내용을 이어서 확인해 보세요.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/product" className="pill inline-flex">
                제품 상세 보기
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#d8c5d0] bg-white/70 px-6 py-4 text-sm font-semibold text-ink transition hover:bg-white"
              >
                문의 페이지
              </Link>
            </div>
            <div className="section-grid-line mt-8 pt-6 text-sm leading-7 text-muted">
              판매가 {formatKrw(productData.price)} / 구성 {productData.pack} / 카테고리 {productData.category}
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
