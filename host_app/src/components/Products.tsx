import { Suspense, lazy, useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import FloatLabel from "./FloatLabel";
import { Info } from "@/models/Info";
import { Spinner } from "./Spinner";
import { useDebugStore } from "@/stores/useDebugStore";

const LazyHero = lazy(() => import("prime/Products"));

export const Products = () => {
  const debug = useDebugStore((state) => state.debug);
  const [remoteInfo, setRemoteInfo] = useState<Info | null>(null);
  const primeDebugClass = debug ? "border-4 border-red-600" : "";

  useEffect(() => {
    const loadPrimeInfo = async () => {
      try {
        const infoModule = await import("prime/Info");
        setRemoteInfo(infoModule.default as Info);
      } catch (error) {
        console.error("Failed to load prime Info:", error);
      }
    };
    loadPrimeInfo();
  }, []);

  return (
    <>
      <ErrorBoundary
        fallback={(error) => (
          <div className="p-2 bg-destructive font-bold">
            ERROR: Hero failed to load
            <pre>{error.message}</pre>
          </div>
        )}
      >
        <Suspense
          fallback={
            <div>
              <Spinner /> Loading Hero...
            </div>
          }
        >
          <div className={primeDebugClass}>
            <FloatLabel
              info={remoteInfo ? `${remoteInfo.name}` : "Loading..."}
              isVisible={debug}
              url={remoteInfo?.url}
              port={remoteInfo?.port}
            >
              <LazyHero />
            </FloatLabel>
          </div>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
