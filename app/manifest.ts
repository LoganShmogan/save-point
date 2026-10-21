import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Save Point - Automation, Kiosks & Software, New Zealand",
    short_name: "SavePoint",
    description:
      "Save Point builds business automation, self-service kiosks, apps, software and websites that connect, for businesses across New Zealand.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
