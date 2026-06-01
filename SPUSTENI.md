# PartySkin B2B — Instrukce pro spuštění

## Požadavky
- Node.js 18+ (nainstaluj přes https://nodejs.org nebo https://volta.sh)
- npm / yarn / pnpm

## Spuštění projektu

```bash
# 1. Přejdi do složky projektu
cd ~/Desktop/partyskin-b2b

# 2. Nainstaluj závislosti
npm install

# 3. Spusť vývojový server
npm run dev
```

Web poté bude dostupný na: **http://localhost:3000**

## Build pro produkci

```bash
npm run build
npm run start
```

## Struktura projektu

```
partyskin-b2b/
├── app/
│   ├── layout.tsx          # Root layout, navigace, metadata, SEO
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Globální styly, Tailwind, Google Fonts
│   ├── produkty/
│   │   └── page.tsx        # Stránka Produkty & nabídka
│   ├── jak-to-funguje/
│   │   └── page.tsx        # Proces + FAQ
│   ├── reference/
│   │   └── page.tsx        # Galerie realizací + testimonials
│   └── kontakt/
│       └── page.tsx        # Poptávkový formulář
├── components/
│   ├── Navigation.tsx      # Sticky navigace (průhledná → bílá při scrollu)
│   └── Footer.tsx          # Footer s kontakty a linky
├── tailwind.config.ts      # Tailwind + brandové barvy PartySkin
├── next.config.ts          # Next.js konfigurace (Unsplash images)
└── package.json
```

## Brandové barvy (PartySkin)

| Proměnná | Hex | Použití |
|---|---|---|
| `brand-primary` | `#E8175D` | Hlavní akcentová barva (CTAs, linky, ikony) |
| `brand-secondary` | `#1A1A2E` | Tmavý text, hero pozadí |
| `brand-accent` | `#FF6B6B` | Sekundární akcent, gradienty |
| `brand-light` | `#FFF0F5` | Světlé pozadí, hover stavy |
| `brand-gold` | `#FFB347` | Hvězdičky, highlights |

> **Poznámka:** Barvy byly zvoleny na základě typického brandingu PartySkin.
> Po přístupu na partyskin.cz ověřte přesné hex kódy a případně aktualizujte
> `tailwind.config.ts` a `globals.css`.

## Co napojit pro produkci

1. **Email formulář:** Integrujte Resend, Nodemailer nebo Formspree do `/app/api/contact/route.ts`
2. **Analytika:** Přidejte Google Analytics 4 nebo Plausible do `layout.tsx`
3. **CMS:** Pro správu obsahu zvažte Sanity.io nebo Contentful
4. **Obrázky:** Nahraďte Unsplash placeholder obrázky reálnými fotografiemi z partyskin.cz
5. **Domain:** Nasaďte na Vercel (`vercel deploy`) a nastavte doménu b2b.partyskin.cz
