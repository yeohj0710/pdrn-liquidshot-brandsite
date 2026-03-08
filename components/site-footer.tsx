import Link from "next/link";

import { companyInfo, navLinks, policyLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/50 bg-[rgba(255,255,255,0.55)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_0.8fr] lg:px-10">
        <div className="space-y-4">
          <p className="eyebrow">K-PharmRx</p>
          <h2 className="font-serif text-3xl italic text-ink">PDRN Liquid Shot</h2>
          <p className="max-w-xl text-sm leading-7 text-muted">
            {companyInfo.brandDescription}를 담은 K-PharmRx 공식 스토어입니다. 부드러운 패키지
            무드와 간편한 스틱 포맷으로 일상 속 이너뷰티 루틴을 제안합니다.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-muted">
            Navigate
          </p>
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
            <p className="mb-3 font-semibold uppercase tracking-[0.24em]">Company</p>
            <p>{companyInfo.legalName}</p>
            <p>대표 {companyInfo.representative}</p>
            <p>사업자등록번호 {companyInfo.businessNumber}</p>
            <p>{companyInfo.address}</p>
            <p>{companyInfo.postalCode}</p>
            <p>{companyInfo.phone}</p>
            <p>{companyInfo.email}</p>
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
