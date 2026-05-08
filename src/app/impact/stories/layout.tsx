import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Read real success stories from individuals and communities whose lives have been transformed by GTIDS financial inclusion and livelihood initiatives across rural India.",
  keywords: ["GTIDS impact stories", "Gram Tarang success", "financial inclusion stories India", "rural empowerment stories"],
  alternates: { canonical: `${SITE_URL}/impact/stories` },
  openGraph: {
    title: "Success Stories | GTIDS — Gram Tarang Impact",
    description:
      "Real stories of transformation — how GTIDS is empowering communities through banking, insurance, and livelihood programs.",
    url: `${SITE_URL}/impact/stories`,
    images: [{ url: OG, width: 1200, height: 630, alt: "GTIDS Success Stories" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Success Stories | GTIDS Impact",
    description: "Real stories of empowerment from rural India through GTIDS programs.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
