import { createLazyFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/Dashboard";

export const Route = createLazyFileRoute("/dashboard")({
  component: DashboardComponent,
});

function DashboardComponent() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
