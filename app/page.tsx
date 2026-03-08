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
    "bg-[rgba(255,250,246,0.92)]",
    "bg-[rgba(249,239,245,0.84)]",
    "bg-[rgba(245,238,231,0.92)]",
    "bg-[rgba(246,242,248,0.86)]",
    "bg-[rgba(252,247,239,0.92)]",
    "bg-[rgba(255,244,248,0.88)]",
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

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <Reveal className="flex flex-col justify-center">
            <p className="eyebrow">{productData.heroEyebrow}</p>
            <h1 className="hero-display mt-5 max-w-[12ch] break-keep">{productData.heroTitle}</h1>
            <div className="editorial-divider mt-8 max-w-44" />
            <p className="section-note mt-8 max-w-2xl text-[1.04rem] leading-8">{productData.heroDescription}</p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/product" className="pill inline-flex">
                제품 자세히 보기
              </Link>
              <Link
                href="/order"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(170,144,145,0.3)] bg-white/58 px-6 py-4 text-sm font-medium text-ink transition duration-200 hover:bg-white/78"
              >
                주문 페이지
              </Link>
            </div>

            <div className="hero-meta-strip mt-12">
              {heroStats.map((item, index) => (
                <article
                  key={item.label}
                  className={index === 1 ? "ink-panel px-6 py-7" : index === 0 ? "story-slab px-6 py-7" : "outline-card px-6 py-7"}
                >
                  <p className={`text-xs tracking-[0.28em] ${index === 1 ? "text-white/58" : "text-muted"}`}>{item.label}</p>
                  <p
                    className={`mt-4 break-keep font-display text-[clamp(1.6rem,2vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.04em] ${
                      index === 1 ? "text-white" : "text-ink"
                    }`}
                  >
                    {item.value}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {editorialCards.map((card, index) => (
                <article key={card.title} className={index === 1 ? "outline-card !rounded-[1.55rem] !py-5" : "feature-card !rounded-[1.7rem] !py-5"}>
                  <p className="text-[11px] uppercase tracking-[0.34em] text-[#8c1656]">{card.title}</p>
                  <p className="card-copy mt-3">{card.copy}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative" delayMs={80}>
            <div className="absolute -left-4 top-10 rounded-full border border-[rgba(176,139,107,0.28)] bg-white/56 px-5 py-2 text-[11px] uppercase tracking-[0.32em] text-muted shadow-[0_12px_28px_rgba(67,46,57,0.08)]">
              K-Pharmacy edit
            </div>

            <div className="glass-panel p-6 sm:p-8">
              <div className="grid gap-5 lg:grid-cols-[1.06fr_0.94fr]">
                <ProductVisual variant="hero" priority className="min-h-[420px] sm:min-h-[580px]" />

                <div className="grid gap-5 content-start">
                  <article className="ink-panel p-7">
                    <p className="eyebrow text-white/58">Signature frame</p>
                    <h2 className="card-title mt-4 text-white">핵심 배합과 액상 스틱 포맷을 한 화면 안에서 선명하게 읽히는 구조</h2>
                    <p className="mt-4 break-keep text-sm leading-8 text-white/76">
                      제품 컷, 패키지 정보, 카테고리 무드를 여러 박스로 흩뜨리지 않고 하나의 에디토리얼 스테이지로
                      묶어 첫인상이 더 단정하게 읽히도록 구성했습니다.
                    </p>
                  </article>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {packageDetails.map((item, index) => (
                      <article key={item.title} className={index === 0 || index === 3 ? "feature-card !p-5" : "outline-card !p-5"}>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-muted">{item.title}</p>
                        <p className="mt-3 break-keep font-display text-[clamp(1.24rem,1.7vw,1.65rem)] font-semibold leading-[1.18] tracking-[-0.04em] text-ink">
                          {item.value}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[0.62fr_0.38fr]">
                <article className="story-slab !p-7">
                  <p className="eyebrow">첫인상 메모</p>
                  <h2 className="card-title mt-4">박스와 스틱이 함께 보여 제품 성격이 한 번에 읽히는 구성이 중요합니다</h2>
                  <p className="card-copy mt-4">{productData.purchaseNote}</p>
                  <div className="section-grid-line mt-6 pt-6 text-sm leading-7 text-ink">
                    판매가 {formatKrw(productData.price)} / 구성 {productData.pack} / 카테고리 {productData.category}
                  </div>
                </article>

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
          </Reveal>
        </div>
      </section>

      <SectionShell
        id="brand-story"
        eyebrow="브랜드 스토리"
        title="정제된 첫인상과 사용 장면이 함께 만드는 브랜드 무드"
        description="브랜드는 정보만으로 완성되지 않습니다. 패키지가 놓이는 장면, 보이는 속도, 여백의 사용까지 같은 리듬으로 묶였을 때 비로소 고급스럽게 기억됩니다."
      >
        <div className="grid gap-6 xl:grid-cols-[0.9fr_0.52fr_0.58fr]">
          <article className="story-slab space-y-5">
            {brandStoryParagraphs.map((paragraph) => (
              <p key={paragraph} className="section-note">
                {paragraph}
              </p>
            ))}
          </article>

          <EditorialPhoto
            src={supportingPhotos[2].imagePath}
            alt={supportingPhotos[2].title}
            eyebrow="Desk edit"
            title={supportingPhotos[2].title}
            body={supportingPhotos[2].body}
            className="min-h-[540px]"
          />

          <div className="grid gap-4">
            <article className="feature-card">
              <p className="eyebrow">브랜드 기준 01</p>
              <h3 className="card-title mt-4">{storyHighlights[0].title}</h3>
              <p className="card-copy mt-4">{storyHighlights[0].body}</p>
            </article>
            <ProductVisual variant="soft" className="min-h-[220px]" />
            <article className="outline-card">
              <p className="eyebrow">브랜드 기준 02</p>
              <h3 className="card-title mt-4">{storyHighlights[1].title}</h3>
              <p className="card-copy mt-4">{storyHighlights[1].body}</p>
            </article>
            <article className="feature-card">
              <p className="eyebrow">브랜드 기준 03</p>
              <h3 className="card-title mt-4">{storyHighlights[2].title}</h3>
              <p className="card-copy mt-4">{storyHighlights[2].body}</p>
            </article>
          </div>
        </div>
      </SectionShell>

      <section className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <Reveal className="ink-panel px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid gap-9 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
            <div className="grid gap-6">
              <div>
                <p className="eyebrow text-white/56">Signature points</p>
                <h2 className="mt-4 max-w-xl font-display text-[clamp(2.3rem,4vw,4.2rem)] leading-[0.98] tracking-[-0.06em] text-white">
                  보는 순간 가볍지 않고,
                  <br />
                  매일 꺼내기 쉬운 루틴
                </h2>
                <p className="mt-5 max-w-xl break-keep text-sm leading-8 text-white/72">
                  작은 정보 카드의 반복보다, 브랜드가 왜 차분하게 보이고 왜 매일 손이 가는 제품처럼 느껴지는지를
                  몇 개의 선명한 포인트로 정리했습니다.
                </p>
              </div>

              <EditorialPhoto
                src={supportingPhotos[1].imagePath}
                alt={supportingPhotos[1].title}
                eyebrow="Daily moment"
                title={supportingPhotos[1].title}
                body={supportingPhotos[1].body}
                className="min-h-[320px]"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {signaturePoints.map((point, index) => (
                <article
                  key={point.title}
                  className={
                    index === 1
                      ? "rounded-[2rem] border border-[rgba(255,255,255,0.16)] bg-[rgba(163,23,98,0.18)] p-7"
                      : index === 3
                        ? "rounded-[2rem] border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.06)] p-7"
                        : "rounded-[2rem] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.04)] p-7"
                  }
                >
                  <p className="text-[11px] uppercase tracking-[0.34em] text-white/52">{point.label}</p>
                  <h3 className="mt-4 font-display text-[clamp(1.45rem,2vw,2.2rem)] leading-[1.14] tracking-[-0.04em] text-white">
                    {point.title}
                  </h3>
                  <p className="mt-4 break-keep text-sm leading-8 text-white/74">{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <SectionShell
        id="formula-story"
        eyebrow="핵심 원료"
        title="한 포에 담긴 배합을 더 구조적으로 읽히게 정리했습니다"
        description="무엇이 들어 있는지 나열하는 수준을 넘어, 어떤 감도의 제품인지까지 자연스럽게 읽히도록 원료 서사를 배치했습니다."
      >
        <div className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <article className="glass-panel p-5 sm:p-7">
            <ProductVisual variant="spotlight" className="min-h-[380px] sm:min-h-[520px]" />
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {productData.ingredients.map((ingredient, index) => (
                <article key={ingredient.title} className={index === 1 ? "feature-card !p-5" : "outline-card !p-5"}>
                  <p className="eyebrow">{ingredient.amount}</p>
                  <h3 className="card-title mt-3">{ingredient.title}</h3>
                  <p className="card-copy mt-3">{ingredient.description}</p>
                </article>
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            <article className="story-slab">
              <p className="eyebrow">한 포 기준</p>
              <h3 className="card-title mt-4">PDRN 3,000mg · 피쉬콜라겐 1,000mg · 병풀추출분말 200mg</h3>
              <p className="card-copy mt-4">
                패키지 전면에서 바로 읽히는 핵심 정보는 그대로 유지하되, 상세 페이지에서는 제품 성격이 더 분명하게
                드러나도록 배합의 순서와 역할을 정리했습니다.
              </p>
            </article>

            <div className="grid gap-4 md:grid-cols-2">
              {formulaStoryCards.map((item, index) => (
                <article key={item.title} className={index === 1 ? "ink-panel p-7" : index === 2 ? "feature-card" : "outline-card"}>
                  <p className={`text-[11px] uppercase tracking-[0.34em] ${index === 1 ? "text-white/52" : "text-[#8c1656]"}`}>
                    {item.subtitle}
                  </p>
                  <h3 className={`card-title mt-4 ${index === 1 ? "text-white" : ""}`}>{item.title}</h3>
                  <p className={`mt-4 break-keep text-sm leading-8 ${index === 1 ? "text-white/76" : "text-muted"}`}>{item.body}</p>
                </article>
              ))}
              <EditorialPhoto
                src={supportingPhotos[0].imagePath}
                alt={supportingPhotos[0].title}
                eyebrow="Clinical mood"
                title={supportingPhotos[0].title}
                body={supportingPhotos[0].body}
                className="min-h-[240px] md:col-span-2"
              />
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="product-story"
        eyebrow="루틴 장면"
        title="제품이 놓이는 순간까지 자연스러워야 브랜드가 설득력을 가집니다"
        description="실사용 장면은 단순한 설명보다 훨씬 강하게 제품의 성격을 전달합니다. 아침, 데스크, 외출과 선물 장면을 중심으로 루틴 이미지를 정리했습니다."
      >
        <div className="grid gap-6 xl:grid-cols-[0.98fr_1.02fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {routineScenes.map((scene, index) => (
              <article key={scene.step} className={index === 1 ? "story-slab" : "outline-card"}>
                <p className="font-accent text-[3rem] italic leading-none text-[#8c1656]">{scene.step}</p>
                <h3 className="card-title mt-4">{scene.title}</h3>
                <p className="card-copy mt-4">{scene.text}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-5">
            <EditorialPhoto
              src={supportingPhotos[1].imagePath}
              alt={supportingPhotos[1].title}
              eyebrow="Daily scene"
              title={supportingPhotos[1].title}
              body={supportingPhotos[1].body}
              className="min-h-[360px]"
            />

            <div className="grid gap-4 md:grid-cols-[0.72fr_0.28fr]">
              <article className="feature-card">
                <p className="eyebrow">패키지 포인트</p>
                <h3 className="card-title mt-4">{editorialGallery[0].title}</h3>
                <p className="card-copy mt-4">{editorialGallery[0].body}</p>
              </article>
              <ProductVisual variant="focus" className="min-h-[240px]" />
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="패키지 디테일"
        title="제품과 주변 장면을 함께 보여줘야 전체 인상이 완성됩니다"
        description="실물 패키지 중심의 컷을 유지하되, 약국 무드와 데스크 장면을 보조적으로 섞어 제품이 놓이는 실제 맥락을 더 풍부하게 만들었습니다."
      >
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="feature-card p-0">
            <ProductVisual variant={editorialGallery[1].variant} className="min-h-[380px] rounded-b-none sm:min-h-[520px]" />
            <div className="p-7 sm:p-8">
              <p className="eyebrow">메인 패키지</p>
              <h3 className="card-title mt-4">{editorialGallery[1].title}</h3>
              <p className="card-copy mt-4">{editorialGallery[1].body}</p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            <EditorialPhoto
              src={supportingPhotos[2].imagePath}
              alt={supportingPhotos[2].title}
              eyebrow="Desk tone"
              title={supportingPhotos[2].title}
              body={supportingPhotos[2].body}
              className="min-h-[260px]"
            />
            <article className="outline-card p-0">
              <ProductVisual variant={editorialGallery[2].variant} className="min-h-[240px] rounded-b-none" />
              <div className="p-6">
                <p className="eyebrow">컬러 인상</p>
                <h3 className="card-title mt-4">{editorialGallery[2].title}</h3>
                <p className="card-copy mt-4">{editorialGallery[2].body}</p>
              </div>
            </article>
            <EditorialPhoto
              src={supportingPhotos[0].imagePath}
              alt={supportingPhotos[0].title}
              eyebrow="Pharmacy shelving"
              title={supportingPhotos[0].title}
              body={supportingPhotos[0].body}
              className="min-h-[260px]"
            />
            <article className="story-slab p-0">
              <ProductVisual variant={editorialGallery[5].variant} className="min-h-[240px] rounded-b-none" />
              <div className="p-6">
                <p className="eyebrow">시그니처 컷</p>
                <h3 className="card-title mt-4">{editorialGallery[5].title}</h3>
                <p className="card-copy mt-4">{editorialGallery[5].body}</p>
              </div>
            </article>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="review-story"
        eyebrow="리뷰 스냅샷"
        title="실제 선택 이유가 되는 포인트를 장면 중심으로 정리했습니다"
        description="이 사이트에서는 효능을 과장하지 않고, 휴대성·패키지 인상·선물용 무드처럼 실제 구매에 가까운 반응을 더 전면에 두었습니다."
      >
        <div className="grid gap-6 xl:grid-cols-[0.58fr_1.42fr]">
          <article className="glass-panel p-7 sm:p-8">
            <p className="eyebrow">For you</p>
            <h3 className="mt-4 font-display text-[clamp(2rem,3.4vw,3.3rem)] leading-[0.98] tracking-[-0.06em] text-ink">
              이런 분께
              <br />
              권해 드립니다
            </h3>
            <div className="mt-8 grid gap-3">
              {idealForItems.map((item, index) => (
                <div key={item} className="outline-card !rounded-[1.5rem] !px-5 !py-4">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-[#8c1656]">Point 0{index + 1}</p>
                  <p className="mt-3 break-keep text-sm leading-7 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sampleReviews.map((review, index) => (
              <article
                key={review.name}
                className={`rounded-[1.9rem] border border-white/72 p-6 shadow-[0_18px_44px_rgba(56,37,48,0.08)] ${getReviewTone(index)} ${
                  index === 0 || index === 4 ? "md:translate-y-6" : ""
                } ${index === 2 ? "xl:-translate-y-6" : ""}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">{review.name}</p>
                    <p className="text-sm text-muted">{review.tag}</p>
                  </div>
                  <p className="text-sm font-semibold text-[#8c1656]">★★★★★</p>
                </div>
                <h3 className="mt-5 font-display text-[clamp(1.35rem,1.7vw,1.9rem)] leading-[1.24] tracking-[-0.04em] text-ink">
                  {review.title}
                </h3>
                <p className="mt-4 break-keep text-sm leading-8 text-muted">{review.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="faq-preview"
        eyebrow="안내와 문의"
        title="처음 방문하신 분도 필요한 정보로 바로 이어질 수 있게 정리했습니다"
        description="FAQ, 문의처, 판매자 기본 정보를 한 덩어리의 안내 구조로 정리해 실제 스토어처럼 필요한 정보가 자연스럽게 이어지도록 구성했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="grid gap-4">
            {faqItems.slice(0, 4).map((item, index) => (
              <article key={item.question} className={index === 1 ? "story-slab" : "outline-card"}>
                <h3 className="card-title">{item.question}</h3>
                <p className="card-copy mt-4">{item.answer}</p>
              </article>
            ))}
          </div>

          <article className="ink-panel p-8 sm:p-9">
            <p className="eyebrow text-white/56">Contact</p>
            <h3 className="mt-4 max-w-xl font-display text-[clamp(2rem,3.4vw,3.5rem)] leading-[1.02] tracking-[-0.06em] text-white">
              제품과 주문 관련
              <br />
              문의를 한곳에서
            </h3>
            <p className="mt-5 max-w-xl break-keep text-sm leading-8 text-white/72">
              고객센터, 이메일, 판매자 기본 정보를 함께 정리해 처음 방문하신 분도 필요한 안내를 빠르게 확인할 수
              있도록 구성했습니다.
            </p>

            <div className="mt-8 grid gap-4">
              {contactChannels.map((channel, index) => (
                <div
                  key={channel.title}
                  className={
                    index === 0
                      ? "rounded-[1.7rem] border border-white/16 bg-white/8 px-5 py-5"
                      : "rounded-[1.7rem] border border-white/12 bg-black/10 px-5 py-5"
                  }
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/48">{channel.title}</p>
                  <p className="mt-3 break-all font-display text-[1.55rem] leading-[1.15] tracking-[-0.04em] text-white">
                    {channel.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/68">{channel.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/faq" className="pill inline-flex">
                FAQ 전체 보기
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-6 py-4 text-sm font-medium text-white transition duration-200 hover:bg-white/16"
              >
                문의 페이지
              </Link>
            </div>
          </article>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="브랜드가 사랑받는 이유"
        title="복잡하지 않은 루틴이 더 오래 남습니다"
        description="마지막까지 시각적인 밀도를 유지하되, 제품이 부담 없이 기억되는 이유를 짧고 선명한 세 문장으로 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {qualityPromises.map((item, index) => (
            <article key={item.title} className={index === 1 ? "feature-card" : "story-slab"}>
              <p className="eyebrow">Why it works</p>
              <h3 className="card-title mt-4">{item.title}</h3>
              <p className="card-copy mt-4">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
