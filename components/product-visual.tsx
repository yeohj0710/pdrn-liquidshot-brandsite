import Image from "next/image";

import { productData } from "@/lib/site-data";

type ProductVisualProps = {
  variant?: "hero" | "soft" | "spotlight" | "stack" | "focus" | "dark";
  className?: string;
};

const variantMap: Record<NonNullable<ProductVisualProps["variant"]>, { frame: string; image: string }> = {
  hero: {
    frame:
      "rounded-[2.4rem] bg-gradient-to-br from-[#f8e3ed] via-[#fffaf6] to-[#f2ebe5] p-6 sm:p-8",
    image: "w-full max-w-[520px] rotate-[-2deg]",
  },
  soft: {
    frame:
      "rounded-[2rem] bg-gradient-to-br from-[#fff8fb] via-[#f9f4ef] to-[#f2ebe5] p-6",
    image: "w-full max-w-[460px]",
  },
  spotlight: {
    frame:
      "rounded-[2rem] bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.98),rgba(245,234,240,0.94)_46%,rgba(232,219,210,0.96))] p-6",
    image: "w-full max-w-[480px]",
  },
  stack: {
    frame:
      "rounded-[2rem] bg-gradient-to-br from-[#fffaf5] via-[#f7eef3] to-[#ece5de] p-5",
    image: "w-full max-w-[430px] rotate-[3deg]",
  },
  focus: {
    frame:
      "rounded-[2rem] bg-gradient-to-br from-[#f7f0ea] via-[#fff9f5] to-[#f2e9ef] p-6",
    image: "w-full max-w-[410px]",
  },
  dark: {
    frame:
      "rounded-[2rem] bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(180deg,#3f2e39_0%,#241c24_100%)] p-6",
    image: "w-full max-w-[470px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]",
  },
};

export function ProductVisual({ variant = "soft", className = "" }: ProductVisualProps) {
  const config = variantMap[variant];

  return (
    <div className={`ambient-sheen relative overflow-hidden ${config.frame} ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.85),transparent_22%),radial-gradient(circle_at_84%_82%,rgba(255,216,235,0.38),transparent_28%)]" />
      <div className="pointer-events-none absolute -left-8 top-10 h-24 w-24 rounded-full bg-white/55 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-28 w-28 rounded-full bg-[#ffd8eb]/45 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-8 top-5 h-px bg-white/70" />
      <div className="relative z-10 flex min-h-full items-center justify-center">
        <Image
          src={productData.visualImagePath}
          alt={productData.name}
          width={760}
          height={760}
          priority={variant === "hero"}
          className={`mx-auto h-auto object-contain animate-float-soft ${config.image}`}
        />
      </div>
    </div>
  );
}
