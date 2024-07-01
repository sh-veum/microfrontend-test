import { useState } from "react";
import { CustomButton } from "shadCN/CustomButton";
import { CustomCard } from "shadCN/CustomCard";
import { Button } from "@/components/ui/button";
import Hero from "prime/Hero";
import { Info } from "shadCN/Info";
import { Info as InfoType } from "@/models/Info";
import { Footer } from "shadCN/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [debug, setDebug] = useState(false);

  const debugClass = debug ? "outline outline-2 outline-red-500" : "";

  const info = Info as InfoType;

  return (
    <>
      <div>
        <h1>Host App</h1>
        <Button onClick={() => setDebug((debug) => !debug)}>
          Toggle Debug
        </Button>
        <div>
          <CustomButton />
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>
        <p>{info.framework}</p>
        <p>{info.name}</p>
        <p>{info.port}</p>
        <div className={debugClass}>
          <CustomCard />
        </div>
        <div className={debugClass}>
          <Hero />
        </div>
      </div>
      <div className={debugClass}>
        <Footer />
      </div>
    </>
  );
}

export default App;
