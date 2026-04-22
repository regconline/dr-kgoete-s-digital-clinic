import { createFileRoute } from "@tanstack/react-router";

import { SeoLocationPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/optometrist-limpopo")({
  head: () => ({
    meta: [
      { title: "Optometrist in Limpopo — Dr Kgoete" },
      { name: "description", content: "Optometrist in Limpopo for eye exams, prescription lenses, frames, contact lens guidance, and eye-health referral support." },
      { property: "og:title", content: "Optometrist in Limpopo — Dr Kgoete" },
      { property: "og:description", content: "Eye exams, lenses, frames, and optometry support for Limpopo patients." },
    ],
  }),
  component: () => <SeoLocationPage eyebrow="Optometrist Limpopo" title="Premium optometry care for Limpopo patients." intro="Clearer vision, practical prescriptions, and eye-health guidance from an integrated medical and optometry practice." location="Limpopo" service="optometry care" />,
});
