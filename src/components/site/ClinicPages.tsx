import { Link } from "@tanstack/react-router";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { z } from "zod";

import logo from "@/assets/dr-kgoete-logo.png";

const whatsappNumber = "2766666673";

const trustSignals = [
  ["Trusted by local community", "Confidential & professional care"],
  ["2 locations available", "Glencowie & Jane Furse communities"],
  ["GP & optometry", "Integrated health and vision support"],
  ["Same-day appointments", "Limited daily slots available"],
];

const counters = [
  [1000, "+", "Patients served"],
  [2, "", "Locations"],
  [10, "+", "Clinical services"],
  [1, " day", "Same-day booking"],
] as const;

const journey = ["Book", "Visit", "Diagnose", "Treat", "Follow-up"];

const testimonials = [
  "Professional, patient and clear about next steps.",
  "A calm practice experience with medical and eye-care guidance in one place.",
];

const faqs = [
  ["Do you accept walk-ins?", "Patients can call ahead to confirm availability. Same-day appointments are available when slots remain."],
  ["How do I book?", "Use the WhatsApp booking flow, call the practice, or send an email with your preferred service and time."],
  ["What services are available?", "General consultations, chronic care, testing, procedures, optometry exams, lenses, frames, and referrals."],
];

const medicalServices = [
  { title: "General consultations", category: "General Health", duration: "30 min", detail: "Focused clinical assessment, clear treatment planning, and practical next steps for everyday health concerns." },
  { title: "Chronic disease management", category: "General Health", duration: "30–45 min", detail: "Ongoing support for conditions that need monitoring, medication review, lifestyle guidance, and follow-up." },
  { title: "Women’s health", category: "Women’s Health", duration: "30 min", detail: "Respectful consultations for screening, reproductive health concerns, prevention, and referral pathways." },
  { title: "Family health screenings", category: "Testing", duration: "20–30 min", detail: "Preventive checks that help detect risk early and guide patients toward appropriate care." },
  { title: "HIV testing", category: "Testing", duration: "15–20 min", detail: "Confidential testing with private counselling, professional guidance, and follow-up support where needed." },
  { title: "Minor procedures", category: "Procedures", duration: "Varies", detail: "Practical in-room procedures with preparation guidance and after-care instructions." },
  { title: "Medical certificates", category: "General Health", duration: "15 min", detail: "Assessment-based documentation where clinically appropriate." },
  { title: "Specialist referrals", category: "General Health", duration: "20 min", detail: "Coordinated referral guidance when specialist investigation or treatment is required." },
];

const optometryServices = [
  { title: "Comprehensive eye examinations", detail: "Vision testing and eye-health screening for clearer, more comfortable sight." },
  { title: "Prescription lenses", detail: "Accurate prescriptions and lens guidance for reading, distance, work, and daily comfort." },
  { title: "Frame selection", detail: "Practical support choosing frames that fit your face, prescription, and daily routine." },
  { title: "Contact lens guidance", detail: "Advice on suitability, handling, hygiene, and follow-up care." },
  { title: "Eye health referrals", detail: "Referral support where further investigation or specialist care is needed." },
  { title: "Visual comfort checks", detail: "Support for headaches, eye strain, screen fatigue, and changing vision needs." },
];

const serviceCategories = ["All", "Women’s Health", "General Health", "Testing", "Procedures"];

const bookingSchema = z.object({
  name: z.string().trim().min(2).max(80),
  service: z.string().trim().min(2).max(80),
  location: z.string().trim().min(2).max(80),
  time: z.string().trim().min(2).max(80),
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden hero-surface premium-hero">
        <PulseSignature />
        <div className="clinic-container grid min-h-[calc(100vh-5rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <motion.div className="relative z-10 max-w-3xl" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 inline-flex rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs font-bold uppercase text-primary-foreground shadow-soft backdrop-blur-lg">Now accepting patients</p>
            <h1 className="text-5xl font-black leading-[0.95] text-primary-foreground sm:text-6xl lg:text-7xl">Dr Kabelo Kgoete Medical Practice & Optometry</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80">Private-clinic calm, local accessibility, and integrated medical and eye-care support for patients across Glencowie, Jane Furse, Limpopo, and nearby communities.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl("appointment", "Glencowie", "today")} className="premium-button inline-flex h-13 items-center justify-center rounded-full bg-accent px-7 text-sm font-bold text-accent-foreground shadow-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">WhatsApp to book</a>
              <Link to="/medical-practice" className="inline-flex h-13 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 text-sm font-bold text-primary-foreground backdrop-blur-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Explore services</Link>
            </div>
          </motion.div>
          <motion.div className="relative z-10 mx-auto w-full max-w-md" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.15 }}>
            <div className="glass-panel rounded-2xl border border-primary-foreground/18 p-6">
              <img src={logo} alt="Dr Kabelo Kgoete Medical Practice and Optometry logo" className="mx-auto aspect-square w-full max-w-sm object-contain" decoding="async" />
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {trustSignals.slice(0, 4).map(([title, detail]) => (
                  <div key={title} className="rounded-2xl border border-primary-foreground/14 bg-primary-foreground/10 p-4">
                    <p className="text-sm font-bold text-primary-foreground">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-primary-foreground/70">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TrustBar />
      <ServicesPreview />
      <StatsSection />
      <PatientJourney />
      <TestimonialsAndFaq />
      <EmergencyNotice />
    </>
  );
}

export function AboutPage() {
  return (
    <StandardPage eyebrow="About Dr Kgoete" title="A dual-qualified medical doctor and optometrist delivering accessible, high-quality healthcare in Limpopo." intro="Dr Kabelo Kgoete is positioned around clinical clarity, community access, and a patient experience that feels calm from first contact to follow-up.">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...fadeUp} className="clinical-card rounded-2xl border border-border p-6">
          <img src={logo} alt="Dr Kabelo Kgoete brand mark" className="mx-auto max-w-xs object-contain" loading="lazy" decoding="async" />
        </motion.div>
        <div className="grid gap-4">
          <InfoBlock title="Why the practice exists" text="The practice was shaped around patients who need dependable local access to medical care, clear communication, and eye-care services without an intimidating clinical experience." />
          <InfoBlock title="Community connection" text="Serving Glencowie, Jane Furse, Limpopo, and surrounding communities, the brand is built on respectful consultation, privacy, and continuity." />
          <InfoBlock title="Mission-driven care" text="Each visit is structured to reduce uncertainty: patients understand what is being assessed, what the options are, and what should happen next." />
        </div>
      </div>
      <motion.blockquote {...fadeUp} className="mt-12 rounded-2xl section-band p-8 text-primary-foreground md:p-10">
        <p className="font-display text-3xl font-black leading-tight md:text-5xl">“Healthcare should be accessible, compassionate, and precise.”</p>
        <footer className="mt-5 text-sm font-bold uppercase opacity-80">Dr Kabelo Kgoete</footer>
      </motion.blockquote>
    </StandardPage>
  );
}

export function MedicalPracticePage() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof medicalServices)[number] | null>(null);
  const filtered = category === "All" ? medicalServices : medicalServices.filter((service) => service.category === category);

  return (
    <StandardPage eyebrow="Medical Practice" title="Everyday healthcare with disciplined clinical follow-through." intro="Filter services by need, review what to expect, and move quickly from concern to booking.">
      <div className="mb-7 flex flex-wrap gap-2">
        {serviceCategories.map((item) => (
          <button key={item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-sm font-bold transition-all ${category === item ? "border-accent bg-accent text-accent-foreground" : "border-border bg-card text-foreground hover:bg-secondary"}`}>{item}</button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service, index) => (
          <RevealCard key={service.title} title={service.title} eyebrow={service.category} text={service.detail} delay={index * 0.04} onClick={() => setSelected(service)} />
        ))}
      </div>
      <ServiceModal service={selected} onClose={() => setSelected(null)} />
      <BookingBand cta="Request a medical appointment" service="medical consultation" />
    </StandardPage>
  );
}

export function OptometryPage() {
  return (
    <StandardPage eyebrow="Optometry Practice" title="Clearer vision, considered eye health, and practical lens guidance." intro="Educational, approachable eye care for patients who need testing, prescriptions, frames, contact lens guidance, or referral support.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div {...fadeUp} className="clinical-card rounded-2xl border border-border p-6">
          <EyeDiagram />
          <div className="mt-6 rounded-2xl bg-secondary p-5">
            <p className="text-sm font-bold uppercase text-clinic-red">Did you know?</p>
            <p className="mt-2 font-display text-2xl font-black text-clinic-navy">1 in 3 people need vision correction at some point.</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Regular checks help detect prescription changes, eye strain, and referral needs earlier.</p>
          </div>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {optometryServices.map((service, index) => (
            <RevealCard key={service.title} title={service.title} eyebrow="Eye care" text={service.detail} delay={index * 0.04} />
          ))}
        </div>
      </div>
      <BookingBand cta="Book an eye exam" service="eye exam" />
    </StandardPage>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({ name: "", service: "Medical consultation", location: "Glencowie", time: "Today if available" });
  const valid = bookingSchema.safeParse(form).success;
  const message = `Hi Dr Kgoete,\nMy name is ${form.name || "[Name]"}.\nI would like to book: ${form.service}.\nLocation: ${form.location}.\nPreferred time: ${form.time}.`;

  return (
    <StandardPage eyebrow="Contact" title="Book faster with a smart WhatsApp request." intro="Same-day appointments may be available. Slots are limited per day, so contact the practice early for urgent booking needs.">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="clinical-card rounded-2xl border border-border p-6">
          <p className="text-sm font-bold uppercase text-clinic-red">Practice details</p>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-muted-foreground">
            <p><strong className="text-foreground">Phone:</strong> <a href="tel:+2766666673" className="hover:text-foreground">066 666 6673</a></p>
            <p><strong className="text-foreground">Email:</strong> <a href="mailto:info@drkgoete.co.za" className="hover:text-foreground">info@drkgoete.co.za</a></p>
            <p><strong className="text-foreground">Locations:</strong> Glencowie & Jane Furse communities</p>
            <p><strong className="text-foreground">Registration:</strong> Available on request at reception</p>
          </div>
          <div className="mt-6 rounded-2xl bg-secondary p-5">
            <p className="font-display text-2xl font-black text-clinic-navy">Same-day appointments available</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Limited slots are held daily for patients who need timely support.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <p className="font-display text-2xl font-black text-clinic-navy">WhatsApp message builder</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <BookingInput label="Your name" value={form.name} onChange={(name) => setForm({ ...form, name })} />
            <BookingInput label="Service" value={form.service} onChange={(service) => setForm({ ...form, service })} />
            <BookingInput label="Location" value={form.location} onChange={(location) => setForm({ ...form, location })} />
            <BookingInput label="Preferred time" value={form.time} onChange={(time) => setForm({ ...form, time })} />
          </div>
          <pre className="mt-5 whitespace-pre-wrap rounded-2xl bg-secondary p-5 text-sm leading-6 text-foreground">{message}</pre>
          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} aria-disabled={!valid} className="premium-button mt-5 inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground shadow-soft">Send WhatsApp request</a>
        </div>
      </div>
    </StandardPage>
  );
}

export function BlogPage() {
  const posts = ["When should you get tested for HIV?", "Eye-care habits that protect daily vision", "Women’s health checks worth scheduling", "What to know before circumcision consultation"];
  return (
    <StandardPage eyebrow="Health Journal" title="Practical health and eye-care guidance for local patients." intro="A focused resource hub designed to answer common questions before patients book.">
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => <InfoBlock key={post} title={post} text="Clear, patient-friendly education from the practice to support better conversations and earlier care decisions." />)}
      </div>
    </StandardPage>
  );
}

export function SeoLocationPage({ eyebrow, title, intro, location, service }: { eyebrow: string; title: string; intro: string; location: string; service: string }) {
  return (
    <StandardPage eyebrow={eyebrow} title={title} intro={intro}>
      <article className="prose-content clinical-card rounded-2xl border border-border p-6 md:p-8">
        <p>Patients searching for {service} in {location} often need more than a list of services. They need a practice that feels trustworthy, accessible, and clear about the next step. Dr Kabelo Kgoete Medical Practice & Optometry supports local families and individuals with medical consultations, screening, chronic care guidance, optometry services, referrals, and practical follow-up.</p>
        <p>The practice experience is designed to reduce uncertainty. From first contact, patients can explain what they need, confirm the most suitable appointment type, and prepare for the visit with simple guidance. Whether the concern is general health, vision changes, testing, women’s health, or an ongoing condition, the goal is to provide calm, confidential, and professional care.</p>
        <p>For patients in and around {location}, convenience matters. Same-day appointments may be available, and WhatsApp booking helps patients share their preferred service, location, and time quickly. The integrated medical and optometry model also means patients can access primary healthcare and eye-care support through one trusted brand.</p>
        <p>Book by phone or WhatsApp to confirm availability, ask what to bring, and choose the right service pathway for your needs.</p>
      </article>
      <BookingBand cta="Book with Dr Kgoete" service={service} />
    </StandardPage>
  );
}

function TrustBar() {
  return (
    <section className="bg-card py-6">
      <div className="clinic-container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustSignals.map(([title, detail]) => (
          <div key={title} className="rounded-2xl border border-border bg-background p-4 shadow-soft">
            <p className="text-sm font-bold text-clinic-navy">{title}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="clinic-container">
        <SectionHeading eyebrow="Care pathways" title="Services designed around what patients need to do next." />
        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/medical-practice"><RevealCard title="Medical Practice" eyebrow="GP services" text="Consultations, chronic care, women’s health, testing, minor procedures, certificates, and referrals." /></Link>
          <Link to="/optometry"><RevealCard title="Optometry Practice" eyebrow="Eye care" text="Eye examinations, lens prescriptions, frames, contact lens guidance, visual comfort, and referrals." /></Link>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="section-band py-16 text-primary-foreground md:py-24">
      <div className="clinic-container">
        <SectionHeading eyebrow="Practice confidence" title="Built for local access with private-clinic attention." light />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map(([target, suffix, label]) => <CounterCard key={label} target={target} suffix={suffix} label={label} />)}
        </div>
      </div>
    </section>
  );
}

function PatientJourney() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="clinic-container">
        <SectionHeading eyebrow="Patient journey" title="A simpler path from concern to follow-up." />
        <div className="grid gap-3 md:grid-cols-5">
          {journey.map((step, index) => (
            <motion.div key={step} {...fadeUp} transition={{ duration: 0.45, delay: index * 0.05 }} className="rounded-2xl border border-border bg-background p-5 shadow-soft">
              <p className="text-xs font-bold uppercase text-clinic-red">Step {index + 1}</p>
              <p className="mt-2 font-display text-2xl font-black text-clinic-navy">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsAndFaq() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="clinic-container grid gap-8 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Patient trust" title="Quiet confidence, not noise." />
          <div className="grid gap-4">
            {testimonials.map((item) => <blockquote key={item} className="rounded-2xl border border-border bg-card p-6 text-lg leading-8 shadow-soft">“{item}”</blockquote>)}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="FAQ" title="Answers before you book." />
          <div className="grid gap-3">
            {faqs.map(([q, a]) => <InfoBlock key={q} title={q} text={a} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyNotice() {
  return <div className="bg-accent py-3 text-center text-sm font-bold text-accent-foreground">For emergencies, please call the practice directly.</div>;
}

function RevealCard({ title, eyebrow, text, delay = 0, onClick }: { title: string; eyebrow: string; text: string; delay?: number; onClick?: () => void }) {
  const Comp = onClick ? motion.button : motion.article;
  return (
    <Comp {...fadeUp} transition={{ duration: 0.45, delay }} onClick={onClick} className="group min-h-48 w-full rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-all hover:-translate-y-1 hover:shadow-raised">
      <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase text-clinic-red">{eyebrow}</span>
      <h2 className="mt-5 font-display text-2xl font-black text-clinic-navy">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground md:max-h-12 md:overflow-hidden md:transition-all md:duration-300 md:group-hover:max-h-40">{text}</p>
    </Comp>
  );
}

function ServiceModal({ service, onClose }: { service: (typeof medicalServices)[number] | null; onClose: () => void }) {
  if (!service) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur-lg" role="dialog" aria-modal="true">
      <div className="max-w-lg rounded-2xl border border-border bg-card p-6 shadow-raised">
        <p className="text-sm font-bold uppercase text-clinic-red">{service.category}</p>
        <h2 className="mt-3 font-display text-3xl font-black text-clinic-navy">{service.title}</h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.detail}</p>
        <p className="mt-4 text-sm font-bold text-foreground">Expected duration: {service.duration}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappUrl(service.title, "Glencowie", "next available slot")} className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-bold text-accent-foreground">Book this service</a>
          <button onClick={onClose} className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-bold text-foreground">Close</button>
        </div>
      </div>
    </div>
  );
}

function BookingBand({ cta, service }: { cta: string; service: string }) {
  return (
    <div className="mt-10 rounded-2xl border border-border bg-secondary p-6 md:flex md:items-center md:justify-between md:gap-6">
      <div>
        <p className="font-display text-2xl font-black text-clinic-navy">Need help choosing the right appointment?</p>
        <p className="mt-2 text-sm text-muted-foreground">Call or WhatsApp the practice and the team will guide you to the appropriate service.</p>
      </div>
      <a href={whatsappUrl(service, "Glencowie", "next available slot")} className="premium-button mt-5 inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground shadow-soft md:mt-0">{cta}</a>
    </div>
  );
}

function CounterCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, { duration: 1.2, ease: "easeOut", onUpdate: (latest) => setValue(Math.round(latest)) });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <div ref={ref} className="rounded-2xl border border-primary-foreground/18 bg-primary-foreground/10 p-6 backdrop-blur-lg">
      <p className="font-display text-5xl font-black">{value}{suffix}</p>
      <p className="mt-2 text-sm font-bold uppercase opacity-80">{label}</p>
    </div>
  );
}

function BookingInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-foreground">
      {label}
      <input value={value} onChange={(event) => onChange(event.target.value.slice(0, 80))} className="h-11 rounded-full border border-input bg-background px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}

function StandardPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="clinic-container">
        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase text-clinic-red">{eyebrow}</p>
          <h1 className="text-4xl font-black leading-tight text-clinic-navy sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <motion.div {...fadeUp} className="mb-9 max-w-3xl">
      <p className={`mb-3 text-sm font-bold uppercase ${light ? "text-primary-foreground/75" : "text-clinic-red"}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl font-black leading-tight md:text-5xl ${light ? "text-primary-foreground" : "text-clinic-navy"}`}>{title}</h2>
    </motion.div>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <motion.div {...fadeUp} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <h2 className="font-display text-xl font-bold text-clinic-navy">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </motion.div>
  );
}

function EyeDiagram() {
  return (
    <svg viewBox="0 0 520 300" className="h-auto w-full text-clinic-navy" role="img" aria-label="Simple eye health diagram">
      <ellipse cx="260" cy="150" rx="210" ry="92" fill="none" stroke="currentColor" strokeWidth="10" />
      <circle cx="260" cy="150" r="62" fill="var(--clinic-ice)" stroke="var(--clinic-red)" strokeWidth="10" />
      <circle cx="260" cy="150" r="24" fill="currentColor" />
      <path d="M72 150c44-52 102-80 188-80s144 28 188 80" fill="none" stroke="var(--clinic-red)" strokeWidth="6" strokeLinecap="round" className="pulse-line" />
      <text x="35" y="46" fill="currentColor" fontSize="22" fontWeight="700">Vision</text>
      <text x="370" y="265" fill="currentColor" fontSize="22" fontWeight="700">Eye health</text>
    </svg>
  );
}

function PulseSignature() {
  return (
    <svg className="pointer-events-none absolute inset-x-0 top-28 h-44 w-full text-accent opacity-30" viewBox="0 0 1200 180" preserveAspectRatio="none" aria-hidden="true">
      <path className="pulse-line" d="M0 104H225L246 72L268 138L298 34L333 150L365 104H710C752 35 830 34 875 104C920 174 998 173 1037 104H1200" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function whatsappUrl(service: string, location: string, time: string) {
  const message = `Hi Dr Kgoete,\nMy name is [Name].\nI would like to book: ${service}.\nLocation: ${location}.\nPreferred time: ${time}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
