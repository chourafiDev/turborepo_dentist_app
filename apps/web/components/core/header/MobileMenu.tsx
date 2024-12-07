"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import CustomScrollbars from "@/components/CustomScrollbars";
import MenuItems from "@/components/core/sidebar/MenuItems";
import { DoubleArrowLeftIcon } from "@/utils/assets";

const MobileMenu = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="dark:text-mistyBlue text-dark-2/60 bg-mistyBlue/5 size-8 rounded-md lg:hidden flex justify-center items-center hover:text-brand hover:bg-brand/5 dark:hover:text-brand dark:hover:bg-brand/5 duration-200 ease-linear">
        <DoubleArrowLeftIcon className="size-6" />
      </DrawerTrigger>
      <DrawerContent className="h-screen top-0 left-0 right-auto mt-0 w-[350px] rounded-none">
        <CustomScrollbars>
          <MenuItems />
        </CustomScrollbars>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
