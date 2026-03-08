import type { Metadata } from "next";

import { ProductVisual } from "@/components/product-visual";
import { SectionShell } from "@/components/section-shell";
import { formulaNotes, formulaStoryCards, productData, qualityPromises } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "원료",
  description: "PDRN 리퀴드샷의 핵심 원료와 제품 안내 정보를 확인해 보세요.",
  path: "/formula",
});

export default function FormulaPage() {
  return (
    <>
      <SectionShell
        eyebrow="원료 소개"
        title="패키지 기준 핵심 원료를 보다 또렷하게 정리했습니다"
        description="원료 자체의 이름만 나열하기보다, 이 제품이 어떤 방향의 이너뷰티 제품인지 자연스럽게 이해되도록 순서를 잡았습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            <ProductVisual variant="dark" className="min-h-[380px] sm:min-h-[520px]" />
            <article className="outline-card">
              <p className="eyebrow">패키지 표기 기준</p>
              <h2 className="card-title mt-3">1포당 PDRN 파이토컴플렉스 3,000mg</h2>
              <p className="card-copy mt-4">
                여기에 저분자 피쉬콜라겐 1,000mg, 병풀추출분말 200mg이 함께 안내되어 제품 성격을 쉽게
                읽을 수 있도록 정리돼 있습니다.
              </p>
            </article>
          </div>

          <div className="grid gap-4">
            {formulaStoryCards.map((item, index) => (
              <article key={item.title} className={index === 1 ? "ink-panel p-8" : index === 2 ? "feature-card" : "story-slab"}>
                <p className={`text-sm tracking-[0.18em] ${index === 1 ? "text-white/55" : "text-[#8b125c]"}`}>
                  {item.subtitle}
                </p>
                <h2 className={`mt-3 card-title ${index === 1 ? "text-white" : ""}`}>{item.title}</h2>
                <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/75" : "text-muted"}`}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="원료 구성"
        title="한 포에 담긴 주요 원료"
        description="패키지에 표기된 핵심 원료와 배합량을 보기 쉽게 카드 형태로 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {productData.ingredients.map((ingredient, index) => (
            <article key={ingredient.title} className={index === 0 ? "story-slab" : index === 1 ? "feature-card" : "outline-card"}>
              <p className="eyebrow">{ingredient.amount}</p>
              <h2 className="card-title mt-4">{ingredient.title}</h2>
              <p className="card-copy mt-4">{ingredient.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="함께 보는 기준"
        title="원료를 볼 때 함께 확인하면 좋은 포인트"
        description="배합만 보는 것이 아니라 포맷, 패키지 인상, 정보가 읽히는 방식까지 함께 봐야 제품 전체의 성격이 분명해집니다."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_0.96fr_1.04fr]">
          {qualityPromises.map((item, index) => (
            <article key={item.title} className={index === 2 ? "ink-panel p-8" : "story-slab"}>
              <h2 className={`card-title ${index === 2 ? "text-white" : ""}`}>{item.title}</h2>
              <p className={`mt-4 text-sm leading-7 ${index === 2 ? "text-white/75" : "text-muted"}`}>{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="구매 전 안내"
        title="확인 후 선택하실 수 있도록 기본 안내를 함께 드립니다"
        description="식품은 개인의 기호와 체질에 따라 느껴지는 방식이 다를 수 있으므로, 기본 정보를 먼저 확인하시는 것을 권합니다."
      >
        <div className="grid gap-4">
          {formulaNotes.map((note, index) => (
            <div key={note} className={index === 1 ? "feature-card flex items-start gap-4" : "outline-card flex items-start gap-4"}>
              <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#8b125c] text-sm font-semibold text-white">
                !
              </span>
              <p className="break-keep text-sm leading-7 text-muted">{note}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
