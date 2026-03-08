import type { Metadata } from "next";

import { SectionShell } from "@/components/section-shell";
import { faqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "제품과 주문 관련 자주 묻는 질문을 모았습니다.",
};

export default function FaqPage() {
  return (
    <SectionShell
      eyebrow="FAQ"
      title="자주 묻는 질문"
      description="제품 구성, 원료, 문의 방법 등 자주 확인하시는 내용을 모았습니다."
    >
      <div className="grid gap-5">
        {faqItems.map((item) => (
          <article key={item.question} className="feature-card">
            <h2 className="text-2xl font-semibold text-ink">{item.question}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
