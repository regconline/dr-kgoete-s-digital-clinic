import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/gp-glencowie")({
  component: () => <Navigate to="/medical-services" replace />,
});