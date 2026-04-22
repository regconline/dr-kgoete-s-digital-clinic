import { createFileRoute } from "@tanstack/react-router";

import { OptometryPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/optometry")({
  head: () => ({
    meta: [
      { title: "Optometry Practice — Dr Kgoete Limpopo" },
      { name: "description", content: "Eye exams, prescription lenses, frames, contact lens guidance, and eye-health referrals with Dr Kgoete Optometry." },
      { property: "og:title", content: "Optometry Practice — Dr Kgoete" },
      { property: "og:description", content: "Eye exams, lens prescriptions, frames, and optometry referrals in Mabopane." },
    ],
  }),
  component: OptometryPage,
});
