"use client";

import { motion } from "framer-motion";

/**
 * Jemné plovoucí hvězdičky do pozadí sekcí.
 * Pozice jsou pevně dané, aby se server a klient shodly (žádný Math.random).
 * Rodičovská sekce musí mít `relative` a `overflow-hidden`.
 */

type Star = {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  drift: number;
};

const STARS: Star[] = [
  { left: "6%", top: "18%", size: 16, delay: 0.0, duration: 7.5, drift: -14 },
  { left: "14%", top: "72%", size: 10, delay: 1.4, duration: 9.0, drift: 12 },
  { left: "23%", top: "34%", size: 22, delay: 0.7, duration: 8.2, drift: -18 },
  { left: "31%", top: "86%", size: 12, delay: 2.1, duration: 10.4, drift: 15 },
  { left: "42%", top: "12%", size: 14, delay: 1.0, duration: 7.8, drift: -12 },
  { left: "49%", top: "58%", size: 9, delay: 2.6, duration: 9.6, drift: 16 },
  { left: "58%", top: "26%", size: 18, delay: 0.4, duration: 8.8, drift: -16 },
  { left: "67%", top: "78%", size: 11, delay: 1.8, duration: 10.0, drift: 13 },
  { left: "76%", top: "40%", size: 15, delay: 0.9, duration: 7.2, drift: -15 },
  { left: "84%", top: "16%", size: 10, delay: 2.3, duration: 9.4, drift: 14 },
  { left: "91%", top: "66%", size: 20, delay: 1.2, duration: 8.6, drift: -13 },
  { left: "97%", top: "32%", size: 12, delay: 3.0, duration: 10.8, drift: 11 },
];

const TONES = {
  light: { fill: "#8C4D52", min: 0.14, max: 0.42 },
  dark: { fill: "#FFFFFF", min: 0.12, max: 0.42 },
  warm: { fill: "#FFFFFF", min: 0.16, max: 0.5 },
} as const;

export default function FloatingStars({
  variant = "light",
  density = 1,
  className = "",
}: {
  variant?: keyof typeof TONES;
  density?: number;
  className?: string;
}) {
  const tone = TONES[variant];
  const stars = density >= 1 ? STARS : STARS.filter((_, i) => i % Math.round(1 / density) === 0);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {stars.map((s, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          width={s.size}
          height={s.size}
          className="absolute"
          style={{ left: s.left, top: s.top, color: tone.fill }}
          initial={{ opacity: tone.min, y: 0, rotate: 0, scale: 0.9 }}
          animate={{
            opacity: [tone.min, tone.max, tone.min],
            y: [0, s.drift, 0],
            rotate: [0, 45, 0],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M12 0c.5 6.2 5.3 11 11.5 11.5C17.3 12 12.5 16.8 12 23c-.5-6.2-5.3-11-11.5-11.5C6.7 11 11.5 6.2 12 0z"
            fill="currentColor"
          />
        </motion.svg>
      ))}
    </div>
  );
}
