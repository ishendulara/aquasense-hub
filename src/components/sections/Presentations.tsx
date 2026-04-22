import { Presentation, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const slides = [
  { title: "Proposal Presentation", tag: "Phase 1", color: "from-[oklch(0.78_0.16_195)] to-[oklch(0.55_0.18_165)]" },
  { title: "Progress Presentation 1", tag: "Phase 2", color: "from-[oklch(0.7_0.18_175)] to-[oklch(0.5_0.16_215)]" },
  { title: "Progress Presentation 2", tag: "Phase 3", color: "from-[oklch(0.65_0.18_165)] to-[oklch(0.45_0.18_240)]" },
  { title: "Final Presentation", tag: "Phase 4", color: "from-[oklch(0.72_0.2_15)] to-[oklch(0.55_0.18_165)]" },
];

export function Presentations() {
  return (
    <section id="presentations" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Showcase</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="text-gradient">Presentations</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {slides.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group relative h-64 overflow-hidden rounded-2xl glass transition-smooth hover:-translate-y-2 hover:shadow-glow">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-30 transition-smooth group-hover:opacity-50`} />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl glass-strong">
                      <Presentation className="h-5 w-5 text-primary" />
                    </div>
                    <span className="rounded-full glass px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                      {s.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {s.title}
                    </h3>
                    <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-smooth hover:gap-2.5">
                      Open slides <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}