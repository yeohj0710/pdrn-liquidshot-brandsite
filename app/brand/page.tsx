import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionShell } from "@/components/section-shell";
import { brandPrinciples, companyInfo, editorialGallery, storyHighlights } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "브랜드",
  description: "K-PharmRx의 브랜드 방향과 더마 이너뷰티 무드를 소개합니다.",
  path: "/brand",
});

export default function BrandPage() {
  return (
    <>
      <SectionShell
        eyebrow="Brand"
        title="K-PharmRx가 지향하는 단정한 더마 이너뷰티"
        description="한국 약국 기반의 신뢰감, 부드러운 프리미엄 컬러, 일상에 자연스럽게 스며드는 루틴을 브랜드의 중심에 두고 있습니다."
      >
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="story-slab">
            <p className="eyebrow">Our Mood</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">{companyInfo.brandDescription}</h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              K-PharmRx는 화려한 장식보다 단정한 인상, 부드러운 컬러, 데일리 루틴에 어울리는 패키지
              무드를 우선합니다. 제품을 처음 만나는 순간부터 차분하고 깨끗한 인상을 전하는 것이
              브랜드의 핵심입니다.
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
          </div>

          <div className="grid gap-4">
            {storyHighlights.map((item, index) => (
              <article key={item.title} className={index === 1 ? "feature-card" : "outline-card"}>
                <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Editorial Mood"
        title="부드러운 톤과 클린 무드로 채운 브랜드 비주얼"
        description="유리 질감, 라이트 베이지, 소프트 핑크, 깔끔한 피부 표현을 중심으로 브랜드가 지향하는 이미지를 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="story-slab overflow-hidden p-0">
            <div className="relative aspect-[16/10]">
              <Image
                src={editorialGallery[0].imagePath}
                alt={editorialGallery[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-semibold text-ink">{editorialGallery[0].title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{editorialGallery[0].body}</p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {editorialGallery.slice(1, 5).map((item, index) => (
              <article key={item.title} className={index % 2 === 0 ? "feature-card overflow-hidden p-0" : "outline-card overflow-hidden p-0"}>
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 22vw"
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
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Principles"
        title="브랜드를 구성하는 세 가지 기준"
        description="제품 하나를 보여주더라도 어떤 무드와 기준 위에 있는지 분명하게 전달하는 것이 중요하다고 보고 있습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {brandPrinciples.map((principle, index) => (
            <article key={principle.title} className={index === 1 ? "ink-panel p-8" : "story-slab"}>
              <p className="font-serif text-4xl italic text-[#8b125c]">{principle.accent}</p>
              <h2 className={`mt-4 text-2xl font-semibold ${index === 1 ? "text-white" : "text-ink"}`}>{principle.title}</h2>
              <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/75" : "text-muted"}`}>{principle.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Tone & Mood"
        title="부드럽지만 가볍지 않은 브랜드 톤"
        description="오프화이트, 샴페인 베이지, 소프트 핑크, 버건디 포인트를 중심으로 차분한 더마 무드를 정리했습니다."
      >
        <div className="glass-panel p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1.5rem] bg-[#f6f1ec] p-5">
              <p className="text-sm text-muted">Canvas</p>
              <p className="mt-2 text-xl font-semibold text-ink">Off White</p>
            </div>
            <div className="rounded-[1.5rem] bg-[#eadcca] p-5">
              <p className="text-sm text-muted">Base</p>
              <p className="mt-2 text-xl font-semibold text-ink">Champagne Beige</p>
            </div>
            <div className="rounded-[1.5rem] bg-[#f6d7e5] p-5">
              <p className="text-sm text-muted">Accent</p>
              <p className="mt-2 text-xl font-semibold text-ink">Soft Pink</p>
            </div>
            <div className="rounded-[1.5rem] bg-[#8b125c] p-5 text-white">
              <p className="text-sm text-white/80">Signature</p>
              <p className="mt-2 text-xl font-semibold">Burgundy Point</p>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
