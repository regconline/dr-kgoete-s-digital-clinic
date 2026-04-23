import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dr Kgoete — Glen Cowie" },
      { name: "description", content: "Contact Dr Kabelo Kgoete Medical Practice & Optometry at Medical Centre Ga-Moloi, Glen Cowie. Call or WhatsApp 065 864 9186." },
      { property: "og:title", content: "Contact Dr Kgoete — Glen Cowie" },
      { property: "og:description", content: "Book by WhatsApp or call the Glen Cowie medical and optometry practice." },
    ],
  }),
  component: ContactPage,
});
