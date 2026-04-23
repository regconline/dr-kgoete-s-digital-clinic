import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/medical-practice")({
  component: () => <Navigate to="/medical-services" />,
});
