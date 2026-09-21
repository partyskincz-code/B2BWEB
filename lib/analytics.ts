"use client";

import { track } from "@vercel/analytics";

export function trackEvent(name: string, properties?: Record<string, string | number | boolean>) {
  try {
    track(name, properties);
  } catch {
    // Analytics must never interrupt navigation or form submission.
  }
}
