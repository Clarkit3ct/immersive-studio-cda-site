import type { Metadata } from "next";
import { PrivateEventsPageSection } from "@/components/sections/private-events-page";

export const metadata: Metadata = {
  alternates: { canonical: "/private-events" },
  title: "Private Events",
};

export default function PrivateEventsPage() {
  return <PrivateEventsPageSection />;
}
