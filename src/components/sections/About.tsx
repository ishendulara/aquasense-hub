import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const team = [
  { name: "Team Member 1", id: "IT00000001", role: "AI Model Developer", desc: "Seaweed identification & health classification with EfficientNet.", initials: "M1" },
  { name: "Team Member 2", id: "IT00000002", role: "Backend Developer", desc: "FastAPI services, model serving, and database integration.", initials: "M2" },
  { name: "Team Member 3", id: "IT00000003", role: "Frontend Developer", desc: "React dashboard, visualization, and user experience.", initials: "M3" },
  { name: "Team Member 4", id: "IT00000004", role: "Research Analyst", desc: "Literature review, dataset curation, and evaluation.", initials: "M4" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Team</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              About <span className="text-gradient">Us</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Four researchers building the future of marine cultivation with AI.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={i * 100}>
              <div className="group glass relative overflow-hidden rounded-2xl p-6 text-center transition-smooth hover:-translate-y-2 hover:shadow-glow">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-primary opacity-30 transition-smooth group-hover:opacity-50" />
                <div className="relative">
                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-primary shadow-glow ring-4 ring-background transition-smooth group-hover:scale-110">
                    <span className="text-2xl font-bold text-primary-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {m.initials}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {m.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-mono text-muted-foreground">{m.id}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">{m.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{m.desc}</p>
                  <div className="mt-5 flex justify-center gap-2">
                    {[Linkedin, Github, Mail].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground transition-smooth hover:text-primary hover:bg-primary/10 hover:scale-110"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
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