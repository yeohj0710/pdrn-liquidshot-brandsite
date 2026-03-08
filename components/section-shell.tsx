import type { ReactNode } from "react";

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
    <section id={id} className={`mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10 ${className}`}>
      <div className="mb-10 max-w-3xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="section-title mt-3">{title}</h2>
        {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
