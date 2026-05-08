import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Culture",
  description: "At GTIDS, meaningful change begins with people. Learn about our culture, core values, and community-centric approach.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
