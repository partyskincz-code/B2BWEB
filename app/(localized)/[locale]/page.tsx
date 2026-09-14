import type { Metadata } from "next";
import Content from "@/app/(cs)/HomeContent";
import { createLocalizedMetadata, isLocalizedLang } from "@/lib/localization";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocalizedLang(params.locale)) notFound();
  return createLocalizedMetadata(params.locale, "/");
}

export default function Page() { return <Content />; }
