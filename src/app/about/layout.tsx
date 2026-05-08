import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GTIDS — Gram Tarang Inclusive Development Services — our history, leadership, and our mission to build financial inclusion and sustainable livelihoods across rural India.",
  keywords: ["about GTIDS", "Gram Tarang history", "inclusive development India", "financial inclusion NGO"],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About GTIDS — Gram Tarang Inclusive Development Services",
    description:
      "Discover the story, mission, and leadership behind GTIDS — delivering banking and livelihood services to 25,000+ villages across rural India.",
    url: `${SITE_URL}/about`,
    images: [{ url: OG, width: 1200, height: 630, alt: "About GTIDS" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About GTIDS — Gram Tarang",
    description: "Our story, mission, and the people driving financial inclusion in rural India.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
