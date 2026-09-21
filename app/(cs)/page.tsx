import type { Metadata } from "next";
import Content from "./HomeContent";
import { languageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: {
    absolute: "Reklamní tetovačky na míru pro firmy a eventy | Make the Moment",
  },
  description:
    "Dočasné tetovačky s vaším logem, samolepky a tiskoviny na míru pro firmy, agentury a eventy. Bez minimálního množství, nabídka do 24 hodin.",
  alternates: {
    canonical: "/",
    languages: languageAlternates("/"),
  },
  openGraph: {
    title: "Reklamní tetovačky na míru pro firmy a eventy | Make the Moment",
    description:
      "Dočasné tetovačky s vaším logem, samolepky a tiskoviny na míru pro firmy, agentury a eventy. Bez minimálního množství, nabídka do 24 hodin.",
    url: "/",
    images: [
      {
        url: "/og-make-the-moment.jpg",
        width: 1200,
        height: 630,
        alt: "Make the Moment, dočasné tetovačky a promo materiály na míru",
      },
    ],
  },
};

export default function Page() {
  return <Content />;
}
