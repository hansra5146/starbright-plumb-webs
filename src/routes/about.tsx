import { createFileRoute } from "@tanstack/react-router";
import { Star, Heart, ShieldCheck, HandCoins } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Star Plumbing & Water Heater" },
      { name: "description", content: "Family-run Bay Area plumbing company built on honest pricing, clean work, and respect for your home." },
      { property: "og:title", content: "About Star Plumbing" },
      { property: "og:description", content: "A family-run plumbing company built on honesty and craft." },
    ],
  }),
  component: About,
});

const values = [
  { icon: HandCoins, title: "Honest pricing", desc: "Flat quotes before we start. No upsells, no surprises." },
  { icon: ShieldCheck, title: "Licensed & insured", desc: "Fully licensed, bonded, and insured for your peace of mind." },
  { icon: Heart, title: "Respect for your home", desc: "Shoe covers, drop cloths, and a tidy clean-up — every time." },
  { icon: Star, title: "5.0 ★ rated", desc: "Every review on Google is five stars. We work to keep it that way." },
];

function About() {
  return (
    <>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">About</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold max-w-3xl">A family-run shop built on craft and trust.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/90">
            Star Plumbing & Water Heater started with a simple idea: treat every home like it's your mother's. Show up on time. Explain the problem in plain English. Quote a fair price. Do the work right.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We're a small, family-run team serving the Bay Area around the clock. Whether it's a midnight burst pipe or a planned tankless water heater install, the same hands that answer your call are the hands that do the work. That's how we earned a perfect 5-star rating — and how we plan to keep it.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We specialize in water heaters but handle the full range of residential plumbing: leak detection, drain cleaning, fixture installs, re-pipes, and emergency service. If it carries water, we can fix it.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-center mb-14">What we stand for</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-card border border-border">
                <div className="w-11 h-11 rounded-xl bg-copper grid place-items-center mb-5 shadow-copper">
                  <v.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
