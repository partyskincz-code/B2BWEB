import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const footerLinks = {
  produkty: [
    { href: "/produkty#tetovacky", label: "Dočasné tetovačky" },
    { href: "/produkty#samolepky", label: "Samolepky na míru" },
    { href: "/produkty#pohlednice", label: "Pohlednice a přání" },
    { href: "/produkty#kompletni", label: "Kompletní řešení" },
  ],
  sluzby: [
    { href: "/jak-to-funguje", label: "Jak to funguje" },
    { href: "/reference", label: "Reference a galerie" },
    { href: "/kontakt", label: "Poptávkový formulář" },
    { href: "/jak-to-funguje#faq", label: "Časté otázky" },
  ],
  segmenty: [
    { href: "/produkty#firmy", label: "Firmy a značky" },
    { href: "/produkty#svatby", label: "Svatby a oslavy" },
    { href: "/produkty#festivaly", label: "Festivaly a akce" },
    { href: "/produkty#skoly", label: "Školy a děti" },
    { href: "/produkty#obchody", label: "Velkoobchod" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-white">
      {/* Main footer */}
      <div className="container-pad py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-2xl text-white">Party</span>
              <span className="font-display font-bold text-2xl text-brand-primary">Skin</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/80 ml-1">B2B</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Váš partner pro promo materiály, které si zákazníci skutečně chtějí.
              Dočasné tetovačky, samolepky a pohlednice na míru pro firmy, eventy i jednotlivce.
            </p>
            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:b2b@partyskin.cz"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-brand-primary flex-shrink-0" />
                b2b@partyskin.cz
              </a>
              <a
                href="tel:+420600000000"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-brand-primary flex-shrink-0" />
                +420 600 000 000
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin size={16} className="text-brand-primary flex-shrink-0" />
                Praha, Česká republika
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Produkty</h4>
            <ul className="space-y-2.5">
              {footerLinks.produkty.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Služby</h4>
            <ul className="space-y-2.5">
              {footerLinks.sluzby.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Pro koho</h4>
            <ul className="space-y-2.5">
              {footerLinks.segmenty.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-pad py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} PartySkin s.r.o. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/partyskin.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com/partyskin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://linkedin.com/company/partyskin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/ochrana-osobnich-udaju" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Ochrana osobních údajů
            </Link>
            <Link href="/obchodni-podminky" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Obchodní podmínky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
