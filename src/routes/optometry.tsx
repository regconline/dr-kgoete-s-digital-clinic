import { createFileRoute } from "@tanstack/react-router";

import { OptometryPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/optometry")({
  head: () => ({
    meta: [
      { title: "Optometrist Glen Cowie — Dr Kgoete" },
      { name: "description", content: "Optometrist Glen Cowie for eye tests, vision screening, eye-health exams, prescription glasses, and contact lens fittings." },
      { property: "og:title", content: "Optometrist Glen Cowie — Dr Kgoete" },
      { property: "og:description", content: "Eye tests and optometry services at Medical Centre Ga-Moloi in Glen Cowie." },
    ],
  }),
  component: OptometryPage,
});
