import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Medical Practice & Optometry — Dr Kgoete" },
      { name: "description", content: "Premium medical practice and optometry care with fast WhatsApp booking, same-day appointments, and trusted support in Limpopo." },
      { property: "og:title", content: "Dr Kgoete Medical Practice & Optometry" },
      { property: "og:description", content: "Primary healthcare and optometry services in Mabopane." },
    ],
  }),
  component: HomePage,
});
