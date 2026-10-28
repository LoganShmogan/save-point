import type { MetadataRoute } from "next";

const baseUrl = "https://savepoint.co.nz";

// Update a route's date here when its page content actually changes.
const routes = [
  { path: "", lastModified: "2026-10-28" },
  { path: "/services", lastModified: "2026-10-22" },
  { path: "/about", lastModified: "2026-10-22" },
  { path: "/pricing", lastModified: "2026-10-22" },
  { path: "/contact", lastModified: "2026-10-22" },
  { path: "/legal", lastModified: "2026-10-22" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
