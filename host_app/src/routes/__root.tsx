import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { SideBar } from "@/components/SideBar";
import { Separator } from "@/components/ui/separator";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Suspense } from "react";
import { TanStackRouterDevtools } from "@/components/RouterDevTools";

export const Route = createRootRouteWithContext<{
  auth: null;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div>
          <TopBar />
          <div className="py-2">
            <Separator />
          </div>
        </div>
        <div className="flex flex-grow max-lg:flex-col lg:flex-row">
          <div className="flex items-start h-full w-min">
            <SideBar />
          </div>
          <div className="px-2 h-full max-lg:hidden">
            <Separator orientation="vertical" />
          </div>
          <div className="py-2 w-full lg:hidden">
            <Separator orientation="horizontal" />
          </div>
          <div className="flex-grow p-2 overflow-y-auto">
            <Outlet />
          </div>
        </div>
        <div className="flex-shrink-0">
          <Footer />
        </div>
      </div>
      <Suspense>
        <TanStackRouterDevtools position="bottom-right" />
      </Suspense>
    </>
  );
}
