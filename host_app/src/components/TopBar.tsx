import { useRouterState } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Spinner } from "./Spinner";
import { useDebugStore } from "@/stores/useDebugStore";

function RouterSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  return <Spinner show={isLoading} />;
}

export const TopBar = () => {
  const toggleDebug = useDebugStore((state) => state.toggleDebug);
  const debug = useDebugStore((state) => state.debug);

  return (
    <div className="flex flex-wrap justify-between mx-4 my-2">
      <div className="flex">
        <p className="text-3xl">Microfrontend Test Site</p>
        {/* Show a global spinner when the router is transitioning */}
        <div className="text-3xl">
          <RouterSpinner />
        </div>
      </div>
      <div className="flex items-center mt-2 sm:mt-0">
        <p
          className={`mr-4 font-bold ${debug ? "text-green-500" : "text-red-500"}`}
        >
          Debug: {debug ? "enabled" : "disabled"}
        </p>
        <Button
          variant="outline"
          className="hover:bg-border border-2 border-destructive"
          onClick={toggleDebug}
        >
          Toggle Debug
        </Button>
      </div>
    </div>
  );
};
