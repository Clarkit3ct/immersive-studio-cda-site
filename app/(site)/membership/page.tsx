import type { Metadata } from "next";
import { MembershipPageSection } from "@/components/sections/membership-page";

export const metadata: Metadata = {
  alternates: { canonical: "/membership" },
  title: "Studio Membership",
};

export default function MembershipPage() {
  return <MembershipPageSection />;
}
