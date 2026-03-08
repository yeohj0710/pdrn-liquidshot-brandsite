import type { Metadata } from "next";
import Link from "next/link";

import { SectionShell } from "@/components/section-shell";
import { faqItems } from "@/lib/site-data";
import { createPageMetadata, getFaqStructuredData } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ",
  description: "PDRN 리퀴드샷 제품과 주문 관련 자주 묻는 질문을 확인해 보세요.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqStructuredData(faqItems)),
        }}
      />

      <SectionShell
        eyebrow="FAQ"
        title="자주 묻는 질문"
        description="제품 구성, 원료, 휴대성, 문의 방법 등 처음 확인하시는 분들이 자주 묻는 내용을 모았습니다."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {faqItems.map((item) => (
            <article key={item.question} className="feature-card">
              <h2 className="text-2xl font-semibold text-ink">{item.question}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Need Help"
        title="추가 안내가 필요하신가요?"
        description="FAQ에서 찾기 어려운 문의는 주문 페이지 또는 문의 페이지를 통해 이어서 확인하실 수 있습니다."
      >
        <div className="glass-panel p-8">
          <div className="flex flex-wrap gap-4">
            <Link href="/order" className="pill inline-flex">
              주문 페이지
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#d8c5d0] bg-white/70 px-6 py-4 text-sm font-semibold text-ink transition hover:bg-white"
            >
              문의하기
            </Link>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
