import type { MetadataRoute } from "next";

import { companyInfo } from "@/lib/site-data";
import { buildAbsoluteUrl } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${companyInfo.brandName} | PDRN Liquid Shot`,
    short_name: companyInfo.brandName,
    description: "PDRN 리퀴드샷 공식 스토어",
    start_url: "/",
    display: "standalone",
    background_color: "#f4efe9",
    theme_color: "#8b125c",
    icons: [
      {
        src: buildAbsoluteUrl("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
