import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import logo from "@/assets/dr-kgoete-logo-new.png";

const whatsappLink = "https://wa.me/27658649186?text=Hi%20Dr%20Kgoete%2C%20I%20would%20like%20to%20book%20an%20appointment.";
const phoneHref = "tel:+27658649186";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/medical-services", label: "Medical" },
  { to: "/optometry", label: "Optometry" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-16 text-foreground md:pb-0">
      <header className="sticky top-0 z-50 border-b border-border nav-glass">
        <div className="clinic-container flex min-h-20 items-center justify-between gap-3 py-3">
          <Link to="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" onClick={() => setOpen(false)}>
            <img src={logo} alt="Dr Kabelo Kgoete Medical Practice & Optometry logo" className="h-16 w-16 rounded-sm object-contain" decoding="async" />
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold uppercase text-clinic-navy">Dr Kabelo Kgoete</span>
              <span className="block text-xs font-medium text-muted-foreground">Medical Practice & Optometry</span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="shrink-0 rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" activeProps={{ className: "bg-secondary text-foreground" }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <a href={phoneHref} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-bold text-foreground shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Call</a>
            <a href={whatsappLink} className="premium-button rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Book via WhatsApp</a>
          </div>
          <button type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)} className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card shadow-soft lg:hidden">
            <span className="grid gap-1.5">
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
            </span>
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[70] bg-background/96 backdrop-blur-xl lg:hidden" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.32, ease: "easeOut" }}>
            <div className="clinic-container flex min-h-screen flex-col py-5">
              <div className="flex items-center justify-between">
                <p className="font-display text-2xl font-black text-clinic-navy">Menu</p>
                <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-2xl font-bold shadow-soft">×</button>
              </div>
              <nav aria-label="Mobile navigation" className="mt-12 grid gap-4">
                {navItems.map((item, index) => (
                  <motion.div key={item.to} initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                    <Link to={item.to} onClick={() => setOpen(false)} className="block rounded-2xl border border-border bg-card p-5 font-display text-4xl font-black text-clinic-navy shadow-soft" activeProps={{ className: "border-accent" }}>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <a href={whatsappLink} className="premium-button mt-8 inline-flex h-14 items-center justify-center rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground shadow-raised">Book via WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <main>{children}</main>
      <MobileBottomCta />
      <footer className="border-t border-border bg-card">
        <div className="clinic-container grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="flex items-start gap-3">
            <img src={logo} alt="Dr Kabelo Kgoete Medical Practice & Optometry logo" className="h-[4.5rem] w-[4.5rem] object-contain" loading="lazy" decoding="async" />
            <div>
              <p className="font-display text-lg font-bold text-clinic-navy">Dr Kabelo Kgoete</p>
              <p className="text-sm text-muted-foreground">Confidential & professional care.</p>
              <p className="mt-2 text-xs font-semibold text-muted-foreground">Medical Centre, Stand No 004 Ga-Moloi, Caprive Village, Glen Cowie, 1061</p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground">Registration details available at reception.</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-clinic-navy">Practice</p>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <Link to="/medical-services" className="hover:text-foreground">Medical</Link>
              <Link to="/optometry" className="hover:text-foreground">Optometry</Link>
              <Link to="/about" className="hover:text-foreground">About Dr Kgoete</Link>
              <Link to="/contact" className="hover:text-foreground">Contact</Link>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-clinic-navy">Contact</p>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <a href={phoneHref} className="hover:text-foreground">065 864 9186</a>
              <p>Monday–Friday: 8:00 AM – 5:00 PM</p>
              <p>Saturday: 8:00 AM – 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MobileBottomCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-card p-2 shadow-raised md:hidden">
      <a href={whatsappLink} className="mx-1 inline-flex h-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">WhatsApp</a>
      <a href={phoneHref} className="mx-1 inline-flex h-11 items-center justify-center rounded-full border border-border bg-background text-sm font-bold text-foreground">Call Now</a>
    </div>
  );
}
