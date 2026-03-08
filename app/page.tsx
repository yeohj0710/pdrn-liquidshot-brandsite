import type { Metadata } from "next";
import Link from "next/link";

import { EditorialPhoto } from "@/components/editorial-photo";
import { ProductVisual } from "@/components/product-visual";
import { Reveal } from "@/components/reveal";
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
  idealForItems,
  packageDetails,
  productData,
  qualityPromises,
  routineChecklist,
  routineScenes,
  sampleReviews,
  signaturePoints,
  storyHighlights,
  supportingPhotos,
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
    "bg-white/85",
    "bg-[#fff6fb]",
    "bg-[#f8f1eb]",
    "bg-[#f7f2ff]",
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

      <section className="mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:px-10 xl:grid-cols-[0.92fr_1.08fr] xl:py-18">
        <Reveal className="flex flex-col justify-center">
          <p className="eyebrow">{productData.heroEyebrow}</p>
          <h1 className="section-title mt-4 max-w-3xl text-[clamp(2.15rem,3.5vw,4rem)]">{productData.heroTitle}</h1>
          <p className="mt-6 max-w-2xl break-keep text-[1.04rem] leading-8 text-muted">
            {productData.heroDescription}
          </p>

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
            {heroStats.map((item, index) => (
              <article key={item.label} className={index === 1 ? "feature-card !p-5" : "story-slab !p-5"}>
                <p className="text-sm tracking-[0.2em] text-muted">{item.label}</p>
                <p className="mt-3 break-keep text-[clamp(1.28rem,1.9vw,1.75rem)] font-semibold text-ink">
                  {item.value}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {editorialCards.map((card, index) => (
              <article key={card.title} className={index === 1 ? "outline-card !p-5" : "feature-card !p-5"}>
                <p className="text-xs tracking-[0.24em] text-[#8b125c]">{card.title}</p>
                <p className="card-copy mt-4">{card.copy}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative flex items-center justify-center" delayMs={80}>
          <div className="absolute left-4 top-12 h-48 w-48 rounded-full bg-[#ffd8eb] blur-3xl" />
          <div className="absolute bottom-10 right-4 h-56 w-56 rounded-full bg-[#eadcca] blur-3xl" />
          <div className="glass-panel relative w-full overflow-hidden p-5 sm:p-7">
            <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
              <div className="grid gap-4">
                <ProductVisual variant="hero" className="min-h-[360px] sm:min-h-[460px] lg:min-h-[540px]" />
                <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
                  <article className="story-slab !p-6">
                    <p className="eyebrow">제품 한눈에 보기</p>
                    <h2 className="card-title mt-3">박스와 스틱이 함께 보여 제품 성격이 빠르게 읽힙니다</h2>
                    <p className="card-copy mt-4">{productData.purchaseNote}</p>
                  </article>
                  <EditorialPhoto
                    src={supportingPhotos[1].imagePath}
                    alt={supportingPhotos[1].title}
                    eyebrow="Daily scene"
                    title={supportingPhotos[1].title}
                    body={supportingPhotos[1].body}
                    className="min-h-[220px]"
                  />
                </div>
              </div>

              <div className="grid gap-4 content-start">
                <article className="ink-panel p-6">
                  <p className="eyebrow text-white/60">시그니처 포인트</p>
                  <h2 className="card-title mt-3 text-white">핵심 배합과 액상 스틱 포맷을 첫 화면에서 바로 보여주는 구성</h2>
                  <p className="mt-4 text-sm leading-7 text-white/78">
                    큰 제품 컷과 기본 정보 카드를 한 화면 안에 묶어 처음 들어와도 무엇을 파는 사이트인지
                    곧바로 이해되도록 정리했습니다.
                  </p>
                </article>

                <div className="grid gap-4 sm:grid-cols-2">
                  {packageDetails.map((item, index) => (
                    <article key={item.title} className={index === 0 || index === 3 ? "feature-card !p-5" : "outline-card !p-5"}>
                      <p className="text-xs tracking-[0.24em] text-muted">{item.title}</p>
                      <p className="mt-3 break-keep text-[clamp(1.15rem,1.6vw,1.45rem)] font-semibold leading-7 text-ink">
                        {item.value}
                      </p>
                    </article>
                  ))}
                </div>

                <EditorialPhoto
                  src={supportingPhotos[0].imagePath}
                  alt={supportingPhotos[0].title}
                  eyebrow="Pharmacy mood"
                  title={supportingPhotos[0].title}
                  body={supportingPhotos[0].body}
                  className="min-h-[260px]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <SectionShell
        id="brand-story"
        eyebrow="브랜드 스토리"
        title="한국 약국 감도의 단정한 브랜드 서사"
        description="첫인상, 휴대성, 제품 정보의 선명함을 먼저 보여주고 그 위에 부드러운 패키지 무드를 더하는 방식으로 브랜드를 설명합니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="story-slab space-y-5">
            {brandStoryParagraphs.map((paragraph) => (
              <p key={paragraph} className="break-keep text-base leading-8 text-muted">
                {paragraph}
              </p>
            ))}
            <div className="section-grid-line pt-5 text-sm leading-7 text-ink">
              판매가 {formatKrw(productData.price)} / 구성 {productData.pack} / 카테고리 {productData.category}
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-[1.06fr_0.94fr]">
            <ProductVisual variant="soft" className="min-h-[360px] sm:min-h-[520px]" />
            <div className="grid gap-4">
              <article className="feature-card">
                <p className="eyebrow">브랜드 기준 01</p>
                <h3 className="card-title mt-3">{storyHighlights[0].title}</h3>
                <p className="card-copy mt-4">{storyHighlights[0].body}</p>
              </article>
              <article className="outline-card">
                <p className="eyebrow">브랜드 기준 02</p>
                <h3 className="card-title mt-3">{storyHighlights[1].title}</h3>
                <p className="card-copy mt-4">{storyHighlights[1].body}</p>
              </article>
              <EditorialPhoto
                src={supportingPhotos[2].imagePath}
                alt={supportingPhotos[2].title}
                eyebrow="Routine mood"
                title={supportingPhotos[2].title}
                body={supportingPhotos[2].body}
                className="min-h-[220px]"
              />
            </div>
          </div>
        </div>
      </SectionShell>

      <section className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <Reveal className="ink-panel overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div className="grid gap-5">
              <div>
                <p className="eyebrow text-white/60">핵심 포인트</p>
                <h2 className="mt-3 max-w-xl break-keep text-[clamp(2rem,3vw,3.4rem)] font-semibold leading-tight text-white">
                  보는 순간 이해되고, 매일 꺼내기 쉬운 이너뷰티 루틴
                </h2>
                <p className="mt-5 max-w-xl break-keep text-sm leading-7 text-white/78">
                  제품을 고를 때 가장 먼저 남는 인상은 복잡한 설명보다 패키지 전면, 포맷, 휴대성,
                  그리고 정보가 읽히는 방식입니다. PDRN 리퀴드샷은 그 네 가지 포인트를 한 제품 안에
                  차분하게 정리했습니다.
                </p>
              </div>

              <ProductVisual variant="dark" className="min-h-[320px]" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {signaturePoints.map((point, index) => (
                <article
                  key={point.title}
                  className={
                    index === 1
                      ? "rounded-[1.8rem] border border-[#c696b3]/35 bg-[#8b125c]/22 p-6"
                      : "rounded-[1.8rem] border border-white/20 bg-white/10 p-6"
                  }
                >
                  <p className="text-xs tracking-[0.24em] text-white/55">{point.label}</p>
                  <h3 className="mt-3 break-keep text-[clamp(1.45rem,2.1vw,2.1rem)] font-semibold leading-tight text-white">
                    {point.title}
                  </h3>
                  <p className="mt-4 break-keep text-sm leading-7 text-white/75">{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <SectionShell
        id="formula-story"
        eyebrow="핵심 원료"
        title="한 포에 담긴 핵심 배합을 조금 더 구체적으로"
        description="패키지 표기 기준 주요 원료를 중심으로 제품을 이해할 때 필요한 포인트를 자연스럽게 읽히는 순서로 정리했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            <ProductVisual variant="spotlight" className="min-h-[380px] sm:min-h-[520px]" />
            <article className="outline-card">
              <p className="eyebrow">한 포 기준</p>
              <h3 className="card-title mt-3">PDRN 3,000mg · 피쉬콜라겐 1,000mg · 병풀추출분말 200mg</h3>
              <p className="card-copy mt-4">
                패키지 표기 기준 핵심 배합을 전면에 드러내 제품 성격을 쉽게 이해할 수 있도록 정리했습니다.
              </p>
            </article>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
              {formulaStoryCards.map((item, index) => (
                <article
                  key={item.title}
                  className={index === 1 ? "ink-panel p-7" : index === 2 ? "feature-card" : "story-slab"}
                >
                  <p className={`text-sm tracking-[0.18em] ${index === 1 ? "text-white/55" : "text-[#8b125c]"}`}>
                    {item.subtitle}
                  </p>
                  <h3 className={`mt-3 card-title ${index === 1 ? "text-white" : ""}`}>{item.title}</h3>
                  <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/75" : "text-muted"}`}>{item.body}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {productData.ingredients.map((ingredient, index) => (
                <article key={ingredient.title} className={index === 1 ? "feature-card" : "outline-card"}>
                  <p className="eyebrow">{ingredient.amount}</p>
                  <h3 className="card-title mt-3">{ingredient.title}</h3>
                  <p className="card-copy mt-4">{ingredient.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="product-story"
        eyebrow="일상 루틴"
        title="실제 일상 속에서 어떤 장면으로 이어지는지"
        description="집, 사무실, 외출, 선물용까지 제품이 놓이는 순간을 세분화해 루틴 제품으로서의 이미지를 더 구체적으로 보여드립니다."
      >
        <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {routineChecklist.map((item, index) => (
              <article key={item.title} className={index === 0 || index === 3 ? "story-slab" : "outline-card"}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-copy mt-4">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-[1.04fr_0.96fr]">
              <ProductVisual variant="stack" className="min-h-[300px] sm:min-h-[430px]" />
              <article className="feature-card">
                <p className="eyebrow">데일리 노트</p>
                <h3 className="card-title mt-3">한 포로 정리된 액상 스틱이라 필요한 순간에 바로 꺼내기 좋습니다</h3>
                <p className="card-copy mt-4">
                  박스와 스틱 구성이 함께 보이고 부피가 크지 않아 출근 가방, 파우치, 책상 서랍 안에서도
                  자연스럽게 자리를 잡습니다.
                </p>
              </article>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {routineScenes.map((scene, index) => (
                <article key={scene.step} className={index === 1 ? "feature-card" : "outline-card"}>
                  <p className="font-serif text-4xl italic text-[#8b125c]">{scene.step}</p>
                  <h3 className="card-title mt-4">{scene.title}</h3>
                  <p className="card-copy mt-4">{scene.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="패키지 디테일"
        title="패키지를 다양한 장면으로 살펴보세요"
        description="박스 전면, 메인 패키지, 데일리 무드, 선물용 인상까지 제품의 결을 여러 장면으로 나누어 보여드립니다."
      >
        <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
          <article className="story-slab p-0">
            <ProductVisual variant={editorialGallery[0].variant} className="min-h-[360px] rounded-b-none sm:min-h-[470px]" />
            <div className="p-7">
              <p className="eyebrow">메인 비주얼</p>
              <h3 className="card-title mt-3">{editorialGallery[0].title}</h3>
              <p className="card-copy mt-4">{editorialGallery[0].body}</p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            <EditorialPhoto
              src={supportingPhotos[2].imagePath}
              alt={supportingPhotos[2].title}
              eyebrow="Desk mood"
              title={supportingPhotos[2].title}
              body={supportingPhotos[2].body}
              className="min-h-[280px]"
            />
            <article className="outline-card p-0">
              <ProductVisual variant={editorialGallery[2].variant} className="min-h-[220px] rounded-b-none" />
              <div className="p-6">
                <p className="eyebrow">패키지 컷</p>
                <h3 className="card-title mt-3">{editorialGallery[2].title}</h3>
                <p className="card-copy mt-4">{editorialGallery[2].body}</p>
              </div>
            </article>
            <article className="feature-card p-0">
              <ProductVisual variant={editorialGallery[4].variant} className="min-h-[220px] rounded-b-none" />
              <div className="p-6">
                <p className="eyebrow">선물용 인상</p>
                <h3 className="card-title mt-3">{editorialGallery[4].title}</h3>
                <p className="card-copy mt-4">{editorialGallery[4].body}</p>
              </div>
            </article>
            <article className="outline-card p-6">
              <p className="eyebrow">패키지 메모</p>
              <h3 className="card-title mt-3">실제 판매 페이지처럼 정보와 무드를 한 화면 안에서 함께 보여주는 구성</h3>
              <p className="card-copy mt-4">
                제품 실물 컷만 반복하지 않고 약국 선반, 물 한 잔, 데스크 장면을 함께 배치해 카테고리 감도를
                보완했습니다. 동시에 중심은 항상 제품 패키지가 되도록 비중을 조절했습니다.
              </p>
            </article>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="review-story"
        eyebrow="리뷰 스냅샷"
        title="고객이 실제로 먼저 반응하는 포인트"
        description="휴대성, 패키지 인상, 선물용 무드, 책상 위에 두기 좋은 단정함처럼 실제 선택 이유가 되는 포인트를 중심으로 정리했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="ink-panel p-8 sm:p-10">
            <p className="eyebrow text-white/60">이런 분께</p>
            <h3 className="mt-3 break-keep text-[clamp(2rem,3vw,3.3rem)] font-semibold leading-tight text-white">
              이런 분께 권해 드립니다
            </h3>
            <div className="mt-8 grid gap-3">
              {idealForItems.map((item, index) => (
                <div key={item} className="stat-chip">
                  <p className="text-xs tracking-[0.24em] text-white/50">POINT 0{index + 1}</p>
                  <p className="mt-3 break-keep text-sm leading-7 text-white">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {sampleReviews.map((review, index) => (
              <article
                key={review.name}
                className={`rounded-[1.75rem] border border-white/80 p-6 shadow-[0_16px_40px_rgba(74,52,64,0.08)] ${getReviewTone(index)}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">{review.name}</p>
                    <p className="text-sm text-muted">{review.tag}</p>
                  </div>
                  <p className="text-sm font-semibold text-[#8b125c]">★★★★★</p>
                </div>
                <h3 className="mt-5 break-keep text-[clamp(1.35rem,1.8vw,1.8rem)] font-semibold leading-8 text-ink">
                  {review.title}
                </h3>
                <p className="mt-4 break-keep text-sm leading-7 text-muted">{review.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="선호 이유"
        title="브랜드가 편안하게 기억되는 이유"
        description="가볍게 챙기기 쉬운 포맷, 부드러운 패키지, 주요 정보가 잘 보이는 구성까지 고객이 먼저 체감하는 장점을 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {qualityPromises.map((item, index) => (
            <article key={item.title} className={index === 1 ? "feature-card" : "story-slab"}>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-copy mt-4">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="faq-preview"
        eyebrow="자주 확인하는 안내"
        title="처음 방문하시는 분들이 먼저 보는 정보"
        description="기본 구성, 핵심 배합, 휴대성, 문의처처럼 실제 구매 전에 가장 많이 확인하는 내용을 빠르게 이어서 볼 수 있게 정리했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.94fr]">
          <div className="grid gap-4">
            {faqItems.slice(0, 4).map((item, index) => (
              <article key={item.question} className={index % 2 === 0 ? "feature-card" : "outline-card"}>
                <h3 className="card-title">{item.question}</h3>
                <p className="card-copy mt-4">{item.answer}</p>
              </article>
            ))}
          </div>

          <article className="glass-panel p-8">
            <p className="eyebrow">문의 안내</p>
            <h3 className="mt-3 break-keep text-[clamp(1.8rem,2.7vw,3rem)] font-semibold leading-tight text-ink">
              제품과 주문 관련 문의를 한곳에서 확인하실 수 있습니다
            </h3>
            <p className="mt-4 break-keep text-sm leading-7 text-muted">
              고객센터, 이메일, 판매자 기본 정보를 함께 정리해 처음 방문한 분도 필요한 안내를 바로 확인할
              수 있도록 구성했습니다.
            </p>

            <div className="mt-8 grid gap-4">
              {contactChannels.map((channel, index) => (
                <div key={channel.title} className={index === 0 ? "feature-card" : "outline-card"}>
                  <p className="text-sm tracking-[0.18em] text-muted">{channel.title}</p>
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
          </article>
        </div>
      </SectionShell>
    </>
  );
}
