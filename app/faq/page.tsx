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

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <article className="ink-panel p-8 sm:p-10">
            <p className="eyebrow text-white/56">FAQ</p>
            <h1 className="hero-display mt-5 max-w-[10ch] break-keep text-white">자주 묻는 질문</h1>
            <p className="mt-6 max-w-xl break-keep text-sm leading-8 text-white/72">
              제품 구성, 원료, 휴대성, 문의 방법 등 처음 확인하시는 분들이 실제로 자주 묻는 내용을 한 흐름 안에
              정리했습니다.
            </p>
          </article>

          <div className="grid gap-4">
            {faqItems.map((item, index) => (
              <article key={item.question} className={index === 1 || index === 4 ? "story-slab" : "outline-card"}>
                <p className="eyebrow">Question</p>
                <h2 className="card-title mt-4">{item.question}</h2>
                <p className="card-copy mt-4">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Need more help"
        title="추가 안내가 필요하신가요?"
        description="FAQ에서 찾기 어려운 문의는 주문 페이지 또는 문의 페이지를 통해 이어서 확인하실 수 있습니다."
      >
        <div className="glass-panel p-8 sm:p-9">
          <div className="flex flex-wrap gap-4">
            <Link href="/order" className="pill inline-flex">
              주문 페이지
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(170,144,145,0.3)] bg-white/58 px-6 py-4 text-sm font-medium text-ink transition duration-200 hover:bg-white/78"
            >
              문의하기
            </Link>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
