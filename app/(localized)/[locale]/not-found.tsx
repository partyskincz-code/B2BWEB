import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 bg-brand-light min-h-[70vh]">
      <div className="container-pad max-w-2xl">
        <p className="font-display font-extrabold text-brand-primary text-6xl mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-display font-extrabold text-brand-secondary mb-4">Page not found</h1>
        <p className="text-gray-600 leading-relaxed mb-8">This page does not exist in the selected language.</p>
        <Link href="/" className="btn-primary">Make the Moment</Link>
      </div>
    </section>
  );
}
