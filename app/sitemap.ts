import type { MetadataRoute } from "next";

import { navLinks, policyLinks } from "@/lib/site-data";
import { buildAbsoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const priorities = new Map<string, number>([
    ["/", 1],
    ["/product", 0.9],
    ["/brand", 0.8],
    ["/formula", 0.8],
    ["/faq", 0.7],
    ["/contact", 0.7],
    ["/order", 0.6],
  ]);

  const urls = [...navLinks.map((link) => link.href), ...policyLinks.map((link) => link.href)];

  return urls.map((path) => ({
    url: buildAbsoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: priorities.get(path) ?? 0.5,
  }));
}
