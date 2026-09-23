import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["200", "400"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SITE_URL = "https://www.immersivestudiocda.com";
const SITE_DESCRIPTION =
  "Walk your floor plans at full scale. A 1:1 projection studio in downtown Coeur d'Alene for architects, builders, real estate professionals, and homeowners.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: brand.name,
    template: `%s | ${brand.name}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: brand.name,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [
      {
        url: "/assets/real/studio-session-walkthrough.jpg",
        width: 1500,
        height: 2000,
        alt: "A studio session in progress: clients walking a floor plan projected at full scale, with elevations and a rendering on the walls",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${instrumentSerif.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-off-white text-onyx font-sans">
        {children}
      </body>
    </html>
  );
}
