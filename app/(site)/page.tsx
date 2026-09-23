import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OurLocation } from "@/components/sections/our-location";
import { PrivateEvents } from "@/components/sections/private-events";
import { FoundingStudioPartners } from "@/components/sections/founding-studio-partners";
import { WhatHappensHere } from "@/components/sections/what-happens-here";
import { Preloader } from "@/components/ui/preloader";
import { StudioZones } from "@/components/sections/studio-zones";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const localBusinessSchema = {"@context": "https://schema.org", "@type": "LocalBusiness", "name": "Immersive Studio CDA", "url": "https://www.immersivestudiocda.com/", "telephone": "+1-208-755-2696", "email": "contact@immersivestudiocda.com", "image": "https://www.immersivestudiocda.com/assets/real/walking-the-plan.jpg", "description": "Walk your floor plans at full scale. A 1:1 projection studio in downtown Coeur d'Alene for architects, builders, real estate professionals, and homeowners.", "address": {"@type": "PostalAddress", "streetAddress": "216 E Coeur d'Alene Ave", "addressLocality": "Coeur d'Alene", "addressRegion": "ID", "postalCode": "83814", "addressCountry": "US"}, "areaServed": ["Coeur d'Alene", "Spokane", "North Idaho", "Eastern Washington"], "potentialAction": {"@type": "ReserveAction", "target": "https://immersivestudiocda-book.as.me/", "name": "Book a Session"}};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Preloader />
      <Hero />
      <WhatHappensHere />
      <HowItWorks />
      <StudioZones />
      <FoundingStudioPartners />
      <OurLocation />
      <PrivateEvents />
    </>
  );
}
