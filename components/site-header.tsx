import Link from "next/link";

import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[rgba(247,243,239,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 shadow-halo">
            <span className="font-serif text-lg font-semibold italic text-[#8b125c]">K</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-muted">K-PharmRx</p>
            <p className="text-sm font-medium text-ink">PDRN Liquid Shot</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/order" className="pill hidden md:inline-flex">
          구매하기
        </Link>
      </div>

      <div className="border-t border-white/40 md:hidden">
        <div className="hide-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
