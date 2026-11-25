import { useMemo } from "react";
import type { Theme } from "../data/themes";

interface DecorProps {
  theme: Theme;
  seed: string;
}

// Deterministic pseudo-random generator so the decoration is stable
// for a given date (seed) rather than jumping around on every render.
function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return h;
}

const EMOJI_MAP: Record<Theme["pattern"], string[]> = {
  diyas: ["🪔", "✨"],
  colorSplash: ["🎨", "💥"],
  tricolor: ["🇮🇳", "⭐"],
  snow: ["❄️", "✨"],
  crescent: ["🌙", "⭐"],
  pookalam: ["🌼", "🌸"],
  modak: ["🐘", "🌺"],
  garba: ["🪘", "💃"],
  thread: ["🧵", "💛"],
  peacock: ["🦚", "🪈"],
  khanda: ["☬", "⭐"],
  trishul: ["🔱", "❄️"],
  bud: ["🌸", "🌿"],
  spark: ["✨", "💫"],
  orbit: ["✨", "🌌"],
  sagejayanti: ["🕯️", "📿"],
  party: ["🎉", "🎈", "🎂", "🎊", "⭐"],
};

export default function Decor({ theme, seed }: DecorProps) {
  const particles = useMemo(() => {
    const rand = mulberry32(hashSeed(seed + theme.pattern));
    const emojis = EMOJI_MAP[theme.pattern];
    const count = 22;
    return Array.from({ length: count }).map((_, i) => {
      const left = rand() * 100;
      const delay = rand() * 10;
      const duration = 10 + rand() * 14;
      const size = 14 + rand() * 22;
      const emoji = emojis[Math.floor(rand() * emojis.length)];
      const drift = (rand() - 0.5) * 120;
      return { id: i, left, delay, duration, size, emoji, drift };
    });
  }, [seed, theme.pattern]);

  return (
    <div className="decor" aria-hidden="true">
      <div className="decor-glow" style={{ background: `radial-gradient(circle at 50% 20%, ${theme.glow}33, transparent 60%)` }} />
      {particles.map((p) => (
        <span
          key={p.id}
          className="decor-particle"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            // @ts-expect-error custom property
            "--drift": `${p.drift}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}
      <div className="decor-rangoli" style={{ borderColor: `${theme.accent}55` }}>
        <div className="decor-rangoli-inner" style={{ borderColor: `${theme.accent2}55` }} />
      </div>
    </div>
  );
}
