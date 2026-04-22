import { useState } from "react";
import { Mail, Phone, MapPin, Send, Waves } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in Touch</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Contact <span className="text-gradient">Us</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass h-full rounded-2xl p-8">
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Reach the team
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Questions about the research, dataset, or collaboration? We'd love to hear from you.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "research.seaweed@university.edu" },
                  { icon: Phone, label: "Phone", value: "+94 11 234 5678" },
                  { icon: MapPin, label: "Location", value: "Faculty of Computing, University" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary">{item.label}</div>
                      <div className="mt-0.5 text-sm text-foreground">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
              className="glass rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Researcher"
                    className="mt-2 w-full rounded-xl bg-input/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none ring-1 ring-border transition-smooth focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="jane@example.com"
                    className="mt-2 w-full rounded-xl bg-input/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none ring-1 ring-border transition-smooth focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell us about your interest..."
                  className="mt-2 w-full resize-none rounded-xl bg-input/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none ring-1 ring-border transition-smooth focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-bounce hover:scale-105"
              >
                {sent ? "Message sent ✓" : <>Send Message <Send className="h-4 w-4" /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-border/50 pt-10">
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary shadow-glow">
                <Waves className="h-5 w-5 text-primary-foreground" />
              </span>
              <div>
                <div className="text-sm font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Smart Seaweed Identification System
                </div>
                <div className="text-xs text-muted-foreground">Faculty of Computing · University Research Project</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Seaweed Research Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}