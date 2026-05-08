import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Initiatives",
  description: "Super Bee Aeronautics, our sister company, provides advanced drone systems for agriculture, mapping, and rural logistics.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
