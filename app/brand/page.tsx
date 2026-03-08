import type { Metadata } from "next";
import Link from "next/link";

import { ProductVisual } from "@/components/product-visual";
import { SectionShell } from "@/components/section-shell";
import { brandPrinciples, companyInfo, editorialGallery, routineChecklist, storyHighlights } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "브랜드",
  description: "K-PharmRx의 브랜드 방향과 PDRN 리퀴드샷이 지향하는 단정한 이너뷰티 무드를 소개합니다.",
  path: "/brand",
});

export default function BrandPage() {
  return (
    <>
      <SectionShell
        eyebrow="브랜드 소개"
        title="K-PharmRx가 지향하는 단정한 이너뷰티 감도"
        description="과장된 표현보다 제품이 놓이는 장면, 패키지의 첫인상, 정보가 읽히는 방식으로 브랜드의 무드를 설명합니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="story-slab">
            <p className="eyebrow">브랜드 한 줄 소개</p>
            <h1 className="section-title mt-4 max-w-3xl">{companyInfo.brandDescription}</h1>
            <p className="mt-6 break-keep text-base leading-8 text-muted">
              K-PharmRx는 화려한 장식보다 단정한 첫인상, 제품 정보가 빠르게 읽히는 전면 구성,
              가볍게 챙기기 쉬운 루틴 포맷을 우선합니다. PDRN 리퀴드샷은 그 기준을 가장 먼저 보여주는
              브랜드의 출발점입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/product" className="pill inline-flex">
                제품 보기
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#d8c5d0] bg-white/70 px-6 py-4 text-sm font-semibold text-ink transition hover:bg-white"
              >
                문의하기
              </Link>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-[1.04fr_0.96fr]">
            <ProductVisual variant="soft" className="min-h-[340px] sm:min-h-[520px]" />
            <div className="grid gap-4">
              {storyHighlights.map((item, index) => (
                <article key={item.title} className={index === 1 ? "feature-card" : "outline-card"}>
                  <p className="eyebrow">브랜드 포인트</p>
                  <h2 className="card-title mt-3">{item.title}</h2>
                  <p className="card-copy mt-4">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="브랜드 기준"
        title="브랜드를 구성하는 세 가지 기준"
        description="패키지 무드, 정보가 읽히는 방식, 루틴 제품으로서의 사용성을 같은 톤 안에서 보여주는 것이 중요하다고 봅니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {brandPrinciples.map((principle, index) => (
            <article key={principle.title} className={index === 1 ? "ink-panel p-8" : "story-slab"}>
              <p className={`text-sm tracking-[0.22em] ${index === 1 ? "text-white/55" : "text-[#8b125c]"}`}>
                {principle.accent}
              </p>
              <h2 className={`mt-4 card-title ${index === 1 ? "text-white" : ""}`}>{principle.title}</h2>
              <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/75" : "text-muted"}`}>{principle.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="패키지 무드"
        title="브랜드가 떠올리는 패키지 장면"
        description="실제 제품 실물 컷을 서로 다른 무드로 전개해 브랜드가 지향하는 정서와 사용 장면을 보다 선명하게 보여드립니다."
      >
        <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
          <article className="feature-card p-0">
            <ProductVisual variant={editorialGallery[0].variant} className="min-h-[380px] rounded-b-none sm:min-h-[500px]" />
            <div className="p-7">
              <p className="eyebrow">메인 컷</p>
              <h2 className="card-title mt-3">{editorialGallery[0].title}</h2>
              <p className="card-copy mt-4">{editorialGallery[0].body}</p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {editorialGallery.slice(1, 5).map((item, index) => (
              <article key={item.title} className={index === 2 ? "story-slab p-0" : "outline-card p-0"}>
                <ProductVisual variant={item.variant} className="min-h-[220px] rounded-b-none" />
                <div className="p-6">
                  <p className="eyebrow">패키지 컷</p>
                  <h2 className="card-title mt-3">{item.title}</h2>
                  <p className="card-copy mt-4">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="브랜드 장면"
        title="브랜드가 잘 어울리는 네 가지 순간"
        description="제품을 실제로 꺼내는 장면이 자연스러워야 브랜드도 설득력을 갖는다고 보고, 대표적인 사용 장면을 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {routineChecklist.map((item, index) => (
            <article key={item.title} className={index === 1 ? "feature-card" : "outline-card"}>
              <h2 className="card-title">{item.title}</h2>
              <p className="card-copy mt-4">{item.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
