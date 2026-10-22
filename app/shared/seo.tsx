import type { Metadata } from "next";

export const SITE_URL = "https://savepoint.co.nz";
export const SITE_NAME = "Save Point";
export const ORG_ID = `${SITE_URL}/#organization`;

// Share image (app/opengraph-image.png). Pages that set their own openGraph
// lose the inherited image, so it is listed again in pageMetadata.
const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Save Point: Automate the busywork. Connect everything else.",
};

// Per-page metadata. Next replaces (not merges) openGraph/twitter objects,
// so every page sets the full set here to keep og:url and titles correct.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const shareTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_NZ",
      siteName: SITE_NAME,
      url: path,
      title: shareTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [shareImage],
    },
  };
}

// Structured data for Google. "<" is escaped so content can't close the tag.
export const JsonLd = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    }}
  />
);

// Home > Page breadcrumb trail shown in search results
export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

// "$1,499" -> 1499
export const priceToNumber = (price: string) =>
  Number(price.replace(/[^0-9.]/g, ""));
