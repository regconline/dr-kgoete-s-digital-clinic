import { createFileRoute } from "@tanstack/react-router";

import { OptometryPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/optometry")({
  head: () => ({
    meta: [
      { title: "Optometry Practice — Dr Kgoete" },
      { name: "description", content: "Book eye exams, vision testing, prescription lenses, contact lens guidance, and frame selection at Dr Kgoete Optometry." },
      { property: "og:title", content: "Optometry Practice — Dr Kgoete" },
      { property: "og:description", content: "Eye exams, lens prescriptions, frames, and optometry referrals in Mabopane." },
    ],
  }),
  component: OptometryPage,
});
