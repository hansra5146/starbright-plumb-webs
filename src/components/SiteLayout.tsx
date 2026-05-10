import { Link, Outlet } from "@tanstack/react-router";
import { Phone, Wrench } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-copper grid place-items-center shadow-copper">
              <Wrench className="w-5 h-5 text-accent-foreground" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold text-foreground">Star Plumbing</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">& Water Heater</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
                activeProps={{ className: "px-4 py-2 text-sm font-medium text-foreground rounded-md" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+15108338801"
            className="inline-flex items-center gap-2 bg-copper text-accent-foreground px-4 py-2.5 rounded-full text-sm font-semibold shadow-copper hover:scale-[1.03] transition-transform"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(510) 833-8801</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-primary text-primary-foreground mt-24">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-copper grid place-items-center">
                <Wrench className="w-5 h-5 text-accent-foreground" strokeWidth={2.5} />
              </div>
              <div className="font-display text-xl font-semibold">Star Plumbing & Water Heater</div>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Honest, reliable plumbing service for the Bay Area. Family-run, licensed, and on call 24 hours.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="tel:+15108338801" className="hover:text-accent">(510) 833-8801</a></li>
              <li>Open 24 hours</li>
              <li>Serving the Bay Area</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-accent">{n.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-primary-foreground/50 flex flex-wrap gap-2 justify-between">
            <div>© {new Date().getFullYear()} Star Plumbing & Water Heater. All rights reserved.</div>
            <div>Licensed & insured · 5.0 ★ on Google</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
