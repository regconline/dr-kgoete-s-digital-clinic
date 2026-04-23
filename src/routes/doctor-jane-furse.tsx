import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/doctor-jane-furse")({
  component: () => <Navigate to="/medical-services" replace />,
});