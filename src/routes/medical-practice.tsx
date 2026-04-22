import { createFileRoute } from "@tanstack/react-router";

import { MedicalPracticePage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/medical-practice")({
  head: () => ({
    meta: [
      { title: "Medical Practice — Dr Kgoete" },
      { name: "description", content: "Medical consultations, chronic care, screenings, minor procedures, certificates, and referrals at Dr Kgoete's practice." },
      { property: "og:title", content: "Medical Practice — Dr Kgoete" },
      { property: "og:description", content: "General medical care and patient support in Mabopane." },
    ],
  }),
  component: MedicalPracticePage,
});
