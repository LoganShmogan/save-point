import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Save Point - Software & IoT Development, New Zealand",
    short_name: "SavePoint",
    description:
      "Save Point builds custom software, web applications, and IoT device integration for businesses across New Zealand.",
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
