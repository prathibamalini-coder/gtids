import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore GTIDS services: last-mile banking, DBT, credit & savings, insurance, agri-finance, drone services, and livelihood programs across rural India.",
  keywords: [
    "GTIDS services",
    "financial inclusion services",
    "DBT banking India",
    "bank mitra services",
    "rural banking CSP",
    "agri finance India",
    "insurance rural India",
    "livelihood programs",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Our Services | GTIDS — Gram Tarang Inclusive Development",
    description:
      "From DBT to insurance and livelihood programs — explore the comprehensive services GTIDS delivers to 25,000+ villages across 15 states.",
    url: `${SITE_URL}/services`,
    images: [{ url: OG, width: 1200, height: 630, alt: "GTIDS Services" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | GTIDS — Gram Tarang",
    description: "DBT, banking, insurance, agri-finance and livelihood services for rural India.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
