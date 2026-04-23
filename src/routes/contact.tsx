import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});
