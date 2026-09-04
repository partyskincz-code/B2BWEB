"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const igPhotos = [
  "/realizace-prebal-b2b-a5.jpg",
  "/realizace-detske-prebal-a6.jpg",
  "/realizace-prebal-a5.jpg",
  "/realizace-papirovy-prebal.jpg",
  "/realizace-prebal-b2b-a5-zadni.jpg",
  "/realizace-prebal-b2b-a5.jpg",
  "/realizace-detske-prebal-a6.jpg",
  "/realizace-prebal-a5.jpg",
];

export default function Footer() {
  const { lang } = useLanguage();

  const footerLinks = {
    produkty: [
      { href: "/produkty#tetovacky", label: lang === "en" ? "Temporary Tattoos" : lang === "sk" ? "Dočasné tetovačky" : "Dočasné tetovačky" },
      { href: "/produkty#samolepky", label: lang === "en" ? "Custom Stickers" : lang === "sk" ? "Samolepky na mieru" : "Samolepky na míru" },
      { href: "/produkty#pohlednice", label: lang === "en" ? "Postcards & Cards" : lang === "sk" ? "Pohľadnice a priania" : "Pohlednice a přání" },
      { href: "/produkty#kompletni", label: lang === "en" ? "Complete Solution" : lang === "sk" ? "Kompletné riešenie" : "Kompletní řešení" },
    ],
    sluzby: [
      { href: "/poradna", label: lang === "en" ? "Guides" : lang === "sk" ? "Poradňa" : "Poradna" },
      { href: "/cenik", label: lang === "en" ? "Price list" : lang === "sk" ? "Cenník" : "Ceník" },
      { href: "/jak-to-funguje", label: lang === "en" ? "How it works" : lang === "sk" ? "Ako to funguje" : "Jak to funguje" },
      { href: "/reference", label: lang === "en" ? "References & gallery" : lang === "sk" ? "Referencie a galéria" : "Reference a galerie" },
      { href: "/kontakt", label: lang === "en" ? "Inquiry form" : lang === "sk" ? "Dopytový formulár" : "Poptávkový formulář" },
      { href: "/jak-to-funguje#faq", label: lang === "en" ? "FAQ" : lang === "sk" ? "Časté otázky" : "Časté otázky" },
    ],
    segmenty: [
      { href: "/tetovacky-na-firemni-event", label: lang === "en" ? "Corporate events" : lang === "sk" ? "Firemné eventy" : "Firemní eventy" },
      { href: "/tetovacky-na-veletrh", label: lang === "en" ? "Trade fairs" : lang === "sk" ? "Veľtrhy a konferencie" : "Veletrhy a konference" },
      { href: "/produkty#svatby", label: lang === "en" ? "Weddings & celebrations" : lang === "sk" ? "Svadby a oslavy" : "Svatby a oslavy" },
      { href: "/tetovacky-na-festival", label: lang === "en" ? "Festivals & events" : lang === "sk" ? "Festivaly a akcie" : "Festivaly a akce" },
      { href: "/tetovacky-pro-skoly", label: lang === "en" ? "Schools & children" : lang === "sk" ? "Školy a deti" : "Školy a děti" },
      { href: "/produkty#obchody", label: lang === "en" ? "Wholesale" : lang === "sk" ? "Veľkoobchod" : "Velkoobchod" },
    ],
  };

  return (
    <footer className="bg-brand-secondary text-white">
      {/* Instagram strip */}
      <a
        href="https://www.instagram.com/partyskin.cz/"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
        aria-label="Instagram @partyskin.cz"
      >
        <div className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 transition-colors">
          <Instagram size={16} className="text-brand-primary" />
          <span className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors tracking-wide">
            {lang === "en" ? "Follow us on Instagram" : lang === "sk" ? "Sledujte nás na Instagrame" : "Sledujte nás na Instagramu"} @partyskin.cz
          </span>
        </div>
        <div className="flex overflow-hidden">
          {igPhotos.map((src, i) => (
            <div key={i} className="relative flex-1 min-w-0 aspect-square overflow-hidden">
              <Image
                src={src}
                alt="Ukázka realizace PartySkin, tetovačky a přebaly na míru"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="12.5vw"
              />
            </div>
          ))}
        </div>
      </a>

      <div className="container-pad py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo-partyskin-white.png"
                alt="PartySkin"
                width={391}
                height={238}
                className="h-12 w-auto"
              />
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/80">B2B</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              {lang === "en"
                ? "Reliable partner for custom production of temporary tattoos, stickers and postcards. From a few pieces to large campaigns. Fast communication, personal approach and tailored solutions."
                : lang === "sk"
                ? "Spoľahlivý partner pre zákazkovú výrobu dočasných tetovačiek, samolepiek a pohľadníc. Od niekoľkých kusov až po veľké kampane. Rýchla komunikácia, osobný prístup a riešenia na mieru."
                : "Spolehlivý partner pro zakázkovou výrobu dočasných tetovaček, samolepek a pohlednic. Od několika kusů až po velké kampaně. Rychlá komunikace, osobní přístup a řešení na míru každému projektu."}
            </p>
            <div className="space-y-3">
              <a href="mailto:objednavky@partyskin.cz" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <Mail size={16} className="text-brand-primary flex-shrink-0" />
                objednavky@partyskin.cz
              </a>
              <a href="tel:+420724874274" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <Phone size={16} className="text-brand-primary flex-shrink-0" />
                +420 724 874 274
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin size={16} className="text-brand-primary flex-shrink-0" />
                {lang === "en" ? "Prague & Třeboň, Czech Republic" : lang === "sk" ? "Praha a Třeboň, Česká republika" : "Praha a Třeboň, Česká republika"}
              </div>
              <a
                href={lang === "sk" ? "https://www.partyskin.sk" : "https://www.partyskin.cz"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-white transition-colors mt-1"
              >
                →&nbsp;{lang === "en"
                  ? "Looking for ready-made designs? Visit our e-shop"
                  : lang === "sk"
                  ? "Hľadáte hotové motívy? Navštívte náš e-shop"
                  : "Hledáte hotové motivy? Navštivte náš e-shop"}
              </a>

              {/* Social links */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.instagram.com/partyskin.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
                >
                  <Instagram size={13} className="text-brand-primary" />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/partyskincz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
                >
                  <Facebook size={13} className="text-brand-primary" />
                  Facebook
                </a>
                <a
                  href={lang === "sk" ? "https://www.partyskin.sk" : "https://www.partyskin.cz"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
                >
                  <span className="text-brand-primary font-bold text-xs">●</span>
                  {lang === "sk" ? "partyskin.sk" : "partyskin.cz"}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {lang === "en" ? "Products" : lang === "sk" ? "Produkty" : "Produkty"}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.produkty.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {lang === "en" ? "Services" : lang === "sk" ? "Služby" : "Služby"}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.sluzby.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {lang === "en" ? "Who we serve" : lang === "sk" ? "Pre koho" : "Pro koho"}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.segmenty.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pad py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} PartySkin s.r.o.{" "}
            {lang === "en" ? "All rights reserved." : lang === "sk" ? "Všetky práva vyhradené." : "Všechna práva vyhrazena."}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/partyskin.cz/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-brand-primary transition-all" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/partyskincz/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-brand-primary transition-all" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.linkedin.com/company/partyskin" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-brand-primary transition-all" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/ochrana-osobnich-udaju" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              {lang === "en" ? "Privacy policy" : lang === "sk" ? "Ochrana osobných údajov" : "Ochrana osobních údajů"}
            </Link>
            <Link href="/obchodni-podminky" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              {lang === "en" ? "Terms & conditions" : lang === "sk" ? "Obchodné podmienky" : "Obchodní podmínky"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
