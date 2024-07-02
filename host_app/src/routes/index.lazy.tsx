import { createLazyFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative w-full h-full">
      <Hero />
    </div>
  );
}
