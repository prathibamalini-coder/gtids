import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "Drone Initiatives — Super Bee Aeronautics",
  description:
    "Super Bee Aeronautics, our sister company, provides advanced drone systems for agriculture, precision mapping, skilling, and rural logistics across India.",
  keywords: [
    "drone agriculture India",
    "Super Bee Aeronautics",
    "GTIDS drone",
    "agri drone India",
    "rural drone services",
    "precision mapping drone",
  ],
  alternates: { canonical: `${SITE_URL}/drone` },
  openGraph: {
    title: "Drone Initiatives | GTIDS — Super Bee Aeronautics",
    description:
      "Bringing drone technology to agriculture, mapping, and skilling — in partnership with our sister company Super Bee Aeronautics.",
    url: `${SITE_URL}/drone`,
    images: [{ url: OG, width: 1200, height: 630, alt: "GTIDS Drone Initiatives" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone Initiatives | GTIDS — Super Bee Aeronautics",
    description: "Advanced drone systems for agriculture, mapping, and rural logistics.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
