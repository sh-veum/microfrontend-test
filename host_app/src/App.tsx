import { useState } from "react";
import { CustomButton } from "shadCN/CustomButton";
import { CustomCard } from "shadCN/CustomCard";
import { Button } from "@/components/ui/button";
import Hero from "prime/Hero";

function App() {
  const [count, setCount] = useState(0);
  const [debug, setDebug] = useState(false);

  const debugClass = debug ? "outline outline-2 outline-red-500" : "";

  return (
    <div>
      <h1>Host App</h1>
      <Button onClick={() => setDebug((debug) => !debug)}>Toggle Debug</Button>
      <div>
        <CustomButton />
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <div className={debugClass}>
        <CustomCard />
      </div>
      <div className={debugClass}>
        <Hero />
      </div>
    </div>
  );
}

export default App;
