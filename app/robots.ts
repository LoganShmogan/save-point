import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // /error is kept out of results by its noindex tag, which crawlers
        // can only see if the page isn't disallowed here.
        allow: "/",
      },
    ],
    sitemap: "https://savepoint.co.nz/sitemap.xml",
  };
}
