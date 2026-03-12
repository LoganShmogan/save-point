import "./globals.css";
import { Chakra_Petch, Figtree } from "next/font/google";
import type { Metadata } from "next";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Save Point",
  description:
    "Save Point website for custom software and automation services made by Logan Young",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${chakra.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
