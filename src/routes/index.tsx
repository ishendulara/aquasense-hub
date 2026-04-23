import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SystemOverview } from "@/components/sections/SystemOverview";
import { Modules } from "@/components/sections/Modules";
import { Domain } from "@/components/sections/Domain";
import { Milestones } from "@/components/sections/Milestones";
import { Documents } from "@/components/sections/Documents";
import { Presentations } from "@/components/sections/Presentations";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <SystemOverview />
      <Modules />
      <Domain />
      <Milestones />
      <Documents />
      <Presentations />
      <About />
      <Contact />
    </main>
  );
}
