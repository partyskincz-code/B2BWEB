import Link from "next/link";

export default function Drobecky({ nazev }: { nazev: string }) {
  return (
    <nav aria-label="Drobečková navigace" className="mb-5">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
        <li>
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Domů
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-gray-500">{nazev}</li>
      </ol>
    </nav>
  );
}
