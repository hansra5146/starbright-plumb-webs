import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, Clock, ShieldCheck, Wrench, Droplets, Flame, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-plumber.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Star Plumbing & Water Heater — 5★ Bay Area Plumber" },
      { name: "description", content: "Trusted Bay Area plumbing & water heater repair. Same-day service, honest pricing, 5.0 stars on Google. Call (510) 833-8801." },
      { property: "og:title", content: "Star Plumbing & Water Heater" },
      { property: "og:description", content: "Same-day plumbing & water heater service. Open 24 hours." },
    ],
  }),
  component: Home,
});

const reviews = [
  {
    name: "Sohrab Sayedi",
    text: "Star Plumbing did an amazing job from start to finish. They responded quickly, arrived on time, and fixed my issue the same day. Honest pricing and professional service.",
  },
  {
    name: "Arif Mujaddady",
    text: "Scheduling was easy, they showed up on time, and the plumber was professional and respectful. No upselling, no pressure—just straightforward service at a fair price.",
  },
  {
    name: "Laila Karim",
    text: "Ahmad was quick to respond, efficient and very helpful. He diagnosed the water heater problem and guided us with patience & honesty. Highly recommend.",
  },
];

const services = [
  { icon: Droplets, title: "Plumbing Repairs", desc: "Leaks, clogs, fixtures, re-pipes — done right the first time." },
  { icon: Flame, title: "Water Heaters", desc: "Tank & tankless installs, repairs, and same-day replacements." },
  { icon: Wrench, title: "Drain & Sewer", desc: "Hydro-jetting, camera inspection, and trenchless repairs." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img src={hero} alt="" className="w-full h-full object-cover" width={1600} height={1200} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-xs font-medium uppercase tracking-wider mb-6">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              5.0 on Google · Open 24 Hours
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
              Plumbing you can <span className="text-accent italic">actually</span> trust.
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
              From leaky faucets to full water heater replacements, Star Plumbing delivers honest pricing, clean work, and same-day service across the Bay Area.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+15108338801" className="inline-flex items-center gap-2 bg-copper text-accent-foreground px-6 py-3.5 rounded-full font-semibold shadow-copper hover:scale-[1.03] transition-transform">
                <Phone className="w-4 h-4" /> (510) 833-8801
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold border border-primary-foreground/25 hover:bg-primary-foreground/10 transition-colors">
                View services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -inset-6 bg-copper rounded-3xl opacity-20 blur-2xl" />
            <img src={hero} alt="Star Plumbing technician at work" width={1600} height={1200}
              className="relative rounded-3xl shadow-elegant aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Star, label: "5.0 ★ Google" },
            { icon: Clock, label: "Open 24 hours" },
            { icon: ShieldCheck, label: "Licensed & insured" },
            { icon: Wrench, label: "Same-day service" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <b.icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">What we do</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold max-w-xl">Every pipe, every fixture, every emergency.</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-foreground hover:text-accent inline-flex items-center gap-1">
            All services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-elegant transition-all">
              <div className="w-12 h-12 rounded-xl bg-copper grid place-items-center mb-6 shadow-copper">
                <s.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">Reviews</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">A perfect 5.0 from real neighbors.</h2>
            <div className="flex items-center justify-center gap-1">
              {[0,1,2,3,4].map((i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.name} className="p-8 bg-card border border-border rounded-2xl flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[0,1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <blockquote className="text-foreground/90 leading-relaxed flex-1">"{r.text}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border text-sm font-semibold">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-12 md:p-16 text-primary-foreground shadow-elegant">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-copper opacity-20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">Need a plumber today?</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">We answer the phone 24/7. Get an honest quote in minutes.</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+15108338801" className="inline-flex items-center gap-2 bg-copper text-accent-foreground px-6 py-3.5 rounded-full font-semibold shadow-copper">
                <Phone className="w-4 h-4" /> Call (510) 833-8801
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold border border-primary-foreground/25 hover:bg-primary-foreground/10">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
