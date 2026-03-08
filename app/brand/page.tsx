import type { Metadata } from "next";

import { SectionShell } from "@/components/section-shell";
import { brandPrinciples } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "브랜드",
  description: "K-PharmRx 브랜드 무드와 스토리를 소개합니다.",
};

export default function BrandPage() {
  return (
    <>
      <SectionShell
        eyebrow="Brand Story"
        title="단정한 무드와 부드러운 감각으로 완성한 K-PharmRx"
        description="깔끔한 패키지 인상과 간결한 제품 구성을 바탕으로 매일 꺼내기 좋은 이너뷰티 브랜드를 지향합니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {brandPrinciples.map((principle) => (
            <article key={principle.title} className="feature-card">
              <p className="font-serif text-4xl italic text-[#8b125c]">{principle.accent}</p>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{principle.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{principle.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Mood"
        title="과하지 않게, 오래 보아도 편안한 인상"
        description="밝고 부드러운 컬러감, 차분한 여백, 정돈된 레이아웃을 통해 데일리 브랜드로서의 편안함을 담았습니다."
      >
        <div className="glass-panel p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1.5rem] bg-[#f4efe9] p-5">
              <p className="text-sm text-muted">Canvas</p>
              <p className="mt-2 text-xl font-semibold text-ink">Off White</p>
            </div>
            <div className="rounded-[1.5rem] bg-[#eadcca] p-5">
              <p className="text-sm text-muted">Mood</p>
              <p className="mt-2 text-xl font-semibold text-ink">Champagne</p>
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
