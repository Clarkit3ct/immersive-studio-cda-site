import type { Metadata } from "next";
import { FounderIntroduction } from "@/components/sections/founder-introduction";

export const metadata: Metadata = {
  alternates: { canonical: "/founder-story" },
  title: "Founder Story",
};

export default function FounderStoryPage() {
  return <FounderIntroduction />;
}
