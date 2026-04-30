import { Link } from "@tanstack/react-router";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";

import doctorConsultationImage from "@/assets/dr-kgoete-consultation.jpeg";
import doctorGreenAttireImage from "@/assets/dr-kgoete-portrait.jpg";
import logo from "@/assets/dr-kgoete-logo-new.png";
import eyeChartImage from "@/assets/facility-eye-chart.jpeg";
import receptionImage from "@/assets/facility-reception.jpeg";
import ultrasoundImage from "@/assets/facility-ultrasound.jpeg";
import waitingAreaImage from "@/assets/facility-waiting-area.jpeg";

const practiceName = "Dr Kabelo Kgoete Medical Practice & Optometry";
const address = "Medical Centre, Stand No 004 Ga-Moloi, Caprive Village, Glen Cowie, 1061";
const phoneDisplay = "065 864 9186";
const phoneHref = "+27658649186";
const whatsappNumber = "27658649186";

const hours = [
  ["Monday", "8:00 AM – 5:00 PM"],
  ["Tuesday", "8:00 AM – 5:00 PM"],
  ["Wednesday", "8:00 AM – 5:00 PM"],
  ["Thursday", "8:00 AM – 5:00 PM"],
  ["Friday", "8:00 AM – 5:00 PM"],
  ["Saturday", "8:00 AM – 1:00 PM"],
  ["Sunday", "Closed"],
] as const;

const trustSignals = [
  ["Doctor in Glen Cowie", "Professional primary healthcare at Medical Centre Ga-Moloi"],
  ["HPCSA compliant care", "Professional standards, privacy, and ethical clinical communication"],
  ["WhatsApp booking", "Fast appointment requests with clear details"],
  ["Accessible hours", "Open weekdays and Saturday morning"],
] as const;

const counters = [
  [1, "", "Dedicated practice"],
  [5, "+", "Weekday clinic days"],
  [10, "+", "Care services"],
  [6, "", "Days open weekly"],
] as const;

const medicalServices = [
  { icon: "🩺", title: "General Consultations", category: "General Health", detail: "Assessment and guidance for everyday health concerns, symptoms, medication questions, and appropriate next steps." },
  { icon: "💉", title: "Chronic Disease Management", category: "Chronic Care", detail: "Ongoing review and support for long-term conditions that require monitoring, medication review, and follow-up." },
  { icon: "🧪", title: "Health Screenings", category: "Screening", detail: "Preventive checks and risk screening to help identify issues early and guide suitable care pathways." },
  { icon: "👶", title: "Child Healthcare", category: "Family Care", detail: "Professional support for common child health concerns, check-ups, and referral guidance where needed." },
  { icon: "❤️", title: "Hypertension & Diabetes Care", category: "Chronic Care", detail: "Clinical monitoring, lifestyle guidance, and follow-up planning for blood pressure and diabetes care." },
  { icon: "♀️", title: "Women’s Health", category: "Family Care", detail: "Respectful consultations for women’s health concerns, wellness checks, counselling, and referral support when needed." },
  { icon: "♂️", title: "Men’s Health", category: "Family Care", detail: "Confidential support for men’s health concerns, screening discussions, lifestyle risk, and appropriate clinical next steps." },
  { icon: "🤰", title: "Antenatal Care", category: "Maternal Health", detail: "Pregnancy-related check-ins, routine monitoring guidance, health education, and referral coordination where appropriate." },
  { icon: "🩹", title: "Minor Illness & Injury Care", category: "Acute Care", detail: "Assessment for common acute concerns such as flu-like symptoms, minor wounds, pain, and everyday urgent health questions." },
  { icon: "💊", title: "Medication Reviews", category: "General Health", detail: "Practical review of current medication use, adherence concerns, side effects, and follow-up planning." },
  { icon: "🧾", title: "Medical Certificates", category: "General Health", detail: "Assessment-based certificates and documentation where clinically appropriate." },
] as const;

const optometryServices = [
  { icon: "👓", title: "Eye Tests", detail: "Clear vision checks and prescription support for reading, distance, work, and everyday comfort." },
  { icon: "🔍", title: "Vision Screening", detail: "Screening for changes in vision, eye strain, headaches, and symptoms that may need further assessment." },
  { icon: "👁️", title: "Eye Health Exams", detail: "Professional eye-health checks with referral guidance when specialist care may be required." },
  { icon: "🕶️", title: "Prescription Glasses", detail: "Guidance on lenses and frames suited to your prescription, comfort, and daily use." },
  { icon: "📊", title: "Contact Lens Fittings", detail: "Suitability guidance, fitting support, hygiene advice, and follow-up care for contact lens users." },
  { icon: "💻", title: "Digital Eye Strain Support", detail: "Assessment and practical guidance for tired eyes, screen-related discomfort, and work or study vision needs." },
  { icon: "👧", title: "Children’s Vision Checks", detail: "Age-appropriate checks for children’s visual comfort, school-related vision concerns, and referral guidance." },
  { icon: "☀️", title: "UV & Sunglass Guidance", detail: "Advice on protective eyewear and lens options for outdoor comfort, glare, and daily eye protection." },
  { icon: "📐", title: "Frame & Lens Advice", detail: "Support choosing frames and lenses that suit prescription requirements, comfort, durability, and daily routines." },
  { icon: "🧼", title: "Contact Lens Hygiene", detail: "Clear education on safe lens wear, cleaning routines, comfort checks, and when to seek professional review." },
] as const;

const journey = ["Request", "Confirm", "Visit", "Assess", "Follow up"];

const facilityImages = [
  { src: waitingAreaImage, alt: "Patient waiting area at Dr Kabelo Kgoete Medical Practice and Optometry", title: "Patient waiting area" },
  { src: receptionImage, alt: "Reception area at Medical Centre Ga-Moloi in Glen Cowie", title: "Reception and check-in" },
  { src: doctorConsultationImage, alt: "Dr Kabelo Kgoete consulting with clinical equipment", title: "Consultation room" },
  { src: ultrasoundImage, alt: "Clinical ultrasound equipment available at the practice", title: "Medical equipment" },
  { src: eyeChartImage, alt: "Illuminated eye chart used for optometry screening", title: "Vision screening" },
] as const;

const googleBusinessProfileUrl = "https://share.google/JQprgoQg3Xaex8Hxv";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(30),
  message: z.string().trim().min(5).max(700),
});

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden hero-surface premium-hero">
        <PulseSignature prominent />
        <div className="clinic-container grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div className="relative z-10 max-w-3xl" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 inline-flex rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs font-bold uppercase text-primary-foreground shadow-soft backdrop-blur-lg">Now accepting patients</p>
            <h1 className="text-5xl font-black leading-[0.98] text-primary-foreground sm:text-6xl lg:text-7xl">Premium medical care and optometry in Glen Cowie.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/82">{practiceName} provides professional, accessible healthcare from {address}.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl("appointment request")} className="premium-button inline-flex h-13 items-center justify-center rounded-full bg-accent px-7 text-sm font-bold text-accent-foreground shadow-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Book Appointment</a>
              <Link to="/medical-services" className="inline-flex h-13 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 text-sm font-bold text-primary-foreground backdrop-blur-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">View services</Link>
            </div>
          </motion.div>
          <motion.div className="relative z-10 mx-auto grid w-full max-w-md gap-4" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.15 }}>
            {trustSignals.map(([title, detail], index) => (
              <motion.div key={title} className={`glass-panel rounded-2xl border border-primary-foreground/18 p-5 ${index % 2 ? "ml-8" : "mr-8"}`} animate={{ y: [0, -7, 0] }} transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}>
                <p className="text-xs font-bold uppercase text-primary-foreground/70">0{index + 1}</p>
                <p className="mt-2 font-display text-2xl font-black text-primary-foreground">{title}</p>
                <p className="mt-1 text-sm leading-6 text-primary-foreground/75">{detail}</p>
              </motion.div>
            ))}
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
    <StandardPage eyebrow="About Dr Kgoete" title="Professional healthcare grounded in clinical standards, privacy, and clear communication." intro="Dr Kabelo Kgoete Medical Practice & Optometry provides medical and eye-care services with a patient-first approach, professional ethics, and respectful follow-through.">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...fadeUp} className="clinical-card rounded-2xl border border-border p-6">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary shadow-soft">
            <img src={doctorGreenAttireImage} alt="Dr Kabelo Kgoete, General Practitioner and Optometrist" className="aspect-[4/5] w-full object-cover object-top" loading="lazy" decoding="async" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-clinic-navy/90 to-transparent p-6 text-primary-foreground">
              <p className="font-display text-3xl font-black">Dr Kabelo Kgoete</p>
              <p className="mt-2 text-sm font-bold uppercase opacity-85">Medical practitioner and optometry practice lead</p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-secondary p-5">
            <p className="text-sm font-bold uppercase text-clinic-red">Practice address</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{address}</p>
          </div>
        </motion.div>
        <div className="grid gap-4">
          <InfoBlock title="Patient-centred medical care" text="Dr Kgoete focuses on careful consultation, clear explanations, and practical clinical next steps so patients understand their care pathway." />
          <InfoBlock title="Medical and optometry support" text="The practice offers general healthcare and optometry services, helping families book the right appointment for medical concerns or vision needs." />
          <InfoBlock title="HPCSA-compliant professional standards" text="Care communication is kept factual, ethical, and respectful, with patient privacy, informed consent, and appropriate referral guidance prioritised." />
          <InfoBlock title="Community access in Glen Cowie" text="The practice supports local patients with weekday and Saturday availability, WhatsApp booking, and a clear address at Medical Centre Ga-Moloi." />
        </div>
      </div>
      <motion.blockquote {...fadeUp} className="mt-12 rounded-2xl section-band p-8 text-primary-foreground md:p-10">
        <p className="font-display text-3xl font-black leading-tight md:text-5xl">“Healthcare should be accessible, compassionate, and precise.”</p>
        <footer className="mt-5 text-sm font-bold uppercase opacity-80">Dr Kabelo Kgoete</footer>
      </motion.blockquote>
      <FacilityCarousel />
    </StandardPage>
  );
}

export function MedicalServicesPage() {
  return (
    <motion.section {...fadeUp} className="bg-background py-10 lg:py-14">
      <div className="clinic-container">
        <div className="mb-6 grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-clinic-red">Medical Services</p>
            <h1 className="text-4xl font-black leading-tight text-clinic-navy lg:text-5xl">Doctor in Glen Cowie for everyday healthcare and ongoing care needs.</h1>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <p className="text-base leading-7 text-muted-foreground">Medical services are described clearly so patients can identify the right appointment type and book via WhatsApp or phone.</p>
            <div>
              <a href={whatsappUrl("medical appointment")} className="premium-button inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground shadow-soft">Book a medical appointment</a>
            </div>
          </div>
        </div>
        <PulseDivider />
        <div className="grid gap-5 lg:grid-cols-[280px_1fr] lg:items-start">
          <motion.div {...fadeUp} className="clinical-card rounded-2xl border border-border p-5 lg:sticky lg:top-24">
            <MedicalHeartbeatDiagram />
            <div className="mt-4 rounded-2xl bg-secondary p-4">
              <p className="text-xs font-bold uppercase text-clinic-red">Clinical care</p>
              <p className="mt-1 font-display text-xl font-black text-clinic-navy">Clear assessment before treatment decisions.</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">Appointments focus on understanding symptoms, risks, history, and the most appropriate next step.</p>
            </div>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {medicalServices.map((service, index) => (
              <CompactServiceCard key={service.title} icon={service.icon} title={service.title} category={service.category} detail={service.detail} delay={index * 0.03} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export const MedicalPracticePage = MedicalServicesPage;

export function OptometryPage() {
  return (
    <motion.section {...fadeUp} className="bg-background py-10 lg:py-14">
      <div className="clinic-container">
        <div className="mb-6 grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-clinic-red">Optometry</p>
            <h1 className="text-4xl font-black leading-tight text-clinic-navy lg:text-5xl">Optometrist Glen Cowie for eye tests, glasses, and vision support.</h1>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <p className="text-base leading-7 text-muted-foreground">Eye-care services focus on clear explanations, comfortable vision, and appropriate referral guidance where further care may be needed.</p>
            <div>
              <a href={whatsappUrl("eye test")} className="premium-button inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground shadow-soft">Book an eye test</a>
            </div>
          </div>
        </div>
        <PulseDivider />
        <div className="grid gap-5 lg:grid-cols-[280px_1fr] lg:items-start">
          <motion.div {...fadeUp} className="clinical-card rounded-2xl border border-border p-5 lg:sticky lg:top-24">
            <EyeDiagram />
            <div className="mt-4 rounded-2xl bg-secondary p-4">
              <p className="text-xs font-bold uppercase text-clinic-red">Did you know?</p>
              <p className="mt-1 font-display text-xl font-black text-clinic-navy">Vision changes can be gradual.</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">Regular eye checks can help identify prescription changes, eye strain, and possible referral needs.</p>
            </div>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {optometryServices.map((service, index) => (
              <CompactServiceCard key={service.title} icon={service.icon} title={service.title} category="Eye care" detail={service.detail} delay={index * 0.03} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const valid = contactSchema.safeParse(form).success;
  const message = `Hi Dr Kgoete,\nMy name is ${form.name || "[Name]"}.\nMy phone number is ${form.phone || "[Phone]"}.\n${form.message || "I would like to book an appointment."}`;

  return (
    <StandardPage eyebrow="Contact" title="Book quickly through WhatsApp or call the Glen Cowie practice." intro="Send a clear appointment request, call directly, or open the Google Business Profile for directions to Medical Centre Ga-Moloi in Caprive Village.">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div {...fadeUp} className="clinical-card rounded-2xl border border-border p-6">
          <p className="text-sm font-bold uppercase text-clinic-red">Practice details</p>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-muted-foreground">
            <p><strong className="text-foreground">Phone / WhatsApp:</strong> <a href={`tel:${phoneHref}`} className="hover:text-foreground">{phoneDisplay}</a></p>
            <p><strong className="text-foreground">Address:</strong> {address}</p>
            <p><strong className="text-foreground">Registration:</strong> Available at reception.</p>
          </div>
          <div className="mt-6 rounded-2xl border border-border bg-secondary p-5 shadow-soft">
            <p className="font-display text-2xl font-black text-clinic-navy">Get directions on Google</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Open the official Google Business Profile for location details, navigation, and directions to the practice.</p>
            <a href={googleBusinessProfileUrl} target="_blank" rel="noreferrer" className="premium-button mt-5 inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground shadow-soft">Open directions</a>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <p className="font-display text-2xl font-black text-clinic-navy">WhatsApp contact form</p>
          <div className="mt-5 grid gap-4">
            <BookingInput label="Name" value={form.name} onChange={(name) => setForm({ ...form, name })} />
            <BookingInput label="Phone" value={form.phone} onChange={(phone) => setForm({ ...form, phone })} />
            <label className="grid gap-2 text-sm font-bold text-foreground">Message<textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value.slice(0, 700) })} className="min-h-32 rounded-2xl border border-input bg-background px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-ring" /></label>
          </div>
          <pre className="mt-5 whitespace-pre-wrap rounded-2xl bg-secondary p-5 text-sm leading-6 text-foreground">{message}</pre>
          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} aria-disabled={!valid} className={`premium-button mt-5 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-bold shadow-soft ${valid ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"}`}>Chat on WhatsApp</a>
        </motion.div>
      </div>
      <HoursSection />
    </StandardPage>
  );
}

export function BlogPage() {
  const posts = ["When to book a general consultation", "Eye-care habits that support daily comfort", "Understanding routine health screenings", "Preparing for your first optometry visit"];
  return (
    <StandardPage eyebrow="Health Journal" title="Practical health and eye-care guidance for Glen Cowie patients." intro="Short educational articles written in professional, patient-friendly language.">
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => <InfoBlock key={post} title={post} text="Clear, factual education to support better questions during a professional consultation." />)}
      </div>
    </StandardPage>
  );
}

export function SeoLocationPage({ eyebrow, title, intro, location, service }: { eyebrow: string; title: string; intro: string; location: string; service: string }) {
  return (
    <StandardPage eyebrow={eyebrow} title={title} intro={intro}>
      <article className="prose-content clinical-card rounded-2xl border border-border p-6 md:p-8">
        <p>{practiceName} is based at {address}. Patients searching for {service} in {location} can contact the Glen Cowie practice for professional medical and optometry services.</p>
        <p>The practice focuses on clear communication, respectful consultation, and practical next steps. Patients can book by WhatsApp or phone and ask what to bring before their visit.</p>
        <p>Services include general consultations, chronic care support, health screenings, child healthcare, eye tests, vision screening, prescription glasses, and contact lens fittings.</p>
        <p>For urgent concerns, patients should call directly so availability and appropriate care guidance can be discussed.</p>
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
          <motion.div key={title} {...fadeUp} className="rounded-2xl border border-border bg-background p-4 shadow-soft">
            <p className="text-sm font-bold text-clinic-navy">{title}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="clinic-container">
        <SectionHeading eyebrow="Care pathways" title="Book the right care faster, with clear services for health and vision." />
        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/medical-services"><RevealCard icon="🩺" title="Medical Services" eyebrow="Doctor in Glen Cowie" text="From everyday symptoms to chronic care, women’s and men’s health, child care, and antenatal support—start with a clear, respectful consultation." /></Link>
          <Link to="/optometry"><RevealCard icon="👓" title="Optometry" eyebrow="Optometrist Glen Cowie" text="Book eye tests, vision screening, glasses, contact lens support, digital eye-strain care, and children’s vision checks with confidence." /></Link>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="section-band py-16 text-primary-foreground md:py-24">
      <div className="clinic-container">
        <SectionHeading eyebrow="Practice confidence" title="A single-location practice built for local access." light />
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
        <SectionHeading eyebrow="Patient journey" title="A simple path from booking to follow-up." />
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
          <SectionHeading eyebrow="Patient trust" title="Professional care, clearly explained." />
          <div className="grid gap-4">
            {["Confidential appointments with practical next steps.", "Medical and optometry support from one Glen Cowie practice."].map((item) => <blockquote key={item} className="rounded-2xl border border-border bg-card p-6 text-lg leading-8 shadow-soft">“{item}”</blockquote>)}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="FAQ" title="Answers before you book." />
          <div className="grid gap-3">
            <InfoBlock title="Do you accept walk-ins?" text="Please call or WhatsApp first to confirm availability for the day." />
            <InfoBlock title="How do I book?" text="Use the WhatsApp booking button or call the practice on 065 864 9186." />
            <InfoBlock title="Where is the practice?" text={address} />
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyNotice() {
  return <div className="bg-accent py-3 text-center text-sm font-bold text-accent-foreground">For emergencies, please call the practice directly.</div>;
}

function ServiceGrid({ services, field, compact = false }: { services: readonly { icon: string; title: string; detail: string }[]; field: string; compact?: boolean }) {
  return <div className={`grid gap-4 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>{services.map((service, index) => <RevealCard key={service.title} icon={service.icon} title={service.title} eyebrow={field} text={service.detail} delay={index * 0.04} />)}</div>;
}

function RevealCard({ icon, title, eyebrow, text, delay = 0 }: { icon: string; title: string; eyebrow: string; text: string; delay?: number }) {
  return (
    <motion.article {...fadeUp} transition={{ duration: 0.45, delay }} className="group min-h-52 w-full rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-all hover:-translate-y-1 hover:shadow-raised">
      <motion.span className="block text-4xl" whileHover={{ scale: 1.08, rotate: -3 }}>{icon}</motion.span>
      <span className="mt-5 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase text-clinic-red">{eyebrow}</span>
      <h2 className="mt-4 font-display text-2xl font-black text-clinic-navy">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </motion.article>
  );
}

function CompactServiceCard({ icon, title, category, detail, delay = 0 }: { icon: string; title: string; category: string; detail: string; delay?: number }) {
  return (
    <motion.article {...fadeUp} transition={{ duration: 0.4, delay }} className="group rounded-2xl border border-border bg-card p-4 text-left shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-raised">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <span className="inline-flex rounded-full bg-secondary px-2.5 py-0.5 text-xs font-bold uppercase text-clinic-red">{category}</span>
      </div>
      <h2 className="mt-3 font-display text-lg font-black text-clinic-navy">{title}</h2>
      <p className="mt-1.5 text-sm leading-5 text-muted-foreground">{detail}</p>
    </motion.article>
  );
}

function BookingBand({ cta, service }: { cta: string; service: string }) {
  return (
    <motion.div {...fadeUp} className="mt-10 rounded-2xl border border-border bg-secondary p-6 md:flex md:items-center md:justify-between md:gap-6">
      <div>
        <p className="font-display text-2xl font-black text-clinic-navy">Need help choosing the right appointment?</p>
        <p className="mt-2 text-sm text-muted-foreground">Call or WhatsApp the practice and the team will guide you to the appropriate service.</p>
      </div>
      <a href={whatsappUrl(service)} className="premium-button mt-5 inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground shadow-soft md:mt-0">{cta}</a>
    </motion.div>
  );
}

function HoursSection() {
  return (
    <motion.div {...fadeUp} className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
      <h2 className="font-display text-3xl font-black text-clinic-navy">Operating hours</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {hours.map(([day, time]) => <div key={day} className="rounded-2xl bg-secondary p-4"><p className="text-sm font-bold text-foreground">{day}</p><p className="mt-1 text-sm text-muted-foreground">{time}</p></div>)}
      </div>
    </motion.div>
  );
}

function FacilityCarousel() {
  return (
    <motion.section {...fadeUp} className="mt-12">
      <SectionHeading eyebrow="Inside the practice" title="A clear look at the facility patients visit." />
      <div className="flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:thin]">
        {facilityImages.map((image) => (
          <article key={image.title} className="min-w-[82%] snap-center overflow-hidden rounded-2xl border border-border bg-card shadow-soft sm:min-w-[48%] lg:min-w-[32%]">
            <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
            <div className="p-5">
              <h2 className="font-display text-2xl font-black text-clinic-navy">{image.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Professional spaces and equipment supporting medical and optometry visits in Glen Cowie.</p>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
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
    <motion.section {...fadeUp} className="bg-background py-16 md:py-24">
      <div className="clinic-container">
        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase text-clinic-red">{eyebrow}</p>
          <h1 className="text-4xl font-black leading-tight text-clinic-navy sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{intro}</p>
        </div>
        <PulseDivider />
        {children}
      </div>
    </motion.section>
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

function MedicalHeartbeatDiagram() {
  return (
    <svg viewBox="0 0 520 300" className="h-auto w-full text-clinic-navy" role="img" aria-label="Animated medical heartbeat diagram">
      <motion.path d="M145 150C112 108 126 62 178 62C215 62 240 86 260 118C280 86 305 62 342 62C394 62 408 108 375 150L260 256L145 150Z" fill="none" stroke="var(--clinic-red)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: "easeOut" }} />
      <path d="M30 152H132L154 122L178 184L210 62L248 222L278 152H490" fill="none" stroke="var(--clinic-red)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" className="pulse-line" />
      <text x="38" y="45" fill="currentColor" fontSize="22" fontWeight="700">Medical care</text>
      <text x="346" y="272" fill="currentColor" fontSize="22" fontWeight="700">Heartbeat</text>
    </svg>
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

function PulseSignature({ prominent = false }: { prominent?: boolean }) {
  return (
    <svg className={`pointer-events-none absolute inset-x-0 top-24 w-full text-accent ${prominent ? "h-64 opacity-55" : "h-28 opacity-25"}`} viewBox="0 0 1200 220" preserveAspectRatio="none" aria-hidden="true">
      <motion.path d="M0 124H210L236 82L265 166L300 42L340 178L372 124H680C725 48 805 48 850 124C895 200 975 200 1020 124C1042 88 1087 88 1110 124H1200" fill="none" stroke="currentColor" strokeWidth={prominent ? 10 : 6} strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
    </svg>
  );
}

function PulseDivider() {
  return (
    <svg className="mb-8 h-8 w-full text-accent opacity-50" viewBox="0 0 900 60" preserveAspectRatio="none" aria-hidden="true">
      <path className="pulse-line" d="M0 32H250L268 16L290 44L318 8L348 52L372 32H900" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function whatsappUrl(service: string) {
  const message = `Hi Dr Kgoete,\nMy name is [Name].\nI would like to book: ${service}.\nPractice: Glen Cowie.\nPreferred time: [Preferred time].`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
