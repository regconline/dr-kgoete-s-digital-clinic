import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/optometrist-limpopo")({
  component: () => <Navigate to="/optometry" replace />,
});