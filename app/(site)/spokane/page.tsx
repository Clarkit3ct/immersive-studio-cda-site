import type { Metadata } from "next";
import { LandingPage, type LandingContent } from "@/components/sections/landing-page";

export const metadata: Metadata = {
  title: "Floor Plan Projection for Spokane",
  description: "The nearest full-scale floor plan projection studio to Spokane is 30 minutes away in downtown Coeur d'Alene. Walk architectural plans at true 1:1 scale.",
  alternates: { canonical: "/spokane" },
};

const content: LandingContent = {
  "eyebrow": "Spokane",
  "headline": "Floor plan projection, 30 minutes from Spokane",
  "intro": "There is no full-scale plan projection studio in Spokane. The nearest one is open in downtown Coeur d'Alene: a 3,500± sq ft floor that shows architectural plans at true 1:1 scale, with elevations on two 50' × 13' walls. About 30 minutes east on I-90.",
  "image": {
    "src": "/assets/real/walking-the-plan.jpg",
    "alt": "A client standing on a floor plan projected at full scale, with the home's elevations lit on the wall"
  },
  "sections": [
    {
      "title": "Worth the drive",
      "body": "A session puts your whole team and your client inside the plan at real size. Room sizes, clearances, sight lines, and furniture all read the way they will in the finished build, and decisions get made standing in the space they affect. One hour on the floor replaces weeks of markups."
    },
    {
      "title": "Who makes the trip",
      "bullets": [
        "Spokane architects bring clients for approvals on projects across the region.",
        "Builders in Spokane and Kootenai counties lock decisions before framing.",
        "Interior designers test layouts at real scale before orders go in.",
        "Real estate professionals compare listings, including out-of-state properties, without a flight.",
        "Homeowners building in North Idaho or Eastern Washington walk the plan once before it is permanent."
      ]
    },
    {
      "title": "How a session runs",
      "body": "Book online, send your drawings ahead through the private folder link in your confirmation, and the floor is ready when you arrive. Sessions run 30, 60, or 120 minutes."
    }
  ],
  "faqs": [
    {
      "q": "Is there a floor plan projection studio in Spokane?",
      "a": "Not in Spokane itself. Immersive Studio CDA in downtown Coeur d'Alene is the nearest full-scale studio, about 30 minutes east on I-90 at 216 E Coeur d'Alene Ave."
    },
    {
      "q": "How big a plan can the floor show?",
      "a": "The projection floor is 3,500± square feet and the view pans, so any plan size reads at true 1:1 scale, one floor at a time. Multi-story buildings are walked floor by floor."
    },
    {
      "q": "Do you work with Spokane builders and architects?",
      "a": "Yes. Most sessions are booked by the professional and attended by their client. Memberships and a three-session bundle are available for firms that come often."
    },
    {
      "q": "What do I need to bring?",
      "a": "PDF drawings, sent ahead through the private folder link you receive after booking. We handle the projection-ready prep."
    }
  ],
  "cta": {
    "label": "Book a Session",
    "href": "https://immersivestudiocda-book.as.me/"
  },
  "secondary": {
    "label": "See how a session works",
    "href": "/floor-plan-walkthrough"
  }
};

export default function Page() {
  return <LandingPage content={content} />;
}
