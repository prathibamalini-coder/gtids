import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Meet the visionary Board of Directors leading GTIDS — Gram Tarang Inclusive Development Services — toward greater financial inclusion and sustainable rural development.",
  keywords: ["GTIDS directors", "Gram Tarang board", "GTIDS leadership", "Gram Tarang directors"],
  alternates: { canonical: `${SITE_URL}/organization/directors` },
  openGraph: {
    title: "Board of Directors | GTIDS — Gram Tarang",
    description:
      "Meet the visionary leaders guiding GTIDS toward financial inclusion and rural development at scale.",
    url: `${SITE_URL}/organization/directors`,
    images: [{ url: OG, width: 1200, height: 630, alt: "GTIDS Board of Directors" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Directors | GTIDS — Gram Tarang",
    description: "The leadership team behind GTIDS's mission in rural India.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
