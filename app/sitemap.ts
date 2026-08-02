import type { MetadataRoute } from "next";

const baseUrl = "https://savepoint.cc";

// Update a route's date here when its page content actually changes.
const routes = [
  { path: "", lastModified: "2026-08-02" },
  { path: "/about", lastModified: "2026-07-09" },
  { path: "/pricing", lastModified: "2026-07-09" },
  { path: "/contact", lastModified: "2026-07-09" },
  { path: "/legal", lastModified: "2026-07-09" },
  { path: "/automation", lastModified: "2026-08-02" },
  { path: "/job-search", lastModified: "2026-08-02" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
