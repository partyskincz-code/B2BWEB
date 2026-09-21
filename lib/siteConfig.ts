export const BUSINESS = {
  responseHours: 24,
  artworkHours: 24,
  productionDays: { min: 5, max: 20 },
  pricesCzk: { tattoos: 8, stickers: 3, print: 8 },
  contactEmail: "objednavky@partyskin.cz",
  contactPhone: "+420724874274",
} as const;

export const productionRange = {
  cs: `${BUSINESS.productionDays.min} až ${BUSINESS.productionDays.max} pracovních dní`,
  sk: `${BUSINESS.productionDays.min} až ${BUSINESS.productionDays.max} pracovných dní`,
  en: `${BUSINESS.productionDays.min} to ${BUSINESS.productionDays.max} business days`,
} as const;
