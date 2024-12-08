"use client";

import React from "react";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/store";
import { cn } from "@/lib/utils";

const PageWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isSidebarOpen } = useStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
    }))
  );
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col ml-auto transition-all duration-500 ease-linear",
        isSidebarOpen ? "lg:w-[80%] w-full" : "w-[95%]"
      )}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
