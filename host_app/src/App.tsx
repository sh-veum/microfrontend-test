import { useState } from "react";
import { Button } from "@/components/ui/button";
import Hero from "prime/Hero";
import { Footer } from "shadCN/Footer";
import { Info as ShadInfo } from "shadCN/Info";
import { Info as PrimeInfo } from "prime/Info";
import FloatLabel from "./components/FloatLabel";

export interface Info {
  framework: string;
  name: string;
  port: string;
}

function App() {
  const [debug, setDebug] = useState(false);

  const primeDebugClass = debug ? "outline outline-2 outline-red-500" : "";
  const shadDebugClass = debug ? "outline outline-2 outline-green-500" : "";

  const shadInfo: Info = ShadInfo;
  const primeInfo: Info = PrimeInfo;

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Host App</h1>
        <Button onClick={() => setDebug(!debug)}>Toggle Debug</Button>
        <div className="relative">
          <div className={primeDebugClass}>
            <FloatLabel
              label={`${primeInfo.port} - ${primeInfo.name}`}
              isVisible={debug}
            >
              <Hero />
            </FloatLabel>
          </div>
        </div>

        <div className={shadDebugClass}>
          <FloatLabel
            label={`${shadInfo.port} - ${shadInfo.name}`}
            isVisible={debug}
          >
            <Footer />
          </FloatLabel>
        </div>
      </div>
    </>
  );
}

export default App;
