import type { MetadataRoute } from "next";

const baseUrl = "https://savepoint.cc";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/pricing", "/contact", "/legal"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
