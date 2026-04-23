import { createFileRoute } from "@tanstack/react-router";

import { MedicalServicesPage } from "@/components/site/ClinicPages";

export const Route = createFileRoute("/medical-services")({
  component: MedicalServicesPage,
});
