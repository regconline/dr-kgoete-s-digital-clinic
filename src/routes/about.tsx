import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr Kabelo Kgoete — Medical & Optometry" },
      { name: "description", content: "Meet Dr Kabelo Kgoete, a dual-qualified medical doctor and optometrist serving Limpopo with accessible, precise care." },
      { property: "og:title", content: "About Dr Kgoete" },
      { property: "og:description", content: "A local practice combining medical care and optometry with clear patient support." },
    ],
  }),
  component: AboutPage,
});
