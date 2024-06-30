import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CustomButton } from "./components/CustomButton";
import { CustomCard } from "./components/CustomCard";

function App() {
  return (
    <>
      <Card>
        <p className="text-4xl">Hello</p>
        <Button>Yo</Button>
        <CustomButton />
        <CustomCard />
      </Card>
    </>
  );
}

export default App;
