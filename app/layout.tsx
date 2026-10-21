import "./globals.css";
import { Chakra_Petch, Figtree } from "next/font/google";
import type { Metadata, Viewport } from "next";

// Main header / button font
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

// Main body font
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://savepoint.co.nz"),
  icons: {
    icon: "/favicon.ico",
  },
  title: {
    default: "Save Point | Business Automation, Kiosks & Software, New Zealand",
    template: "%s | Save Point NZ",
  },
  description:
    "Save Point is a New Zealand automation company building business automation, AI, self-service kiosks, apps, custom software and websites that connect to each other, for small businesses through to enterprise.",
  keywords: [
    "Save Point",
    "Save Point NZ",
    "business automation NZ",
    "automation New Zealand",
    "AI automation NZ",
    "self-service kiosk NZ",
    "kiosk software New Zealand",
    "app development NZ",
    "system integration NZ",
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
    url: "https://savepoint.co.nz",
    siteName: "Save Point",
    title: "Save Point | Business Automation, Kiosks & Software, New Zealand",
    description:
      "Business automation, AI, self-service kiosks, apps, software and websites that connect, for New Zealand businesses.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Save Point | Business Automation, Kiosks & Software, New Zealand",
    description:
      "Business automation, AI, self-service kiosks, apps, software and websites that connect, for New Zealand businesses.",
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
  url: "https://savepoint.co.nz",
  logo: "https://savepoint.co.nz/logo.png",
  description:
    "Save Point builds business automation, self-service kiosks, apps, custom software and websites that connect, for businesses across New Zealand.",
  email: "contact@savepoint.co.nz",
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
    <html lang="en-NZ" className={`${chakra.variable} ${figtree.variable}`}>
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
