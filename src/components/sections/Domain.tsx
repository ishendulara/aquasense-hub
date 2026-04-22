import { BookOpen, Target, AlertCircle, Compass, Workflow, Cpu } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const cards = [
  {
    icon: BookOpen,
    title: "Literature Survey",
    body: "Comprehensive review of computer-vision approaches in aquaculture, with focus on red-algae species and disease detection.",
  },
  {
    icon: AlertCircle,
    title: "Research Gap",
    body: "Existing systems lack species-specific recognition for Gracilaria & Kappaphycus and overlook real-time health assessment.",
  },
  {
    icon: Target,
    title: "Research Problem",
    body: "Manual seaweed inspection is slow, subjective, and unable to scale across distributed cultivation farms.",
  },
  {
    icon: Compass,
    title: "Research Objectives",
    body: "Build an automated pipeline for species identification, health classification, and harvest decision support.",
  },
  {
    icon: Workflow,
    title: "Methodology",
    body: "Image acquisition → preprocessing (OpenCV) → CNN/EfficientNet model → FastAPI service → web dashboard.",
  },
  {
    icon: Cpu,
    title: "Technologies Used",
    body: "TensorFlow · EfficientNet · CNN · OpenCV · FastAPI · Python · React · TypeScript",
  },
];

export function Domain() {
  return (
    <section id="domain" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Domain</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Project <span className="text-gradient">Foundations</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From the research problem to the toolkit powering the solution.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-7 transition-smooth hover:-translate-y-2 hover:shadow-glow">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-smooth group-hover:opacity-10" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow transition-smooth group-hover:scale-110">
                    <c.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}