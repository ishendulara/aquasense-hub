import { User, Camera, Brain, Droplets, LineChart, CalendarCheck, Package, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  { icon: User, title: "User", desc: "Farmer or operator initiates the workflow." },
  { icon: Camera, title: "Image Capture", desc: "Tank-side camera captures seaweed sample." },
  { icon: Brain, title: "AI Identification", desc: "Species & health classification with CNN." },
  { icon: Droplets, title: "Environment Check", desc: "IoT sensors validate water & weight conditions." },
  { icon: LineChart, title: "Growth Monitoring", desc: "Continuous tracking with trend analytics." },
  { icon: CalendarCheck, title: "Harvest Prediction", desc: "AI estimates the optimal harvest date." },
  { icon: Package, title: "Packaging & Delivery", desc: "QR-tagged packaging and delivery summary." },
];

export function SystemOverview() {
  return (
    <section id="system" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Pipeline</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              System <span className="text-gradient">Overview</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              An end-to-end flow connecting cultivation, AI, and post-harvest into one intelligent platform.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 glass-strong rounded-3xl p-6 md:p-10 shadow-elegant">
            <div className="flex flex-wrap items-stretch justify-center gap-3 md:gap-4">
              {steps.map((s, i) => (
                <div key={s.title} className="flex items-stretch gap-3 md:gap-4">
                  <div className="group relative w-44 md:w-52">
                    <div className="glass relative h-full overflow-hidden rounded-2xl p-5 text-center transition-smooth hover:-translate-y-1.5 hover:shadow-glow">
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-smooth group-hover:opacity-15" />
                      <div className="relative">
                        <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow transition-smooth group-hover:scale-110 animate-pulse-glow">
                          <s.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="mt-3 text-[10px] font-mono text-primary">STEP {String(i + 1).padStart(2, "0")}</div>
                        <h3 className="mt-1 text-sm font-semibold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {s.title}
                        </h3>
                        <p className="mt-2 text-xs leading-snug text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden self-center text-primary md:block">
                      <ArrowRight className="h-5 w-5 animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}