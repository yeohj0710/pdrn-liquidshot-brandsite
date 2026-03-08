import type { MetadataRoute } from "next";

import { navLinks, policyLinks, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    ...navLinks.map((link) => link.href),
    ...policyLinks.map((link) => link.href),
    "/order-complete",
  ];

  return urls.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
