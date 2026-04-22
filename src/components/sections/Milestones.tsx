import { CheckCircle2, Circle, Flag } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const milestones = [
  { title: "Project Proposal", date: "Q1", desc: "Defined scope, objectives, and methodology for AI-driven seaweed analysis.", status: "done" },
  { title: "Progress Presentation 1", date: "Q2", desc: "Dataset collection, preprocessing pipeline, and baseline CNN training results.", status: "done" },
  { title: "Progress Presentation 2", date: "Q3", desc: "EfficientNet fine-tuning, FastAPI integration, and initial web dashboard.", status: "active" },
  { title: "Final Assessment", date: "Q4", desc: "Full deployment, evaluation report, and panel demonstration.", status: "upcoming" },
];

export function Milestones() {
  return (
    <section id="milestones" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Roadmap</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Project <span className="text-gradient">Milestones</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              const Icon = m.status === "done" ? CheckCircle2 : m.status === "active" ? Flag : Circle;
              return (
                <Reveal key={m.title} delay={i * 100}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="hidden flex-1 md:block" />

                    {/* node */}
                    <div className="absolute left-6 top-3 -translate-x-1/2 md:left-1/2">
                      <div className={`grid h-12 w-12 place-items-center rounded-full ${
                        m.status === "active" ? "bg-gradient-primary shadow-glow animate-pulse-glow" : "glass-strong"
                      }`}>
                        <Icon className={`h-5 w-5 ${m.status === "done" || m.status === "active" ? "text-primary-foreground" : "text-muted-foreground"}`} />
                      </div>
                    </div>

                    <div className={`flex-1 pl-16 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="glass rounded-2xl p-6 transition-smooth hover:shadow-glow">
                        <div className={`flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                          <span className="text-xs font-bold uppercase tracking-wider text-primary">{m.date}</span>
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${
                            m.status === "done" ? "bg-secondary/20 text-secondary" :
                            m.status === "active" ? "bg-primary/20 text-primary" :
                            "bg-muted text-muted-foreground"
                          }`}>{m.status}</span>
                        </div>
                        <h3 className="mt-2 text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {m.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}