import Image from "next/image";
import Link from "next/link";

import { SectionShell } from "@/components/section-shell";
import {
  editorialCards,
  formatKrw,
  productData,
  ritualSteps,
  trustSignals,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="eyebrow">{productData.heroEyebrow}</p>
          <h1 className="section-title mt-4 max-w-4xl">{productData.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{productData.heroDescription}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/product" className="pill inline-flex">
              제품 보기
            </Link>
            <Link
              href="/order"
              className="inline-flex items-center justify-center rounded-full border border-[#d8c5d0] bg-white/65 px-6 py-4 text-sm font-semibold text-ink transition hover:bg-white"
            >
              주문하기
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="feature-card">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">Price</p>
              <p className="mt-3 text-2xl font-semibold text-ink">{formatKrw(productData.price)}</p>
            </div>
            <div className="feature-card">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">Format</p>
              <p className="mt-3 text-2xl font-semibold text-ink">{productData.pack}</p>
            </div>
            <div className="feature-card">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">Style</p>
              <p className="mt-3 text-2xl font-semibold text-ink">Daily Stick</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 top-16 h-48 w-48 rounded-full bg-[#ffd8eb] blur-3xl" />
          <div className="absolute bottom-4 right-6 h-56 w-56 rounded-full bg-[#eadcca] blur-3xl" />
          <div className="glass-panel relative overflow-hidden p-8 shadow-velvet">
            <div className="absolute inset-x-10 top-8 h-px bg-white/70" />
            <div className="absolute right-8 top-8 flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#dcbccf]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#eadcca]" />
            </div>
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#f8e3ed] via-[#fffaf6] to-[#f2ebe5] p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_24%,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_70%_68%,rgba(255,216,235,0.72),transparent_35%)]" />
              <Image
                src={productData.imagePath}
                alt={productData.name}
                width={760}
                height={760}
                priority
                className="relative z-10 mx-auto w-full max-w-[480px] animate-float"
              />
            </div>
            <div className="mt-6 rounded-[1.75rem] bg-white/70 p-5">
              <p className="eyebrow">Daily Mood</p>
              <p className="mt-3 text-base leading-7 text-muted">{productData.purchaseNote}</p>
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Why You'll Love It"
        title="매일 손쉽게 챙기기 좋은 데일리 이너뷰티 루틴"
        description="부드러운 패키지 무드와 깔끔한 스틱 포맷으로 일상 속에서 부담 없이 즐기기 좋게 구성했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {trustSignals.map((signal) => (
            <article key={signal.title} className="feature-card">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8b125c]">{signal.label}</p>
              <h3 className="mt-4 text-2xl font-semibold text-ink">{signal.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{signal.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Mood"
        title="은은한 광택감과 깨끗한 인상이 어우러진 패키지"
        description="한눈에 들어오는 핑크 톤과 단정한 레이아웃으로, 꺼내는 순간의 무드까지 고려했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {editorialCards.map((card) => (
            <article key={card.title} className="feature-card">
              <h3 className="font-serif text-3xl italic text-ink">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{card.copy}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Key Ingredients"
        title="한 포에 담은 3가지 핵심 원료"
        description="제품 패키지 표기 기준 주요 원료를 보기 쉽고 깔끔하게 정리했습니다."
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
        eyebrow="Daily Routine"
        title="일상 속에 자연스럽게 스며드는 가벼운 루틴"
        description="집에서, 사무실에서, 이동 중에도 부담 없이 챙기기 좋은 데일리 포맷입니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {ritualSteps.map((item) => (
            <article key={item.step} className="feature-card">
              <p className="font-serif text-4xl italic text-[#8b125c]">{item.step}</p>
              <h3 className="mt-4 text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="glass-panel overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Shop Details</p>
              <h2 className="section-title mt-3">깔끔한 구성, 선명한 가격, 한 번에 보기 좋은 제품 정보</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                PDRN 리퀴드샷은 한눈에 이해되는 단일 제품 구성으로 준비했습니다. 제품 정보와 주문
                페이지를 통해 필요한 내용을 간편하게 확인해 보세요.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/product" className="pill inline-flex">
                  제품 상세
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#d8c5d0] bg-white/65 px-6 py-4 text-sm font-semibold text-ink transition hover:bg-white"
                >
                  문의하기
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-[#fffdfb] via-[#f6edf2] to-[#eadcca] p-8">
              <div className="grid gap-4">
                <div className="rounded-[1.5rem] bg-white/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted">Package</p>
                  <p className="mt-3 text-xl font-semibold text-ink">{productData.pack}</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted">Price</p>
                  <p className="mt-3 text-xl font-semibold text-ink">{formatKrw(productData.price)}</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted">Category</p>
                  <p className="mt-3 text-xl font-semibold text-ink">{productData.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
