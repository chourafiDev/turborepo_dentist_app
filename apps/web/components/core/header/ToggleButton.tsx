"use client";

import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { DoubleArrowLeftIcon } from "@/utils/assets";

const ToggleButton = () => {
  const { toggleSidebar } = useStore(
    useShallow((state) => ({
      toggleSidebar: state.toggleSidebar,
    }))
  );

  return (
    <button
      onClick={toggleSidebar}
      className="dark:text-mistyBlue text-dark-2/60 bg-mistyBlue/5 size-8 rounded-md lg:flex hidden justify-center items-center hover:text-brand hover:bg-brand/5 dark:hover:text-brand dark:hover:bg-brand/5 duration-200 ease-linear"
    >
      <DoubleArrowLeftIcon className="size-6" />
    </button>
  );
};

export default ToggleButton;
