import type { Metadata } from "next";

import { SectionShell } from "@/components/section-shell";
import { formulaNotes, productData, qualityPromises } from "@/lib/site-data";
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
        title="패키지 기준 주요 원료를 단정하게 정리했습니다"
        description="식품 관련 정보는 과장 없이 확인하기 쉬워야 한다는 기준으로, 제품 패키지에 표기된 핵심 원료 중심으로 안내합니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {productData.ingredients.map((ingredient) => (
            <article key={ingredient.title} className="feature-card">
              <p className="eyebrow">{ingredient.amount}</p>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{ingredient.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{ingredient.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Why It Matters"
        title="고객이 먼저 확인하는 세 가지 포인트"
        description="원료를 살펴볼 때 함께 보게 되는 포맷, 패키지 인상, 정보의 선명함까지 한 번에 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {qualityPromises.map((item) => (
            <article key={item.title} className="feature-card">
              <h2 className="text-2xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
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
          {formulaNotes.map((note) => (
            <div key={note} className="feature-card flex items-start gap-4">
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
