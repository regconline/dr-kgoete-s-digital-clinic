import { createFileRoute } from "@tanstack/react-router";

import { SeoLocationPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/gp-glencowie")({
  head: () => ({
    meta: [
      { title: "GP in Glencowie — Dr Kgoete" },
      { name: "description", content: "Book a GP consultation near Glencowie with Dr Kabelo Kgoete for general medical care, testing, chronic care, and referrals." },
      { property: "og:title", content: "GP in Glencowie — Dr Kgoete" },
      { property: "og:description", content: "Accessible medical consultations and patient support for Glencowie communities." },
    ],
  }),
  component: () => <SeoLocationPage eyebrow="GP Glencowie" title="Trusted GP services for Glencowie patients." intro="Local medical care with clear communication, same-day booking options, and professional follow-through." location="Glencowie" service="GP care" />,
});
