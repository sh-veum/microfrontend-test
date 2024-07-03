import {
  ErrorComponent,
  createRouter as createTanstackRouter,
} from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { Spinner } from "@/components/Spinner";

export function createRouter() {
  return createTanstackRouter({
    routeTree,
    defaultPendingComponent: () => (
      <div className={`p-2 text-2xl`}>
        <Spinner />
      </div>
    ),
    context: {
      auth: undefined!,
    },
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  });
}

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
