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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,17,0.04)_0%,rgba(18,14,17,0.14)_48%,rgba(18,14,17,0.62)_100%)]" />
      {(title || body || eyebrow) && (
        <div
          className={`absolute inset-x-0 z-10 flex ${
            align === "top" ? "top-0 items-start" : "bottom-0 items-end"
          }`}
        >
          <div className="w-full p-6 sm:p-7">
            {eyebrow ? <p className="eyebrow !text-white/70">{eyebrow}</p> : null}
            {title ? <h3 className="mt-3 max-w-lg break-keep text-[clamp(1.35rem,1.8vw,1.9rem)] font-semibold leading-tight text-white">{title}</h3> : null}
            {body ? <p className="mt-3 max-w-lg break-keep text-sm leading-7 text-white/82">{body}</p> : null}
          </div>
        </div>
      )}
    </article>
  );
}
