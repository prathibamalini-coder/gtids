import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the comprehensive suite of services provided by GTIDS, from financial inclusion and DBT to credit, savings, and livelihood programs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
