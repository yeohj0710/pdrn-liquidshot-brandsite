import type { Metadata } from "next";

import { SectionShell } from "@/components/section-shell";
import { companyInfo, contactChannels } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "문의",
  description: "PDRN 리퀴드샷 제품 및 주문 관련 문의처와 판매자 정보를 안내합니다.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SectionShell
        eyebrow="문의 안내"
        title="제품과 주문 관련 문의를 안내해 드립니다"
        description="고객센터, 이메일, 판매자 정보를 한곳에서 확인하실 수 있습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {contactChannels.map((channel) => (
            <article key={channel.title} className="feature-card">
              <p className="eyebrow">{channel.title}</p>
              <h2 className="mt-4 break-all text-2xl font-semibold text-ink">{channel.value}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{channel.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="판매자 정보"
        title="판매자 정보"
        description="주문 전 확인하실 수 있도록 판매자 기본 정보를 다시 안내합니다."
      >
        <div className="glass-panel p-8">
          <div className="grid gap-4 text-sm leading-7 text-muted sm:grid-cols-2">
            <p>
              상호명 <span className="font-semibold text-ink">{companyInfo.legalName}</span>
            </p>
            <p>
              대표자 <span className="font-semibold text-ink">{companyInfo.representative}</span>
            </p>
            <p>
              사업자등록번호 <span className="font-semibold text-ink">{companyInfo.businessNumber}</span>
            </p>
            <p>
              대표번호 <span className="font-semibold text-ink">{companyInfo.phone}</span>
            </p>
            <p className="sm:col-span-2">
              주소 <span className="font-semibold text-ink">{companyInfo.address}</span>
            </p>
            <p className="sm:col-span-2">
              이메일 <span className="font-semibold text-ink">{companyInfo.email}</span>
            </p>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
