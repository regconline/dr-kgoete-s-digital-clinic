import { createFileRoute } from "@tanstack/react-router";

import { BlogPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Health Journal — Dr Kgoete" },
      { name: "description", content: "Patient-friendly articles on HIV testing, eye care, women’s health, circumcision, and primary healthcare in Limpopo." },
      { property: "og:title", content: "Health Journal — Dr Kgoete" },
      { property: "og:description", content: "Practical medical and optometry education for local patients." },
    ],
  }),
  component: BlogPage,
});
