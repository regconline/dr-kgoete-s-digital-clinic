import { createFileRoute } from "@tanstack/react-router";

import { OptometryPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/optometry")({
  component: OptometryPage,
});
