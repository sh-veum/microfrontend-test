import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/SideBar";
import { Separator } from "@/components/ui/separator";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";
// import { Footer } from "shadCN/Footer";

export const Route = createRootRouteWithContext<{
  auth: null;
  // queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Separator className="my-2" />
        <div className="flex flex-col lg:flex-row flex-1">
          <div className="lg:w-[5vw] min-w-fit">
            <SideBar />
          </div>
          <Separator className="lg:hidden my-2" orientation="horizontal" />
          <div className="flex w-screen lg:w-[90vw]">
            <Separator
              className="hidden lg:block mx-2"
              orientation="vertical"
            />
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
      <Suspense>
        <TanStackRouterDevtools position="bottom-right" />
      </Suspense>
    </>
  );
}
