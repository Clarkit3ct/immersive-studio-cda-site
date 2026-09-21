export {
  brandColors,
  primaryColors,
  secondaryColors,
  type BrandColorName,
} from "./colors";
export { brandTypography, typeScale } from "./typography";

export const brand = {
  name: "Immersive Studio CDA",
  location: "CDA",
  logo: {
    src: "/logo/logo-off-white.png",
    alt: "Immersive Studio CDA",
    width: 3000,
    height: 2000,
  },
  tagline:
    "Step inside future homes, properties, spaces, and original ideas at a 1:1 immersive scale — where architects, builders, real estate professionals, and creators can explore the vision before it exists anywhere else.",
} as const;


export const brand2 = {
  name: "Immersive Studio CDA",
  location: "CDA",
  logo: {
    src: "/logo/letter-logo-white.png",
    alt: "Immersive Studio CDA",
    width: 3000,
    height: 2000,
  },
} as const;