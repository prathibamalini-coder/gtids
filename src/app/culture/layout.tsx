import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "Our Culture",
  description:
    "Discover the culture, values, and community-first approach that drives every GTIDS team member to deliver meaningful change in rural India.",
  keywords: ["GTIDS culture", "Gram Tarang values", "community development culture", "rural development team India"],
  alternates: { canonical: `${SITE_URL}/culture` },
  openGraph: {
    title: "Our Culture | GTIDS — Gram Tarang",
    description:
      "At GTIDS, meaningful change begins with people. Explore our values, culture, and community-first approach.",
    url: `${SITE_URL}/culture`,
    images: [{ url: OG, width: 1200, height: 630, alt: "GTIDS Culture" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Culture | GTIDS",
    description: "Community-first culture driving financial inclusion in rural India.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
