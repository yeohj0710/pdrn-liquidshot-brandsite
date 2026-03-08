import type { Metadata } from "next";

import { EditorialPhoto } from "@/components/editorial-photo";
import { ProductVisual } from "@/components/product-visual";
import { SectionShell } from "@/components/section-shell";
import { formulaNotes, formulaStoryCards, productData, qualityPromises, supportingPhotos } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "원료",
  description: "PDRN 리퀴드샷의 핵심 원료와 제품 안내 정보를 확인해 보세요.",
  path: "/formula",
});

export default function FormulaPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-8 xl:grid-cols-[0.96fr_1.04fr] xl:items-center">
          <div className="space-y-7">
            <div>
              <p className="eyebrow">Ingredient edit</p>
              <h1 className="hero-display mt-5 max-w-[11ch] break-keep">패키지 기준 핵심 원료를 더 또렷하게 정리했습니다</h1>
              <p className="section-note mt-7 max-w-2xl">
                원료 자체의 이름만 나열하기보다, 이 제품이 어떤 방향의 이너뷰티 제품인지 자연스럽게 이해되도록
                순서를 잡았습니다.
              </p>
            </div>

            <article className="story-slab">
              <p className="eyebrow">패키지 표기 기준</p>
              <h2 className="card-title mt-4">1포당 PDRN 파이토컴플렉스 3,000mg</h2>
              <p className="card-copy mt-4">
                여기에 저분자 피쉬콜라겐 1,000mg, 병풀추출분말 200mg이 함께 안내되어 제품 성격을 더 쉽게 읽을
                수 있도록 정리돼 있습니다.
              </p>
            </article>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
            <ProductVisual variant="dark" priority className="min-h-[420px] sm:min-h-[560px]" />
            <div className="grid gap-4">
              {formulaStoryCards.map((item, index) => (
                <article key={item.title} className={index === 1 ? "ink-panel p-7" : index === 2 ? "feature-card" : "outline-card"}>
                  <p className={`text-[11px] uppercase tracking-[0.34em] ${index === 1 ? "text-white/54" : "text-[#8c1656]"}`}>
                    {item.subtitle}
                  </p>
                  <h2 className={`card-title mt-4 ${index === 1 ? "text-white" : ""}`}>{item.title}</h2>
                  <p className={`mt-4 break-keep text-sm leading-8 ${index === 1 ? "text-white/74" : "text-muted"}`}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Ingredient layout"
        title="한 포에 담긴 주요 원료"
        description="패키지에 표기된 핵심 원료와 배합량을 한눈에 읽히도록 카드와 비주얼을 함께 구성했습니다."
      >
        <div className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <EditorialPhoto
            src={supportingPhotos[0].imagePath}
            alt={supportingPhotos[0].title}
            eyebrow="Clinical mood"
            title={supportingPhotos[0].title}
            body={supportingPhotos[0].body}
            className="min-h-[520px]"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {productData.ingredients.map((ingredient, index) => (
              <article key={ingredient.title} className={index === 1 ? "ink-panel p-7" : index === 0 ? "story-slab" : "feature-card"}>
                <p className={`eyebrow ${index === 1 ? "text-white/54" : ""}`}>{ingredient.amount}</p>
                <h2 className={`card-title mt-4 ${index === 1 ? "text-white" : ""}`}>{ingredient.title}</h2>
                <p className={`mt-4 break-keep text-sm leading-8 ${index === 1 ? "text-white/74" : "text-muted"}`}>{ingredient.description}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Reading guide"
        title="원료를 볼 때 함께 확인하면 좋은 포인트"
        description="배합만 보는 것이 아니라 포맷, 패키지 인상, 정보가 읽히는 방식까지 함께 봐야 제품 전체의 성격이 더 분명해집니다."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_0.96fr_1.04fr]">
          {qualityPromises.map((item, index) => (
            <article key={item.title} className={index === 2 ? "ink-panel p-8" : index === 1 ? "feature-card" : "story-slab"}>
              <h2 className={`card-title ${index === 2 ? "text-white" : ""}`}>{item.title}</h2>
              <p className={`mt-4 break-keep text-sm leading-8 ${index === 2 ? "text-white/74" : "text-muted"}`}>{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Purchase notes"
        title="구매 전 확인하실 수 있도록 기본 안내를 함께 드립니다"
        description="식품은 개인의 기호와 체질에 따라 느껴지는 방식이 다를 수 있으므로, 기본 정보를 먼저 확인하실 수 있게 정리했습니다."
      >
        <div className="grid gap-4">
          {formulaNotes.map((note, index) => (
            <div key={note} className={index === 1 ? "feature-card flex items-start gap-4" : "outline-card flex items-start gap-4"}>
              <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#8c1656] text-sm font-semibold text-white">
                !
              </span>
              <p className="break-keep text-sm leading-8 text-muted">{note}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
