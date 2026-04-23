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
            <span className="hidden leading-tight sm:block">
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
      <WhatsAppWidget />
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

function WhatsAppWidget() {
  return (
    <a href={whatsappLink} aria-label="Open WhatsApp chat" className="fixed bottom-24 left-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-success text-2xl text-success-foreground shadow-raised transition-transform hover:-translate-y-1 md:bottom-6">
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
        <path d="M16.04 3.2A12.68 12.68 0 0 0 5.2 22.45L3.6 28.8l6.5-1.52A12.73 12.73 0 1 0 16.04 3.2Zm0 2.54a10.18 10.18 0 0 1 8.63 15.57 10.18 10.18 0 0 1-13.77 3.7l-.46-.27-3.86.9.94-3.75-.3-.49A10.15 10.15 0 0 1 16.04 5.74Zm-4.3 4.84c-.24 0-.62.09-.95.45-.33.36-1.25 1.22-1.25 2.98s1.28 3.45 1.46 3.69c.18.24 2.52 3.85 6.1 5.4.85.37 1.52.59 2.04.75.86.27 1.64.23 2.26.14.69-.1 2.12-.86 2.42-1.7.3-.83.3-1.55.21-1.7-.09-.15-.33-.24-.69-.42-.36-.18-2.12-1.04-2.45-1.16-.33-.12-.57-.18-.81.18-.24.36-.93 1.16-1.14 1.4-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.96-1.11-2.68-.29-.7-.59-.6-.81-.61h-.69Z" />
      </svg>
    </a>
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
