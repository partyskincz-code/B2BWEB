/**
 * Facelift 2026: plovoucí hvězdičky byly součástí původního, hodně obecného
 * vzhledu. Komponenta zůstává, aby se nemusely měnit importy na osmi místech,
 * ale záměrně nevykresluje nic.
 */
export default function FloatingStars(_props: {
  variant?: "light" | "warm" | "dark";
  density?: number;
  className?: string;
}) {
  return null;
}
