import type { Metadata } from "next";
import "./globals.css";
import { Chakra_Petch, Figtree } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/ConvexClientProvider";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["700"], // Bold only
  variable: "--font-display",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Save Point Limited",
  description: "Made by Logan Young for Save Point Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chakra.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
