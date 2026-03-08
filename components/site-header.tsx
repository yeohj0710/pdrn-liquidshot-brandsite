import Link from "next/link";

import { companyInfo, navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/55 bg-[rgba(249,245,241,0.76)] backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="hidden items-center justify-between border-b border-[rgba(164,138,140,0.16)] py-2 text-[11px] uppercase tracking-[0.28em] text-muted lg:flex">
          <p>Pharmacy inspired inner beauty</p>
          <div className="flex items-center gap-6">
            <span>TEL {companyInfo.phone}</span>
            <span>{companyInfo.email}</span>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-[1.25rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,235,229,0.82))] shadow-halo">
              <span className="font-accent text-[1.35rem] font-semibold italic text-[#8c1656]">K</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.44em] text-muted">K-PharmRx</p>
              <p className="mt-1 font-display text-[1.05rem] tracking-[-0.03em] text-ink">PDRN 리퀴드샷</p>
            </div>
          </Link>

          <nav className="hidden items-center justify-center gap-8 text-sm text-muted lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition duration-200 hover:text-ink">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <div className="hidden text-right xl:block">
              <p className="text-[10px] uppercase tracking-[0.34em] text-muted">Official store</p>
              <p className="mt-1 text-xs text-muted">{companyInfo.brandDescription}</p>
            </div>
            <Link href="/order" className="pill hidden md:inline-flex">
              구매하기
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(164,138,140,0.14)] py-3 text-xs text-muted lg:hidden">
          <div className="flex flex-wrap items-center gap-4">
            <span>TEL {companyInfo.phone}</span>
            <span>{companyInfo.email}</span>
          </div>
          <Link href="/order" className="text-sm font-medium text-ink">
            구매하기
          </Link>
        </div>

        <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-[rgba(164,138,140,0.22)] bg-white/56 px-4 py-2 text-sm text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.42)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
