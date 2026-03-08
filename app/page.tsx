import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionShell } from "@/components/section-shell";
import {
  brandStoryParagraphs,
  contactChannels,
  editorialCards,
  editorialGallery,
  faqItems,
  formatKrw,
  formulaStoryCards,
  heroStats,
  imageMosaic,
  idealForItems,
  packageDetails,
  productData,
  qualityPromises,
  routineChecklist,
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

function getReviewTone(index: number) {
  const tones = [
    "bg-white/80",
    "bg-[#fff6fb]",
    "bg-[#f8f1eb]",
    "bg-[#f6f0ff]",
    "bg-[#f7f4ee]",
    "bg-[#fff9f1]",
  ];

  return tones[index % tones.length];
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebsiteStructuredData()),
        }}
      />

      <section className="mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1fr_0.98fr] lg:px-10 lg:py-20">
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
              <div key={item.label} className="story-slab p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-muted">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {editorialCards.map((card) => (
              <article key={card.title} className="outline-card">
                <p className="text-sm uppercase tracking-[0.22em] text-[#8b125c]">{card.title}</p>
                <p className="mt-4 text-sm leading-7 text-muted">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 top-14 h-48 w-48 rounded-full bg-[#ffd8eb] blur-3xl" />
          <div className="absolute bottom-8 right-6 h-56 w-56 rounded-full bg-[#eadcca] blur-3xl" />
          <div className="glass-panel relative w-full overflow-hidden p-6 sm:p-8">
            <div className="grid gap-5 lg:grid-cols-[0.94fr_1.06fr]">
              <div className="relative rounded-[2.25rem] bg-gradient-to-br from-[#f8e3ed] via-[#fffaf6] to-[#f2ebe5] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_24%,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_72%_70%,rgba(255,216,235,0.66),transparent_36%)]" />
                <Image
                  src={productData.imagePath}
                  alt={productData.name}
                  width={760}
                  height={760}
                  priority
                  className="relative z-10 mx-auto w-full max-w-[430px] animate-float"
                />
              </div>

              <div className="grid gap-4">
                <div className="story-slab">
                  <p className="eyebrow">Daily Note</p>
                  <h2 className="mt-3 text-3xl font-semibold text-ink">한눈에 보이는 제품 정보와 부드러운 첫인상</h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{productData.purchaseNote}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {packageDetails.map((item) => (
                    <div key={item.title} className="outline-card">
                      <p className="text-sm uppercase tracking-[0.2em] text-muted">{item.title}</p>
                      <p className="mt-2 text-lg font-semibold text-ink">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="image-shell relative aspect-[4/3]">
                  <Image
                    src={editorialGallery[0].imagePath}
                    alt={editorialGallery[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(28,22,27,0.78)] to-transparent p-6 text-white">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/70">Editorial Cut</p>
                    <p className="mt-3 text-lg font-semibold">{editorialGallery[0].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        id="brand-story"
        eyebrow="Brand Story"
        title="한국 약국 감도의 부드럽고 정돈된 브랜드 서사"
        description="과한 자극보다 단정한 인상, 클린한 컬러, 데일리 루틴에 놓였을 때의 자연스러움을 중심으로 브랜드 스토리를 풀어냈습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="story-slab space-y-5">
            {brandStoryParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-muted">
                {paragraph}
              </p>
            ))}
            <div className="section-grid-line pt-5">
              <p className="text-sm leading-7 text-ink">
                판매가 {formatKrw(productData.price)} / 구성 {productData.pack} / 카테고리 {productData.category}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-3">
            {imageMosaic.map((imagePath, index) => (
              <div
                key={imagePath}
                className={`image-shell relative ${index === 0 ? "sm:col-span-2 sm:row-span-2 aspect-[4/3]" : ""} ${
                  index === 1 ? "aspect-[3/4]" : ""
                } ${index > 1 ? "aspect-[4/3]" : ""}`}
              >
                <Image
                  src={imagePath}
                  alt={`K-PharmRx editorial ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <section className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <div className="ink-panel overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="eyebrow text-white/60">Brand Highlights</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-white">
                보는 순간 차분하고, 매일 꺼내기 쉬운 이너뷰티 루틴
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
                제품을 고를 때 고객이 가장 먼저 확인하는 건 복잡한 설명보다 첫인상, 휴대성, 패키지
                무드, 선물용으로의 적합성입니다. PDRN 리퀴드샷은 그 네 가지 포인트를 한 제품 안에
                자연스럽게 담아냈습니다.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {storyHighlights.map((item) => (
                  <div key={item.title} className="stat-chip">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {signaturePoints.map((point, index) => (
                <article
                  key={point.title}
                  className={`rounded-[1.75rem] border p-6 ${index % 2 === 0 ? "border-white/20 bg-white/10" : "border-[#c696b3]/30 bg-[#8b125c]/20"}`}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-white/60">{point.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        id="formula-story"
        eyebrow="Key Formula"
        title="한 포에 담은 핵심 배합을 조금 더 구체적으로"
        description="패키지 표기 기준 주요 원료를 중심으로, 제품을 이해할 때 필요한 원료 포인트와 무드까지 함께 정리했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="image-shell relative aspect-[4/5]">
            <Image
              src={editorialGallery[5].imagePath}
              alt={editorialGallery[5].title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(23,18,23,0.68)] via-transparent to-transparent" />
            <div className="absolute bottom-0 p-7 text-white">
              <p className="text-xs uppercase tracking-[0.28em] text-white/70">Formula Mood</p>
              <p className="mt-3 text-3xl font-semibold">{editorialGallery[5].title}</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/75">{editorialGallery[5].body}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {formulaStoryCards.map((item, index) => (
              <article key={item.title} className={index === 1 ? "story-slab" : "outline-card"}>
                <p className="text-sm uppercase tracking-[0.22em] text-[#8b125c]">{item.subtitle}</p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}

            <div className="grid gap-4 sm:grid-cols-3">
              {productData.ingredients.map((ingredient) => (
                <div key={ingredient.title} className="feature-card">
                  <p className="eyebrow">{ingredient.amount}</p>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{ingredient.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{ingredient.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="product-story"
        eyebrow="Daily Routine"
        title="실제 일상 속에 놓였을 때의 장면을 더 구체적으로"
        description="집, 사무실, 여행, 선물용까지 제품이 놓이는 순간을 세분화해 루틴 이미지를 풍부하게 만들었습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {routineChecklist.map((item) => (
              <article key={item.title} className="story-slab">
                <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-4">
            <div className="image-shell relative aspect-[5/4]">
              <Image
                src={editorialGallery[3].imagePath}
                alt={editorialGallery[3].title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {routineScenes.map((scene, index) => (
                <article
                  key={scene.step}
                  className={`${index === 1 ? "feature-card" : "outline-card"} min-h-[220px]`}
                >
                  <p className="font-serif text-4xl italic text-[#8b125c]">{scene.step}</p>
                  <h3 className="mt-4 text-xl font-semibold text-ink">{scene.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{scene.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Visual Gallery"
        title="브랜드의 결을 풍성하게 채우는 무드 이미지"
        description="한 장의 제품 컷만으로는 부족한 밀도를 보완하기 위해, 클린 뷰티 무드와 더마 에디토리얼 감도를 다양한 앵글로 구성했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            {editorialGallery.slice(1, 3).map((item) => (
              <article key={item.title} className="feature-card overflow-hidden p-0">
                <div className="relative aspect-[5/4]">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
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

          <div className="grid gap-5 sm:grid-cols-2">
            {editorialGallery.slice(3).map((item, index) => (
              <article key={item.title} className={index === 0 ? "story-slab overflow-hidden p-0" : "outline-card overflow-hidden p-0"}>
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
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
        </div>
      </SectionShell>

      <SectionShell
        id="review-story"
        eyebrow="Review Snapshot"
        title="고객이 먼저 반응하는 포인트를 더 풍부하게"
        description="휴대성, 패키지 무드, 선물용 인상, 데스크 위에 두기 좋은 깔끔함처럼 실제 선택 이유가 되는 반응을 모았습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="ink-panel p-8 sm:p-10">
            <p className="eyebrow text-white/60">For You</p>
            <h3 className="mt-3 text-4xl font-semibold text-white">이런 분께 권합니다</h3>
            <div className="mt-8 grid gap-3">
              {idealForItems.map((item, index) => (
                <div key={item} className="stat-chip">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/50">Point 0{index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {sampleReviews.map((review, index) => (
              <article key={review.name} className={`rounded-[1.75rem] border border-white/80 p-6 shadow-[0_16px_40px_rgba(74,52,64,0.08)] ${getReviewTone(index)}`}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">{review.name}</p>
                    <p className="text-sm text-muted">{review.tag}</p>
                  </div>
                  <p className="text-sm font-semibold text-[#8b125c]">★★★★★</p>
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-8 text-ink">{review.title}</h3>
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
          {qualityPromises.map((item, index) => (
            <article key={item.title} className={index === 1 ? "story-slab" : "outline-card"}>
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
        description="처음 방문하시는 분들이 가장 먼저 확인하는 내용은 카드형 FAQ와 문의 정보로 빠르게 이어지도록 정리했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.94fr]">
          <div className="grid gap-4">
            {faqItems.slice(0, 4).map((item, index) => (
              <article key={item.question} className={index % 2 === 0 ? "feature-card" : "outline-card"}>
                <h3 className="text-2xl font-semibold text-ink">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="glass-panel p-8">
            <p className="eyebrow">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold text-ink">제품과 주문 관련 문의를 한곳에서</h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              고객센터, 이메일, 판매자 정보를 확인하고 필요한 페이지로 바로 이동하실 수 있습니다.
            </p>
            <div className="mt-8 grid gap-4">
              {contactChannels.map((channel) => (
                <div key={channel.title} className="rounded-[1.5rem] bg-white/75 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted">{channel.title}</p>
                  <p className="mt-3 break-all text-lg font-semibold text-ink">{channel.value}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{channel.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/faq" className="pill inline-flex">
                FAQ 전체 보기
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#d8c5d0] bg-white/70 px-6 py-4 text-sm font-semibold text-ink transition hover:bg-white"
              >
                문의 페이지
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
