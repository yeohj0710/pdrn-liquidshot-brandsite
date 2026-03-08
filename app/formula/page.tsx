import type { Metadata } from "next";

import { SectionShell } from "@/components/section-shell";
import { formulaNotes, productData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "원료",
  description: "PDRN 리퀴드샷의 주요 원료를 확인해 보세요.",
};

export default function FormulaPage() {
  return (
    <>
      <SectionShell
        eyebrow="Key Ingredients"
        title="한 포에 담은 주요 원료"
        description="제품 패키지에 표기된 주요 원료 정보를 보기 좋게 정리했습니다."
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
        eyebrow="Guide"
        title="구매 전 꼭 확인해 주세요"
        description="식품은 개인의 기호와 체질에 따라 느껴지는 방식이 다를 수 있으므로 기본 정보를 먼저 확인하는 것이 좋습니다."
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
