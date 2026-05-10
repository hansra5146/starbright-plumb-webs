import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Flame, Wrench, ShowerHead, Gauge, Hammer, Phone, Check } from "lucide-react";
import waterHeater from "@/assets/water-heater.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Star Plumbing & Water Heater" },
      { name: "description", content: "Full-service plumbing: water heaters, drain cleaning, leak repair, re-pipes, fixtures and emergency service in the Bay Area." },
      { property: "og:title", content: "Plumbing Services — Star Plumbing" },
      { property: "og:description", content: "Water heaters, drain cleaning, leak repair and 24/7 emergency plumbing." },
    ],
  }),
  component: Services,
});

const all = [
  { icon: Flame, title: "Water Heater Repair & Install", points: ["Tank & tankless", "Same-day replacement", "Gas & electric"] },
  { icon: Droplets, title: "Leak Detection & Repair", points: ["Slab & wall leaks", "Pinhole pipe leaks", "Fixture drips"] },
  { icon: Wrench, title: "Drain Cleaning", points: ["Snaking & augering", "Hydro-jetting", "Camera inspection"] },
  { icon: ShowerHead, title: "Fixture Installation", points: ["Faucets & sinks", "Toilets & bidets", "Showers & tubs"] },
  { icon: Gauge, title: "Re-Piping & Repressurization", points: ["Copper & PEX", "Whole-home re-pipes", "Pressure regulators"] },
  { icon: Hammer, title: "Emergency Service", points: ["24/7 dispatch", "Burst pipes", "Sewer back-ups"] },
];

function Services() {
  return (
    <>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Services</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold max-w-3xl">Done right. Cleaned up. Guaranteed.</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            From a dripping faucet to a full water-heater swap, here's what we tackle every day for Bay Area homeowners.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {all.map((s) => (
            <article key={s.title} className="p-8 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-elegant transition-all">
              <div className="w-12 h-12 rounded-xl bg-copper grid place-items-center mb-6 shadow-copper">
                <s.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h2 className="font-display text-2xl font-semibold mb-4">{s.title}</h2>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-secondary/40 rounded-3xl overflow-hidden border border-border">
          <img src={waterHeater} alt="Modern tankless water heater install" loading="lazy" width={1200} height={900}
            className="w-full h-full object-cover aspect-[4/3]" />
          <div className="p-10 md:p-14">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">Specialty</div>
            <h2 className="font-display text-4xl font-semibold mb-4">Water heaters are our craft.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tankless conversions, 50-gallon swaps, recirculation pumps — we stock the most common units and can usually have hot water back the same day.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-copper text-accent-foreground px-5 py-3 rounded-full font-semibold shadow-copper">
              <Phone className="w-4 h-4" /> Get a free quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
