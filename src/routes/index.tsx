import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr Kgoete Medical Practice & Optometry" },
      { name: "description", content: "Dr Kabelo Kgoete Medical Practice & Optometry in Mabopane provides primary healthcare, chronic care, eye exams, lenses, and patient support." },
      { property: "og:title", content: "Dr Kgoete Medical Practice & Optometry" },
      { property: "og:description", content: "Primary healthcare and optometry services in Mabopane." },
    ],
  }),
  component: HomePage,
});
