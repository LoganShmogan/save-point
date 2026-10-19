import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/error"],
      },
    ],
    sitemap: "https://savepoint.co.nz/sitemap.xml",
  };
}
