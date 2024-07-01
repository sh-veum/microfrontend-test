import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-8 bg-primary text-white">
      <div className="text-center space-y-4">
        <p>A footer from a remote react application</p>
        <Drawer>
          <DrawerTrigger>
            <Button className="font-bold">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>This does nothing</DrawerTitle>
              <DrawerDescription>
                It's just an example of a drawer component
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline" className="border-primary">
                  Close Drawer
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </footer>
  );
};
