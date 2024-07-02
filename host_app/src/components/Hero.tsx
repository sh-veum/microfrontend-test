import { Suspense, lazy, useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import FloatLabel from "./FloatLabel";
import { Info } from "@/models/Info";
import { Spinner } from "./Spinner";
import { useDebugStore } from "@/stores/useDebugStore";

const LazyHero = lazy(() => import("prime/Hero"));

export const Hero = () => {
  const debug = useDebugStore((state) => state.debug);
  const [primeInfo, setPrimeInfo] = useState<Info | null>(null);
  const primeDebugClass = debug ? "border border-2 border-red-500" : "";

  useEffect(() => {
    const loadPrimeInfo = async () => {
      try {
        const infoModule = await import("prime/Info");
        setPrimeInfo(infoModule.default as Info);
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
              <Spinner /> Loading hero...
            </div>
          }
        >
          <div className={primeDebugClass}>
            <FloatLabel
              label={
                primeInfo
                  ? `${primeInfo.port} - ${primeInfo.name}`
                  : "Loading..."
              }
              isVisible={debug}
            >
              <LazyHero />
            </FloatLabel>
          </div>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
