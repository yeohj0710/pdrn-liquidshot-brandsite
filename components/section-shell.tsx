import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24 ${className}`}>
      <Reveal className="section-head mb-10 lg:mb-14">
        <div className="section-head-label">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <span className="section-head-rule" />
        </div>
        <div className="section-head-copy">
          <h2 className="section-title break-keep">{title}</h2>
          {description ? <p className="section-note mt-4 break-keep">{description}</p> : null}
        </div>
      </Reveal>
      <Reveal delayMs={80}>{children}</Reveal>
    </section>
  );
}
