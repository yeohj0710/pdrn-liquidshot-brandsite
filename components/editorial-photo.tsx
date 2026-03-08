import Image from "next/image";

type EditorialPhotoProps = {
  src: string;
  alt: string;
  title?: string;
  eyebrow?: string;
  body?: string;
  className?: string;
  priority?: boolean;
  align?: "bottom" | "top";
};

export function EditorialPhoto({
  src,
  alt,
  title,
  eyebrow,
  body,
  className = "",
  priority = false,
  align = "bottom",
}: EditorialPhotoProps) {
  return (
    <article className={`image-shell ambient-sheen relative min-h-[260px] overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,17,0.02)_0%,rgba(18,14,17,0.12)_44%,rgba(18,14,17,0.68)_100%)]" />
      {(title || body || eyebrow) && (
        <div
          className={`absolute inset-x-0 z-10 flex ${
            align === "top" ? "top-0 items-start" : "bottom-0 items-end"
          }`}
        >
          <div className="w-full p-6 sm:p-7">
            {eyebrow ? <p className="eyebrow !text-white/62">{eyebrow}</p> : null}
            {title ? (
              <h3 className="mt-3 max-w-lg break-keep font-display text-[clamp(1.3rem,1.8vw,2rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-white">
                {title}
              </h3>
            ) : null}
            {body ? <p className="mt-3 max-w-lg break-keep text-sm leading-7 text-white/78">{body}</p> : null}
          </div>
        </div>
      )}
    </article>
  );
}
