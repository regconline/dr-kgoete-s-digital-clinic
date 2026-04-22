import { Link } from "@tanstack/react-router";

import logo from "@/assets/dr-kgoete-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const practiceItems = [
  { to: "/medical-practice", label: "Medical Practice", description: "GP consultations, testing, chronic care, procedures" },
  { to: "/optometry", label: "Optometry Practice", description: "Eye exams, lenses, frames, eye-health referrals" },
] as const;

const whatsappLink = "https://wa.me/2766666673?text=Hi%20Dr%20Kgoete%2C%20I%20would%20like%20to%20book%20an%20appointment.";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background pb-16 text-foreground md:pb-0">
      <header className="sticky top-0 z-50 border-b border-border nav-glass">
        <div className="clinic-container flex min-h-20 flex-wrap items-center justify-between gap-3 py-3 md:gap-5">
          <Link to="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <img src={logo} alt="Dr Kabelo Kgoete Medical Practice logo" className="h-12 w-12 rounded-sm object-contain" decoding="async" />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-sm font-bold uppercase text-clinic-navy">Dr Kabelo Kgoete</span>
              <span className="block text-xs font-medium text-muted-foreground">Medical Practice & Optometry</span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="order-3 flex w-full items-center gap-1 overflow-x-auto pb-1 md:order-none md:w-auto md:overflow-visible md:pb-0">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="shrink-0 rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" activeProps={{ className: "bg-secondary text-foreground" }}>
                {item.label}
              </Link>
            ))}
            <details className="group relative shrink-0">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Practices <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <div className="absolute left-0 top-11 z-50 grid w-72 gap-2 rounded-2xl border border-border bg-popover p-2 text-popover-foreground shadow-raised">
                {practiceItems.map((item) => (
                  <Link key={item.to} to={item.to} className="rounded-xl p-3 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" activeProps={{ className: "bg-secondary" }}>
                    <span className="block text-sm font-bold text-foreground">{item.label}</span>
                    <span className="mt-1 block text-xs leading-5 text-muted-foreground">{item.description}</span>
                  </Link>
                ))}
              </div>
            </details>
          </nav>
          <a href="tel:+2766666673" className="premium-button rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            Call practice
          </a>
        </div>
      </header>
      <main>{children}</main>
      <WhatsAppWidget />
      <MobileBottomCta />
      <footer className="border-t border-border bg-card">
        <div className="clinic-container grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Dr Kabelo Kgoete Medical Practice logo" className="h-14 w-14 object-contain" loading="lazy" decoding="async" />
              <div>
                <p className="font-display text-lg font-bold text-clinic-navy">Dr Kabelo Kgoete</p>
                <p className="text-sm text-muted-foreground">Confidential & professional care.</p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">Registration details available at reception.</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-clinic-navy">Practice</p>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <Link to="/medical-practice" className="hover:text-foreground">Medical Practice</Link>
              <Link to="/optometry" className="hover:text-foreground">Optometry Practice</Link>
              <Link to="/about" className="hover:text-foreground">About Dr Kgoete</Link>
              <Link to="/blog" className="hover:text-foreground">Health Journal</Link>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-clinic-navy">Contact</p>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <a href="tel:+2766666673" className="hover:text-foreground">066 666 6673</a>
              <a href="mailto:info@drkgoete.co.za" className="hover:text-foreground">info@drkgoete.co.za</a>
              <p>Serving Glencowie & Jane Furse communities</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WhatsAppWidget() {
  return (
    <a href={whatsappLink} aria-label="Open WhatsApp chat" className="fixed bottom-24 left-4 z-40 flex max-w-[260px] items-center gap-3 rounded-full border border-border bg-card p-3 pr-5 shadow-raised transition-transform hover:-translate-y-1 md:bottom-6">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-success text-xl text-success-foreground shadow-soft">☘</span>
      <span>
        <span className="typing-dots block text-xs font-bold uppercase text-clinic-red">WhatsApp chat</span>
        <span className="block text-sm font-semibold text-foreground">Usually replies within minutes</span>
      </span>
    </a>
  );
}

function MobileBottomCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-card p-2 shadow-raised md:hidden">
      <a href={whatsappLink} className="mx-1 inline-flex h-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">WhatsApp</a>
      <a href="tel:+2766666673" className="mx-1 inline-flex h-11 items-center justify-center rounded-full border border-border bg-background text-sm font-bold text-foreground">Call Now</a>
    </div>
  );
}
