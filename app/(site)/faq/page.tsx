import type { Metadata } from "next";
import { FaqPageSection } from "@/components/sections/faq-page";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "FAQ",
};

export default function FaqPage() {
  return <FaqPageSection />;
}
