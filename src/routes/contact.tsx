import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dr Kgoete — Book an Appointment" },
      { name: "description", content: "Contact Dr Kabelo Kgoete Medical Practice & Optometry in Mabopane for medical appointments and eye exams." },
      { property: "og:title", content: "Contact Dr Kgoete" },
      { property: "og:description", content: "Call or email Dr Kgoete Medical Practice & Optometry for appointments and enquiries." },
    ],
  }),
  component: ContactPage,
});
