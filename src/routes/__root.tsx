import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { SiteShell } from "@/components/site/SiteShell";
import appCss from "../styles.css?url";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://drkgoete.co.za/#medicalbusiness",
      name: "Dr Kabelo Kgoete Medical Practice & Optometry",
      telephone: "+27658649186",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Medical Centre, Stand No 004 Ga-Moloi, Caprive Village",
        addressLocality: "Glen Cowie",
        postalCode: "1061",
        addressCountry: "ZA",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
      ],
      medicalSpecialty: ["PrimaryCare", "Optometry"],
    },
    {
      "@type": "Physician",
      name: "Dr Kabelo Kgoete",
      telephone: "+27658649186",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Medical Centre, Stand No 004 Ga-Moloi, Caprive Village",
        addressLocality: "Glen Cowie",
        postalCode: "1061",
        addressCountry: "ZA",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Dr Kabelo Kgoete Medical Practice & Optometry",
      telephone: "+27658649186",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Medical Centre, Stand No 004 Ga-Moloi, Caprive Village",
        addressLocality: "Glen Cowie",
        postalCode: "1061",
        addressCountry: "ZA",
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr Kabelo Kgoete Medical Practice & Optometry" },
      { name: "description", content: "Doctor and optometrist in Glen Cowie at Medical Centre Ga-Moloi. Book medical services and optometry appointments by WhatsApp." },
      { property: "og:title", content: "Dr Kabelo Kgoete Medical Practice & Optometry" },
      { property: "og:description", content: "Doctor in Glen Cowie and optometrist at Medical Centre Ga-Moloi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(structuredData) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return <SiteShell><Outlet /></SiteShell>;
}
