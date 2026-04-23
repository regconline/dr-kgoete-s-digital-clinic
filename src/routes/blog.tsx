import { createFileRoute } from "@tanstack/react-router";

import { BlogPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});
