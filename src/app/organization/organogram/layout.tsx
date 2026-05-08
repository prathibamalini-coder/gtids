import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organogram",
  description: "Explore the organizational structure of GTIDS and how our teams collaborate to drive impact at scale.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
