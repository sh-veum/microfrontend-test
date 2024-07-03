import { createLazyFileRoute } from "@tanstack/react-router";
import { Products } from "@/components/Products";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Products />
    </div>
  );
}
