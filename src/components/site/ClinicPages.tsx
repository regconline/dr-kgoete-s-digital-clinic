import { Link } from "@tanstack/react-router";

import logo from "@/assets/dr-kgoete-logo.png";

const stats = [
  ["Primary care", "Consultations, chronic care, check-ups"],
  ["Optometry", "Eye exams, lenses, frames"],
  ["Patient support", "Clear referrals and follow-up"],
];

const medicalServices = [
  "General consultations",
  "Chronic disease management",
  "Family health screenings",
  "Minor procedures",
  "Medical certificates",
  "Specialist referrals",
];

const optometryServices = [
  "Comprehensive eye examinations",
  "Vision testing",
  "Prescription lenses",
  "Frame selection",
  "Contact lens guidance",
  "Eye health referrals",
];

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden hero-surface">
        <PulseSignature />
        <div className="clinic-container grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-4 inline-flex rounded-md border border-clinic-line bg-card px-3 py-1 text-xs font-bold uppercase text-clinic-red shadow-soft">Mabopane medical & eye care</p>
            <h1 className="text-5xl font-black leading-[0.98] text-clinic-navy sm:text-6xl lg:text-7xl">Dr Kabelo Kgoete Medical Practice & Optometry</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Integrated primary healthcare and optometry delivered with calm precision, practical guidance, and respectful patient care.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-sm font-bold text-accent-foreground shadow-raised transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">Book an appointment</Link>
              <Link to="/medical-practice" className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-6 text-sm font-bold text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Explore services</Link>
            </div>
          </div>
          <div className="relative z-10 pb-6 lg:pb-0">
            <div className="clinical-card raised-card mx-auto max-w-md rounded-lg border border-border p-6 transition-transform duration-300 hover:-translate-y-1">
              <img src={logo} alt="Dr Kabelo Kgoete Medical Practice and Optometry logo" className="mx-auto aspect-square w-full max-w-sm object-contain" />
              <div className="mt-5 grid grid-cols-3 gap-2">
                {stats.map(([title, detail]) => (
                  <div key={title} className="rounded-md bg-secondary p-3">
                    <p className="text-sm font-bold text-clinic-navy">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background py-18">
        <div className="clinic-container grid gap-6 md:grid-cols-3">
          <FeatureCard title="Same-site care" text="Medical and eye-care support presented as one coordinated patient experience." />
          <FeatureCard title="Clear next steps" text="Practical advice, referrals, and follow-up that help patients act with confidence." />
          <FeatureCard title="Community access" text="A local practice built for approachable, dependable care in Mabopane." />
        </div>
      </section>
      <section className="section-band py-16 text-primary-foreground">
        <div className="clinic-container grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase opacity-80">Care pathways</p>
            <h2 className="mt-3 text-4xl font-black">From a routine check-up to clearer vision.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link to="/medical-practice" className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-5 transition-transform hover:-translate-y-1">
              <p className="font-display text-xl font-bold">Medical Practice</p>
              <p className="mt-2 text-sm leading-6 opacity-80">Consultations, screenings, chronic care, and referrals.</p>
            </Link>
            <Link to="/optometry" className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-5 transition-transform hover:-translate-y-1">
              <p className="font-display text-xl font-bold">Optometry Practice</p>
              <p className="mt-2 text-sm leading-6 opacity-80">Eye exams, vision correction, frames, and contact lens care.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutPage() {
  return (
    <StandardPage eyebrow="About" title="Care shaped around the person, not the appointment." intro="Dr Kgoete’s practice combines everyday medical support with optometry services so patients can access essential care in one trusted local setting.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="clinical-card rounded-lg border border-border p-6">
          <img src={logo} alt="Dr Kabelo Kgoete brand mark" className="mx-auto max-w-xs object-contain" />
        </div>
        <div className="grid gap-4">
          <InfoBlock title="Patient-first communication" text="Consultations are structured to make concerns clear, options understandable, and next steps practical." />
          <InfoBlock title="Integrated clinical view" text="General health, chronic care, visual comfort, and referrals are considered as connected parts of wellbeing." />
          <InfoBlock title="Local continuity" text="The practice supports families and individuals with a dependable point of care in Mabopane." />
        </div>
      </div>
    </StandardPage>
  );
}

export function MedicalPracticePage() {
  return (
    <ServicePage eyebrow="Medical Practice" title="Everyday healthcare with disciplined clinical follow-through." intro="General medical services for individuals and families, with attention to screening, chronic conditions, acute concerns, and referral coordination." services={medicalServices} cta="Request a medical appointment" />
  );
}

export function OptometryPage() {
  return (
    <ServicePage eyebrow="Optometry Practice" title="Clearer vision, considered eye health, and practical lens guidance." intro="Optometry services for patients who need vision testing, lens prescriptions, contact lens guidance, frames, and eye-health referrals." services={optometryServices} cta="Book an eye exam" />
  );
}

export function ContactPage() {
  return (
    <StandardPage eyebrow="Contact" title="Book or enquire with the practice." intro="Use the contact details below for appointments, questions, and visit planning.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="clinical-card rounded-lg border border-border p-6">
          <p className="text-sm font-bold uppercase text-clinic-red">Practice details</p>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-muted-foreground">
            <p><strong className="text-foreground">Phone:</strong> <a href="tel:+2766666673" className="hover:text-foreground">066 666 6673</a></p>
            <p><strong className="text-foreground">Email:</strong> <a href="mailto:info@drkgoete.co.za" className="hover:text-foreground">info@drkgoete.co.za</a></p>
            <p><strong className="text-foreground">Address:</strong> 66 Sekelbos, Mabopane, 0190</p>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-secondary p-6">
          <p className="font-display text-2xl font-black text-clinic-navy">Before you visit</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Bring your ID or medical aid details",
              "Bring current medication information",
              "Bring existing spectacles or lens prescription",
              "Arrive early for first-time registration",
            ].map((item) => (
              <div key={item} className="rounded-md bg-card p-4 text-sm font-semibold text-foreground shadow-soft">{item}</div>
            ))}
          </div>
          <a href="tel:+2766666673" className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-sm font-bold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Call now</a>
        </div>
      </div>
    </StandardPage>
  );
}

function ServicePage({ eyebrow, title, intro, services, cta }: { eyebrow: string; title: string; intro: string; services: string[]; cta: string }) {
  return (
    <StandardPage eyebrow={eyebrow} title={title} intro={intro}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service} className="clinical-card rounded-lg border border-border p-5 transition-transform hover:-translate-y-1">
            <div className="mb-5 h-1.5 w-14 rounded-full bg-accent" />
            <h2 className="font-display text-xl font-bold text-clinic-navy">{service}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Structured care, clear communication, and practical next steps for each patient.</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-lg border border-border bg-secondary p-6 md:flex md:items-center md:justify-between md:gap-6">
        <div>
          <p className="font-display text-2xl font-black text-clinic-navy">Need help choosing the right appointment?</p>
          <p className="mt-2 text-sm text-muted-foreground">Call the practice and the team will guide you to the appropriate service.</p>
        </div>
        <Link to="/contact" className="mt-5 inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-sm font-bold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5 md:mt-0">{cta}</Link>
      </div>
    </StandardPage>
  );
}

function StandardPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return (
    <section className="bg-background py-16">
      <div className="clinic-container">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase text-clinic-red">{eyebrow}</p>
          <h1 className="text-4xl font-black leading-tight text-clinic-navy sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="clinical-card rounded-lg border border-border p-6 transition-transform duration-300 hover:-translate-y-1">
      <h2 className="font-display text-2xl font-black text-clinic-navy">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </article>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-soft">
      <h2 className="font-display text-xl font-bold text-clinic-navy">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function PulseSignature() {
  return (
    <svg className="pointer-events-none absolute inset-x-0 top-24 h-36 w-full text-accent opacity-20" viewBox="0 0 1200 180" preserveAspectRatio="none" aria-hidden="true">
      <path className="pulse-line" d="M0 104H225L246 72L268 138L298 34L333 150L365 104H710C752 35 830 34 875 104C920 174 998 173 1037 104H1200" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
