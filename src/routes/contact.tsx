import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Dr Kgoete — WhatsApp or Call" },
      { name: "description", content: "Book Dr Kgoete Medical Practice & Optometry by WhatsApp, phone, or email for same-day appointment availability." },
      { property: "og:title", content: "Contact Dr Kgoete" },
      { property: "og:description", content: "Call or email Dr Kgoete Medical Practice & Optometry for appointments and enquiries." },
    ],
  }),
  component: ContactPage,
});
