import { Suspense, lazy, useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import FloatLabel from "./FloatLabel";
import { Info } from "@/models/Info";
import { Spinner } from "./Spinner";
import { useDebugStore } from "@/stores/useDebugStore";

const LazyFooter = lazy(() => import("shadCN/Footer"));

export const Footer = () => {
  const debug = useDebugStore((state) => state.debug);
  const [remoteInfo, setRemoteInfo] = useState<Info | null>(null);
  const shadDebugClass = debug ? "border-4 border-orange-600" : "";

  useEffect(() => {
    const loadShadInfo = async () => {
      try {
        const infoModule = await import("shadCN/Info");
        setRemoteInfo(infoModule.default as Info);
      } catch (error) {
        console.error("Failed to load shadCN Info:", error);
      }
    };
    loadShadInfo();
  }, []);

  return (
    <ErrorBoundary
      fallback={(error) => (
        <div className="h-48 w-full bg-destructive font-bold">
          ERROR: Footer failed to load
          <pre>{error.message}</pre>
        </div>
      )}
    >
      <Suspense
        fallback={
          <div>
            <Spinner /> Loading footer...
          </div>
        }
      >
        <div className={shadDebugClass}>
          <FloatLabel
            info={remoteInfo ? `${remoteInfo.name}` : "Loading..."}
            isVisible={debug}
            url={remoteInfo?.url}
            port={remoteInfo?.port}
          >
            <LazyFooter />
          </FloatLabel>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};
