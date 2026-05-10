import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, MapPin, Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Star Plumbing & Water Heater" },
      { name: "description", content: "Call (510) 833-8801 or send a message. Open 24 hours, serving the Bay Area." },
      { property: "og:title", content: "Contact Star Plumbing" },
      { property: "og:description", content: "Open 24 hours. Call (510) 833-8801." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Contact</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold max-w-3xl">Let's get the water flowing.</h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl">
            Call us anytime, day or night. For non-urgent jobs, send a message and we'll respond within the hour.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <a href="tel:+15108338801" className="block p-7 rounded-2xl bg-copper text-accent-foreground shadow-copper hover:scale-[1.02] transition-transform">
            <Phone className="w-6 h-6 mb-3" />
            <div className="text-xs uppercase tracking-wider font-semibold opacity-80">Call now</div>
            <div className="font-display text-3xl font-semibold mt-1">(510) 833-8801</div>
          </a>
          <div className="p-7 rounded-2xl bg-card border border-border">
            <Clock className="w-5 h-5 text-accent mb-3" />
            <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Hours</div>
            <div className="font-display text-xl font-semibold mt-1">Open 24 hours · 7 days</div>
          </div>
          <div className="p-7 rounded-2xl bg-card border border-border">
            <MapPin className="w-5 h-5 text-accent mb-3" />
            <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Service area</div>
            <div className="font-display text-xl font-semibold mt-1">Bay Area, California</div>
          </div>
          <div className="p-7 rounded-2xl bg-card border border-border">
            <div className="flex gap-1 mb-3">
              {[0,1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
            </div>
            <div className="font-display text-xl font-semibold">5.0 on Google</div>
            <div className="text-sm text-muted-foreground mt-1">Every review, five stars.</div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 p-8 md:p-10 rounded-2xl bg-card border border-border shadow-elegant"
        >
          <h2 className="font-display text-3xl font-semibold mb-2">Request a quote</h2>
          <p className="text-muted-foreground mb-8">Tell us what's going on and we'll text you back fast.</p>

          {sent ? (
            <div className="p-6 rounded-xl bg-secondary border border-border text-center">
              <div className="font-display text-xl font-semibold mb-1">Got it — talk soon!</div>
              <p className="text-muted-foreground text-sm">For urgent issues, please call <a className="text-accent font-semibold" href="tel:+15108338801">(510) 833-8801</a>.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
              <div className="sm:col-span-2"><Field label="Email" name="email" type="email" /></div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2">How can we help?</label>
                <textarea required rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all" />
              </div>
              <button type="submit" className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Send message
              </button>
            </div>
          )}
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">{label}</label>
      <input id={name} name={name} type={type} required
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all" />
    </div>
  );
}
