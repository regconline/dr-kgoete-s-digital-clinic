import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Doctor in Glen Cowie — Dr Kabelo Kgoete" },
      { name: "description", content: "Doctor in Glen Cowie and optometrist at Medical Centre Ga-Moloi. Book medical services and optometry appointments by WhatsApp." },
      { property: "og:title", content: "Doctor in Glen Cowie — Dr Kabelo Kgoete" },
      { property: "og:description", content: "Medical Centre Ga-Moloi healthcare and optometry in Glen Cowie." },
    ],
  }),
  component: HomePage,
});
