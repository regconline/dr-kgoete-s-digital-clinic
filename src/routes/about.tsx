import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
