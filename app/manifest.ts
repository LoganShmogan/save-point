import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Save Point - Automation, Kiosks & Software, New Zealand",
    short_name: "SavePoint",
    description:
      "Save Point builds business automation, self-service kiosks, apps, software and websites that connect, for businesses across New Zealand.",
    start_url: "/",
    display: "standalone",
    background_color: "#2b2233",
    theme_color: "#2b2233",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
