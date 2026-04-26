import {
  ScanSearch,
  HeartPulse,
  Apple,
  Coins,
  Cpu,
  Droplets,
  Gauge,
  LayoutDashboard,
  Activity,
  TrendingUp,
  CalendarCheck,
  BarChart3,
  QrCode,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  ChefHat,
  Pill,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

type Feature = { icon: LucideIcon; label: string };
type Module = {
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  features: Feature[];
  accent: "primary" | "secondary";
};

const modules: Module[] = [
  {
    tag: "Module 01",
    title: "AI Seaweed Identification",
    subtitle: "Computer vision for species & health",
    desc: "Detects Gracilaria edulis and Kappaphycus alvarezii, classifies plant health, and surfaces nutritional and economic insights.",
    features: [
      { icon: ScanSearch, label: "Species detection (Gracilaria · Kappaphycus)" },
      { icon: HeartPulse, label: "Health classification (Healthy / Unhealthy)" },
      { icon: Apple, label: "Nutritional value insights" },
      { icon: Coins, label: "Economic importance summary" },
    ],
    accent: "primary",
  },
  {
    tag: "Module 02",
    title: "Smart Tank-Based Cultivation",
    subtitle: "IoT-controlled growing environment",
    desc: "Sensor-driven tank farming that maintains optimal water and load conditions and streams live telemetry to a dashboard.",
    features: [
      { icon: Cpu, label: "IoT sensors (weight, water quality)" },
      { icon: Droplets, label: "Tank-based controlled environment" },
      { icon: Gauge, label: "Real-time parameter regulation" },
      { icon: LayoutDashboard, label: "Live dashboard visualization" },
    ],
    accent: "secondary",
  },
  {
    tag: "Module 03",
    title: "Growth Monitoring & Harvest Prediction",
    subtitle: "Forecasting the optimal harvest moment",
    desc: "Continuously tracks biomass growth and uses AI regression to estimate the best harvest date with rich chart visualizations.",
    features: [
      { icon: Activity, label: "Continuous growth monitoring" },
      { icon: TrendingUp, label: "AI-based growth prediction" },
      { icon: CalendarCheck, label: "Harvest date estimation" },
      { icon: BarChart3, label: "Graph & chart visualization" },
    ],
    accent: "primary",
  },
  {
    tag: "Module 04",
    title: "Post-Harvest Management System",
    subtitle: "From package to plate, traceable",
    desc: "Closes the loop with QR-tracked packaging, admin approval, delivery summaries, and AI suggestions for food, recipes, and medicine.",
    features: [
      { icon: QrCode, label: "QR code generation" },
      { icon: ShieldCheck, label: "Admin approval workflow" },
      { icon: ClipboardCheck, label: "Packaging checklist" },
      { icon: Truck, label: "Delivery summary" },
      { icon: ChefHat, label: "AI food & recipe suggestions" },
      { icon: Pill, label: "AI medicine preparation" },
    ],
    accent: "secondary",
  },
];

export function Modules() {
  return (
    <section id="modules" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Four Components</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Core <span className="text-gradient">Modules</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Four integrated systems that take seaweed from cultivation tank to consumer.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={i * 100}>
              <div className="group glass relative h-full overflow-hidden rounded-3xl p-7 transition-smooth hover:-translate-y-2 hover:shadow-glow">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-smooth group-hover:opacity-25" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary">{m.tag}</span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                        m.accent === "primary"
                          ? "bg-primary/15 text-primary"
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {m.accent === "primary" ? "AI" : "IoT"}
                    </span>
                  </div>

                  <h3
                    className="mt-4 text-2xl font-bold text-foreground md:text-3xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {m.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">{m.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>

                  <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {m.features.map((f) => (
                      <li
                        key={f.label}
                        className="flex items-start gap-2.5 rounded-xl glass px-3 py-2.5 transition-smooth hover:bg-white/5"
                      >
                        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-primary shadow-glow">
                          <f.icon className="h-3.5 w-3.5 text-primary-foreground" />
                        </span>
                        <span className="text-xs leading-snug text-foreground">{f.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}