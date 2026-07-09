import "./globals.css";
import { Chakra_Petch, Figtree } from "next/font/google";
import type { Metadata, Viewport } from "next";

// Main header / button font
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
});

// Main body font
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://savepoint.cc"),
  icons: {
    icon: "/favicon.ico",
  },
  title: {
    default: "Save Point | Custom Software & IoT Development, New Zealand",
    template: "%s | Save Point NZ",
  },
  description:
    "Save Point is a New Zealand software company building custom software, web applications, and IoT device integration for small businesses through to enterprise.",
  keywords: [
    "Save Point",
    "Save Point NZ",
    "software New Zealand",
    "software development NZ",
    "custom software New Zealand",
    "IoT New Zealand",
    "web application development NZ",
  ],
  authors: [{ name: "Save Point Limited" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://savepoint.cc",
    siteName: "Save Point",
    title: "Save Point | Custom Software & IoT Development, New Zealand",
    description:
      "Custom software, web applications, and IoT device integration for New Zealand businesses.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Save Point | Custom Software & IoT Development, New Zealand",
    description:
      "Custom software, web applications, and IoT device integration for New Zealand businesses.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Save Point Limited",
  url: "https://savepoint.cc",
  logo: "https://savepoint.cc/logo.png",
  description:
    "Save Point builds custom software, web applications, and IoT device integration for businesses across New Zealand.",
  email: "contact@savepoint.cc",
  telephone: "+64210653792",
  areaServed: {
    "@type": "Country",
    name: "New Zealand",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "NZ",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61584633437200",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${chakra.variable} ${figtree.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
