import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr Kabelo Kgoete — Glen Cowie" },
      { name: "description", content: "Learn about Dr Kabelo Kgoete Medical Practice & Optometry, a professional single-location practice in Glen Cowie." },
      { property: "og:title", content: "About Dr Kabelo Kgoete" },
      { property: "og:description", content: "Professional medical and optometry care from Medical Centre Ga-Moloi in Glen Cowie." },
    ],
  }),
  component: AboutPage,
});
