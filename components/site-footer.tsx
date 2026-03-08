import Link from "next/link";

import { companyInfo, navLinks, policyLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[rgba(92,58,76,0.12)] bg-[linear-gradient(180deg,#24151f_0%,#140d13_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.16fr_0.72fr_1.12fr]">
          <div className="space-y-5">
            <p className="eyebrow !text-white/54">K-PharmRx</p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,4.4rem)] leading-[0.96] tracking-[-0.06em]">
              PDRN
              <br />
              리퀴드샷
            </h2>
            <p className="max-w-xl break-keep text-sm leading-8 text-white/70">
              {companyInfo.brandDescription}. 한국 약국 감도의 신뢰감과 부드러운 패키지 무드를 한 화면 안에서
              정제된 톤으로 전하는 K-PharmRx 공식 스토어입니다.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.28em] text-white/45">
              <span>Inner beauty</span>
              <span>Daily shot</span>
              <span>Pharmacy mood</span>
            </div>
        </div>

          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-white/45">Site map</p>
            <ul className="space-y-3 text-sm text-white/68">
            {navLinks.map((link) => (
              <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            </ul>
          </div>

          <div className="space-y-5 text-sm text-white/68">
            <div>
              <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-white/45">Seller information</p>
              <div className="grid gap-2 leading-7">
                <p>상호명 {companyInfo.legalName}</p>
                <p>대표자 {companyInfo.representative}</p>
                <p>사업자등록번호 {companyInfo.businessNumber}</p>
                <p>주소 {companyInfo.address}</p>
                <p>우편번호 {companyInfo.postalCode}</p>
                <p>대표번호 {companyInfo.phone}</p>
                <p>이메일 {companyInfo.email}</p>
              </div>
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex flex-wrap gap-4 text-xs text-white/52">
              {policyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
