import { createFileRoute } from "@tanstack/react-router";

import { MedicalPracticePage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/medical-practice")({
  head: () => ({
    meta: [
      { title: "Medical Practice Services — Dr Kgoete" },
      { name: "description", content: "General consultations, women’s health, HIV testing, chronic care, procedures, certificates, and referrals with Dr Kgoete." },
      { property: "og:title", content: "Medical Practice — Dr Kgoete" },
      { property: "og:description", content: "General medical care and patient support in Mabopane." },
    ],
  }),
  component: MedicalPracticePage,
});
