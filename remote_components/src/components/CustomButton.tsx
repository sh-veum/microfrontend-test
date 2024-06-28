import { useState } from "react";
import { Button } from "@/components/ui/button";

export const CustomButton = () => {
  const [state, setState] = useState(0);

  return (
    <Button
      className="bg-destructive"
      onClick={() => setState((prev) => prev + 1)}
    >
      Clicked {state} times
    </Button>
  );
};
