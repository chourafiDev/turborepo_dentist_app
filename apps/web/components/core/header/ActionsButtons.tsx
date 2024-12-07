"use client";

import { useTheme } from "next-themes";
import {
  BellIcon,
  MaximizeIcon,
  MinimizeIcon,
  MoonIcon,
  StethoscopeIcon,
  SunIcon,
} from "@/utils/assets";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const ActionsButtons = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const [isFullScreen, setIsFullScreen] = useState(false);

  const enterFullScreen = () => {
    const element = document.documentElement as HTMLElement & {
      mozRequestFullScreen?: () => Promise<void>;
      webkitRequestFullscreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    };

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      element.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  const exitFullScreen = () => {
    const doc = document as Document & {
      mozCancelFullScreen?: () => Promise<void>;
      webkitExitFullscreen?: () => Promise<void>;
      msExitFullscreen?: () => Promise<void>;
    };

    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      // Firefox
      doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      // Chrome, Safari and Opera
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      // IE/Edge
      doc.msExitFullscreen();
    }
    setIsFullScreen(false);
  };

  return (
    <div className="flex items-center gap-5">
      <button
        onClick={isFullScreen ? exitFullScreen : enterFullScreen}
        className="text-dark-2/60 dark:text-white/90 outline-none font-bold hover:text-brand dark:hover:text-brand duration-300 ease-in"
      >
        {isFullScreen ? (
          <MinimizeIcon className="size-6" />
        ) : (
          <MaximizeIcon className="size-6" />
        )}
      </button>

      <button
        onClick={toggleTheme}
        className="text-dark-2/60 dark:text-white/90 outline-none font-bold hover:text-brand dark:hover:text-brand duration-300 ease-in"
      >
        {theme === "dark" ? (
          <SunIcon className="size-6" />
        ) : (
          <MoonIcon className="size-6" />
        )}
      </button>

      <Popover>
        <PopoverTrigger asChild>
          <button className="text-dark-2/60 dark:text-white/90 text-xl relative hover:text-brand dark:hover:text-brand duration-300 ease-in">
            <BellIcon className="size-5" />
            <div className="absolute -top-1 -right-[2px]">
              <span className="relative flex h-[8px] w-[8px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-sky-500"></span>
              </span>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[450px]">
          <ul className="divide-y divide-dashed divide-mistyBlue/30">
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-5">
                <div className="bg-brand/10 size-10 rounded-full flex items-center justify-center">
                  <StethoscopeIcon className="size-5 text-brand" />
                </div>
                <div className="flex-1 space-y-[2px]">
                  <p className="text-white font-medium text-sm">
                    New appointment added
                  </p>
                  <p className="text-mistyBlue/80 text-xs">
                    Lorem ipsum dolor, sit amet.
                  </p>
                </div>
              </div>
              <p className="text-mistyBlue/90 font-medium text-xs">
                45 min ago
              </p>
            </li>
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-5">
                <div className="bg-brand/10 size-10 rounded-full flex items-center justify-center">
                  <StethoscopeIcon className="size-5 text-brand" />
                </div>
                <div className="flex-1 space-y-[2px]">
                  <p className="text-white font-medium text-sm">
                    New patient added
                  </p>
                  <p className="text-mistyBlue/80 text-xs">
                    Lorem ipsum dolor, sit amet.
                  </p>
                </div>
              </div>
              <p className="text-mistyBlue/90 font-medium text-xs">2 min ago</p>
            </li>
            <li className="flex items-center justify-between py-3">
              <div className="flex items-center gap-5">
                <div className="bg-brand/10 size-10 rounded-full flex items-center justify-center">
                  <StethoscopeIcon className="size-5 text-brand" />
                </div>
                <div className="flex-1 space-y-[2px]">
                  <p className="text-white font-medium text-sm">
                    Patient report made
                  </p>
                  <p className="text-mistyBlue/80 text-xs">
                    Lorem ipsum dolor, sit amet.
                  </p>
                </div>
              </div>
              <p className="text-mistyBlue/90 font-medium text-xs">
                14 min ago
              </p>
            </li>
          </ul>

          <Link
            href="/"
            className="text-mistyBlue hover:text-white bg-mistyBlue/5 hover:bg-brand flex justify-center py-2 rounded-lg duration-200 mt-3 font-medium text-[13px]"
          >
            Show all notification
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ActionsButtons;
