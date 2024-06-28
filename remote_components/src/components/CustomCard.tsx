import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const CustomCard = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <Card>
        <p className="text-4xl">Hello</p>
        <Button onClick={() => setState((prev) => prev + 1)}>
          Clicked {state} times
        </Button>
      </Card>
    </>
  );
};
