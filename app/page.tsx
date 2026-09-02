import type { Metadata } from "next";
import Content from "./HomeContent";

export const metadata: Metadata = {
  title: {
    absolute: "Reklamní tetovačky na míru pro firmy a eventy | PartySkin B2B",
  },
  description:
    "Dočasné tetovačky s vaším logem, samolepky a tiskoviny na míru pro firmy, agentury a eventy. Bez minimálního množství, nabídka do 24 hodin.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reklamní tetovačky na míru pro firmy a eventy | PartySkin B2B",
    description:
      "Dočasné tetovačky s vaším logem, samolepky a tiskoviny na míru pro firmy, agentury a eventy. Bez minimálního množství, nabídka do 24 hodin.",
    url: "/",
    images: [
      {
        url: "/og-partyskin-b2b.jpg",
        width: 1200,
        height: 630,
        alt: "PartySkin B2B, dočasné tetovačky a promo materiály na míru",
      },
    ],
  },
};

export default function Page() {
  return <Content />;
}
