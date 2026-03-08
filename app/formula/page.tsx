import type { Metadata } from "next";
import Image from "next/image";

import { SectionShell } from "@/components/section-shell";
import { editorialGallery, formulaNotes, formulaStoryCards, productData, qualityPromises } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "원료",
  description: "PDRN 리퀴드샷의 주요 원료와 제품 안내 정보를 확인해 보세요.",
  path: "/formula",
});

export default function FormulaPage() {
  return (
    <>
      <SectionShell
        eyebrow="Formula"
        title="패키지 기준 주요 원료를 조금 더 입체적으로 정리했습니다"
        description="핵심 원료 자체뿐 아니라, 어떤 이미지와 무드로 제품을 이해하게 되는지도 함께 보여주는 구성을 담았습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="image-shell relative aspect-[4/5]">
            <Image
              src={editorialGallery[5].imagePath}
              alt={editorialGallery[5].title}
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,22,27,0.74)] to-transparent" />
            <div className="absolute bottom-0 p-7 text-white">
              <p className="text-xs uppercase tracking-[0.28em] text-white/65">Formula Editorial</p>
              <p className="mt-3 text-3xl font-semibold">{editorialGallery[5].title}</p>
              <p className="mt-3 text-sm leading-7 text-white/75">{editorialGallery[5].body}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {formulaStoryCards.map((item, index) => (
              <article key={item.title} className={index === 1 ? "ink-panel p-8" : "story-slab"}>
                <p className={`text-sm uppercase tracking-[0.22em] ${index === 1 ? "text-white/55" : "text-[#8b125c]"}`}>
                  {item.subtitle}
                </p>
                <h2 className={`mt-3 text-2xl font-semibold ${index === 1 ? "text-white" : "text-ink"}`}>{item.title}</h2>
                <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/75" : "text-muted"}`}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Ingredients"
        title="한 포에 담긴 주요 원료"
        description="패키지에 표기된 핵심 원료와 배합량을 중심으로 보기 쉽게 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {productData.ingredients.map((ingredient, index) => (
            <article key={ingredient.title} className={index === 0 ? "story-slab" : index === 1 ? "feature-card" : "outline-card"}>
              <p className="eyebrow">{ingredient.amount}</p>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{ingredient.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{ingredient.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Why It Matters"
        title="고객이 함께 확인하는 세 가지 포인트"
        description="원료를 살펴볼 때 함께 보게 되는 포맷, 패키지 인상, 정보의 선명함까지 한 번에 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {qualityPromises.map((item, index) => (
            <article key={item.title} className={index === 2 ? "ink-panel p-8" : "story-slab"}>
              <h2 className={`text-2xl font-semibold ${index === 2 ? "text-white" : "text-ink"}`}>{item.title}</h2>
              <p className={`mt-4 text-sm leading-7 ${index === 2 ? "text-white/75" : "text-muted"}`}>{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Guide"
        title="구매 전 꼭 확인해 주세요"
        description="식품은 개인의 기호와 체질에 따라 느껴지는 방식이 다를 수 있으므로, 기본 정보를 먼저 확인하시는 것을 권합니다."
      >
        <div className="grid gap-4">
          {formulaNotes.map((note, index) => (
            <div key={note} className={index === 1 ? "story-slab flex items-start gap-4" : "outline-card flex items-start gap-4"}>
              <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#8b125c] text-sm font-semibold text-white">
                !
              </span>
              <p className="text-sm leading-7 text-muted">{note}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
