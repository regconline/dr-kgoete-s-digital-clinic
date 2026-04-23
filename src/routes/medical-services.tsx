import { createFileRoute } from "@tanstack/react-router";

import { MedicalServicesPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/medical-services")({
  head: () => ({
    meta: [
      { title: "Medical Services Glen Cowie — Dr Kgoete" },
      { name: "description", content: "Medical services at Medical Centre Ga-Moloi in Glen Cowie including general consultations, screenings, chronic care, and child healthcare." },
      { property: "og:title", content: "Medical Services Glen Cowie — Dr Kgoete" },
      { property: "og:description", content: "Doctor in Glen Cowie for general consultations, health screenings, and chronic care support." },
    ],
  }),
  component: MedicalServicesPage,
});
