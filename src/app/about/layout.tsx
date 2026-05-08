import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about GTIDS, our history, and our mission to build financial inclusion and sustainable livelihoods across rural India.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
