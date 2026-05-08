import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: "Discover the vision and mission driving GTIDS to empower communities and eradicate financial exclusion.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
