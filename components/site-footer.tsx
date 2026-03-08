import Link from "next/link";

import { companyInfo, navLinks, policyLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e7ddd8] bg-[rgba(255,255,255,0.62)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-10">
        <div className="space-y-4">
          <p className="eyebrow">K-PharmRx</p>
          <h2 className="text-3xl font-semibold text-ink">PDRN 리퀴드샷</h2>
          <p className="max-w-xl text-sm leading-7 text-muted">
            {companyInfo.brandDescription}와 함께, 매일 손이 가는 루틴과 부드러운 패키지 무드를
            전하는 K-PharmRx 공식 스토어입니다.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-muted">사이트 맵</p>
          <ul className="space-y-3 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm text-muted">
          <div>
            <p className="mb-3 font-semibold tracking-[0.24em]">판매자 정보</p>
            <p>상호명 {companyInfo.legalName}</p>
            <p>대표자 {companyInfo.representative}</p>
            <p>사업자등록번호 {companyInfo.businessNumber}</p>
            <p>주소 {companyInfo.address}</p>
            <p>우편번호 {companyInfo.postalCode}</p>
            <p>대표번호 {companyInfo.phone}</p>
            <p>이메일 {companyInfo.email}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            {policyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-ink">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
