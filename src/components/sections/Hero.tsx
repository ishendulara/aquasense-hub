import { ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";
import { Counter } from "@/components/Counter";
import { Particles } from "@/components/Particles";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with parallax-style scale */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Underwater seaweed scene"
          width={1920}
          height={1080}
          className="h-full w-full object-cover scale-110 animate-wave"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.06_240/0.7)] via-[oklch(0.16_0.06_230/0.6)] to-[oklch(0.14_0.06_240/0.95)]" />
      </div>

      <Particles />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium tracking-wide text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          AI-Powered Marine Research
        </div>

        <h1
          className="animate-fade-up mt-6 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif", animationDelay: "0.1s" }}
        >
          <span className="text-gradient">Smart Seaweed</span>
          <br />
          <span className="text-foreground">Identification System</span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          A deep-learning platform for cultivation and harvest management — detecting{" "}
          <span className="text-primary font-semibold">Gracilaria</span> &{" "}
          <span className="text-secondary font-semibold">Kappaphycus</span> species and
          classifying their health in real time.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "0.3s" }}>
          <a
            href="#domain"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-bounce hover:scale-105"
          >
            Explore Project
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#documents"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-smooth hover:bg-white/10"
          >
            View Documents
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up mt-20 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3" style={{ animationDelay: "0.4s" }}>
          {[
            { value: 90, suffix: "%", label: "Model Accuracy" },
            { value: 2, suffix: "", label: "Species Detected" },
            { value: 3, suffix: "", label: "Health Classes" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 transition-smooth hover:scale-105 hover:shadow-glow">
              <div className="text-4xl font-bold text-gradient" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary/70" />
      </div>
    </section>
  );
}