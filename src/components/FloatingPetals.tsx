import { useMemo } from "react";

export function FloatingPetals({ count = 14 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 12,
        size: 8 + Math.random() * 14,
        opacity: 0.3 + Math.random() * 0.4,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-40px] rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background:
              "radial-gradient(circle at 30% 30%, var(--blush), color-mix(in oklab, var(--gold) 70%, transparent))",
            opacity: p.opacity,
            animation: `float-petal ${p.duration}s linear ${p.delay}s infinite`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}
