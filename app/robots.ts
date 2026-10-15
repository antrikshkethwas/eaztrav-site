import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/booking";

// Serves /robots.txt: lets search engines crawl the whole site and tells
// them where the sitemap is.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
