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
import { buttonVariants } from "./ui/button";
// import { Button } from "./ui/button";

export default function Footer() {
  const buttonClass = buttonVariants({
    variant: "default",
    size: "default",
  });

  return (
    <footer className="flex items-center justify-center py-8 bg-primary text-white dark:bg-black">
      <div className="text-center space-y-4">
        <p>A footer from a remote react application</p>
        <Drawer>
          <DrawerTrigger className={buttonClass}>Open Drawer</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>This does nothing</DrawerTitle>
              <DrawerDescription>
                It's just an example of a drawer component
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose className={buttonClass}>Close Drawer</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </footer>
  );
}
