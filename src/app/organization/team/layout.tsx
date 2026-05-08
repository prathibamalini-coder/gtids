import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the dedicated GTIDS team working on the ground across 15 states to deliver banking, DBT, and livelihood services to rural communities in India.",
  keywords: ["GTIDS team", "Gram Tarang staff", "financial inclusion team India", "rural development workers"],
  alternates: { canonical: `${SITE_URL}/organization/team` },
  openGraph: {
    title: "Our Team | GTIDS — Gram Tarang",
    description:
      "The people behind GTIDS — field staff and managers working tirelessly to empower rural communities across India.",
    url: `${SITE_URL}/organization/team`,
    images: [{ url: OG, width: 1200, height: 630, alt: "GTIDS Team" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | GTIDS",
    description: "Meet the GTIDS team delivering financial inclusion across rural India.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
