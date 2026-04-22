export function Particles() {
  const particles = Array.from({ length: 25 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((i) => {
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 10;
        return (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${left}%`,
              bottom: 0,
              width: `${size}px`,
              height: `${size}px`,
              background: `oklch(0.85 0.15 195 / ${Math.random() * 0.5 + 0.2})`,
              boxShadow: `0 0 ${size * 2}px oklch(0.78 0.16 195 / 0.6)`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}