import "./globals.css";
import { Chakra_Petch, Figtree } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { JsonLd, ORG_ID, SITE_NAME, SITE_URL } from "@/app/shared/seo";

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
  themeColor: "#2b2233",
};

const title = "Business Automation, Kiosks & Software NZ | Save Point";
const description =
  "Save Point is a New Zealand automation company building AI, self-service kiosks, apps, custom software and websites that connect to each other.";
const shareDescription =
  "Business automation, AI, self-service kiosks, apps, software and websites that connect, for New Zealand businesses.";

// Icons and the share image come from app/icon.png, app/apple-icon.png,
// app/favicon.ico and app/opengraph-image.png (Next file conventions).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Save Point NZ",
  },
  description,
  applicationName: SITE_NAME,
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
    "custom software New Zealand",
    "website design NZ",
    "IoT New Zealand",
  ],
  authors: [{ name: "Save Point Limited", url: SITE_URL }],
  creator: "Save Point Limited",
  publisher: "Save Point Limited",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "/",
    siteName: SITE_NAME,
    title,
    description: shareDescription,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shareDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Who we are, for Google's knowledge panel and rich results
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: "Save Point Limited",
      alternateName: "Save Point",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/icon-512.png`,
      image: `${SITE_URL}/opengraph-image.png`,
      description,
      slogan: "Automate the busywork. Connect everything else.",
      email: "contact@savepoint.co.nz",
      telephone: "+64210653792",
      priceRange: "$$",
      currenciesAccepted: "NZD",
      areaServed: {
        "@type": "Country",
        name: "New Zealand",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "NZ",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "contact@savepoint.co.nz",
        telephone: "+64210653792",
        areaServed: "NZ",
        availableLanguage: "English",
      },
      knowsAbout: [
        "Business process automation",
        "AI automation",
        "Self-service kiosks",
        "Custom software development",
        "Mobile app development",
        "Website development",
        "System integration",
        "Internet of Things",
      ],
      sameAs: ["https://www.facebook.com/profile.php?id=61584633437200"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-NZ",
      publisher: { "@id": ORG_ID },
    },
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
        <JsonLd data={siteJsonLd} />
        {children}
      </body>
    </html>
  );
}
