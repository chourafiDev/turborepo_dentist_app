import React from "react";
import User from "./user";
import ToggleButton from "./ToggleButton";
import ActionsButtons from "./ActionsButtons";
import MobileMenu from "./MobileMenu";
import HeaderTitle from "./HeaderTitle";

const index = () => {
  return (
    <header className="w-full z-20 py-3 px-6 bg-white dark:bg-[#1b1c30] flex justify-between items-center">
      <div className="flex items-center lg:gap-4 gap-2">
        <MobileMenu />
        <ToggleButton />
        <HeaderTitle />
      </div>
      <div className="flex items-center gap-5">
        <ActionsButtons />
        <User />
      </div>
    </header>
  );
};

export default index;
