import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: "Meet the visionary Board of Directors leading GTIDS toward greater financial inclusion and sustainable development.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
