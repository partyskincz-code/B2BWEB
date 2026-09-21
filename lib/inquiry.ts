"use client";

import type { Lang } from "./i18n";
import { trackEvent } from "./analytics";
import { trackMetaEvent } from "@/components/MetaPixel";

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "a2615ddf-cd67-44d7-8c12-0f7a731dd88b";

export async function submitInquiry(form: HTMLFormElement, lang: Lang, source: string, extra?: Record<string, string>) {
  if (!WEB3FORMS_KEY) throw new Error("Missing NEXT_PUBLIC_WEB3FORMS_KEY");
  const data = new FormData(form);
  data.append("access_key", WEB3FORMS_KEY);
  data.append("from_name", "makethemoment.cz");
  data.append("subject", `Nová poptávka z webu – ${source}`);
  data.append("Jazyk webu", lang);
  data.append("Zdroj formuláře", source);
  Object.entries(extra ?? {}).forEach(([key, value]) => data.append(key, value));
  const email = data.get("email");
  if (typeof email === "string" && email) data.append("replyto", email);

  trackEvent("inquiry_submit_started", { source, lang });
  const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.success) {
    trackEvent("inquiry_submit_failed", { source, lang });
    throw new Error("Web3Forms rejected the submission");
  }
  trackEvent("inquiry_submit_succeeded", { source, lang });
  // Meta Pixel: poptávka = Lead (na tuto událost se optimalizují B2B kampaně)
  trackMetaEvent("Lead", { content_name: source, content_category: "poptavka", lang });
}
