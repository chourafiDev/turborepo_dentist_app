"use client";

import React from "react";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import MenuItems from "./MenuItems";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/store";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const { isSidebarOpen } = useStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
    }))
  );

  return (
    <aside
      className={cn(
        "fixed z-10 h-screen lg:flex hidden flex-col bg-dark transition-all duration-500 ease-linear",
        isSidebarOpen ? "lg:w-[20%]" : "w-[5%]"
      )}
    >
      <Logo />

      <ScrollArea className="h-auto w-full">
        <MenuItems />
      </ScrollArea>
    </aside>
  );
};

export default Index;
