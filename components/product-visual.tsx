import Image from "next/image";

import { productData } from "@/lib/site-data";

type ProductVisualProps = {
  variant?: "hero" | "soft" | "spotlight" | "stack" | "focus" | "dark";
  className?: string;
  priority?: boolean;
};

const variantMap: Record<NonNullable<ProductVisualProps["variant"]>, { frame: string; image: string }> = {
  hero: {
    frame:
      "rounded-[2.6rem] bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.96),transparent_24%),linear-gradient(145deg,#fff9f4_0%,#f8edf0_46%,#efe5df_100%)] p-6 sm:p-8",
    image: "w-full max-w-[620px] rotate-[-2deg]",
  },
  soft: {
    frame:
      "rounded-[2.2rem] bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.9),transparent_26%),linear-gradient(180deg,#fff8fb_0%,#f7ede8_100%)] p-6",
    image: "w-full max-w-[520px]",
  },
  spotlight: {
    frame:
      "rounded-[2.25rem] bg-[radial-gradient(circle_at_52%_18%,rgba(255,255,255,0.98),rgba(246,236,241,0.95)_38%,rgba(233,221,212,0.96))] p-6",
    image: "w-full max-w-[540px]",
  },
  stack: {
    frame:
      "rounded-[2rem] bg-[linear-gradient(160deg,#fffaf5_0%,#f7eef3_50%,#ece5de_100%)] p-5",
    image: "w-full max-w-[420px] rotate-[3deg]",
  },
  focus: {
    frame:
      "rounded-[2rem] bg-[linear-gradient(145deg,#f7f0ea_0%,#fff9f5_52%,#f2e9ef_100%)] p-6",
    image: "w-full max-w-[400px]",
  },
  dark: {
    frame:
      "rounded-[2.2rem] bg-[radial-gradient(circle_at_48%_8%,rgba(255,255,255,0.16),transparent_26%),linear-gradient(180deg,#3b2431_0%,#191016_100%)] p-6",
    image: "w-full max-w-[520px] drop-shadow-[0_26px_52px_rgba(0,0,0,0.26)]",
  },
};

export function ProductVisual({ variant = "soft", className = "", priority = false }: ProductVisualProps) {
  const config = variantMap[variant];

  return (
    <div className={`ambient-sheen relative overflow-hidden ${config.frame} ${className}`}>
      <div className="pointer-events-none absolute inset-[1.2rem] rounded-[1.6rem] border border-white/34" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.88),transparent_22%),radial-gradient(circle_at_84%_82%,rgba(255,216,235,0.34),transparent_28%)]" />
      <div className="pointer-events-none absolute -left-8 top-10 h-24 w-24 rounded-full bg-white/55 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-28 w-28 rounded-full bg-[#ffd8eb]/45 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-8 top-5 h-px bg-white/70" />
      <div className="pointer-events-none absolute inset-x-12 bottom-6 h-10 rounded-full bg-[radial-gradient(circle,rgba(79,47,61,0.12),transparent_72%)] blur-xl" />
      <div className="relative z-10 flex min-h-full items-center justify-center">
        <Image
          src={productData.visualImagePath}
          alt={productData.name}
          width={760}
          height={760}
          priority={priority || variant === "hero"}
          className={`mx-auto h-auto object-contain animate-float-soft ${config.image}`}
        />
      </div>
    </div>
  );
}
