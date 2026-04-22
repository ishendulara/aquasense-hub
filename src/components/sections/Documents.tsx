import { FileText, Download, Eye } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const docs = [
  { title: "Project Proposal", type: "PDF · 2.4 MB", desc: "Initial proposal outlining objectives, scope, and methodology." },
  { title: "Research Papers", type: "PDF · 5 papers", desc: "Curated references on seaweed CV, EfficientNet & marine ML." },
  { title: "Final Report", type: "PDF · 8.1 MB", desc: "Complete documentation of the implemented system and evaluation." },
  { title: "Status Documents", type: "PDF · Multiple", desc: "Progress reports submitted at each evaluation milestone." },
];

export function Documents() {
  return (
    <section id="documents" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Library</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Project <span className="text-gradient">Documents</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {docs.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <div className="group glass flex h-full flex-col rounded-2xl p-6 transition-smooth hover:-translate-y-2 hover:shadow-glow">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary shadow-glow transition-smooth group-hover:rotate-6">
                  <FileText className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {d.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-primary">{d.type}</p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{d.desc}</p>
                <div className="mt-5 flex gap-2">
                  <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-smooth hover:scale-105">
                    <Eye className="h-3.5 w-3.5" /> View
                  </button>
                  <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg glass px-3 py-2 text-xs font-semibold text-foreground transition-smooth hover:bg-white/10">
                    <Download className="h-3.5 w-3.5" /> Download
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}