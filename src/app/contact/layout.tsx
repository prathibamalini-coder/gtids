import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact GTIDS — Gram Tarang Inclusive Development Services. Reach us at info@gramtarang.org or visit our office in Visakhapatnam, Andhra Pradesh.",
  keywords: ["contact GTIDS", "Gram Tarang contact", "GTIDS Visakhapatnam", "info@gramtarang.org"],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact GTIDS — Gram Tarang Inclusive Development",
    description:
      "Get in touch with GTIDS. Whether you are a partner, beneficiary, or looking to collaborate — we'd love to hear from you.",
    url: `${SITE_URL}/contact`,
    images: [{ url: OG, width: 1200, height: 630, alt: "Contact GTIDS" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | GTIDS — Gram Tarang",
    description: "Reach out to GTIDS for partnerships, queries, or support.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
