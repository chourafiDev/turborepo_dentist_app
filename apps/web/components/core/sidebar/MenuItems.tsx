import { cn } from "@/lib/utils";
import { sideBarItems } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { createElement, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/store";
import { IoChevronDownOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

type Items = {
  "menu-item": string;
  "menu-link"?: string | undefined;
  "menu-icon": any;
  "has-submenu"?: boolean;
  "submenu-items"?: SubMenuItems[];
};

type SubMenuItems = { "menu-item": string; "menu-link": string };

const MenuItems = () => {
  const { isSidebarOpen } = useStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
    }))
  );

  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuSelected, setSubMenuSelected] = useState("");

  const handleLinkClick = () => {
    setSubMenuOpen(false);
    setSubMenuSelected("");
  };

  return (
    <div className="divide-y divide-mistyBlue/10">
      {sideBarItems.map((group, index) => (
        <div key={index} className="pt-2 px-3">
          <h3
            className={cn(
              "px-3 py-2 font-medium text-xs text-mistyBlue/40 whitespace-pre duration-500",
              !isSidebarOpen && "hidden translate-x-28 overflow-hidden"
            )}
          >
            {group["menu-groupe"].toUpperCase()}
          </h3>

          <ul className="mb-2 space-y-1">
            {group.items.map((item, idx) => (
              <MenuItem
                key={idx}
                item={item}
                idx={idx}
                subMenuOpen={subMenuOpen}
                subMenuSelected={subMenuSelected}
                setSubMenuOpen={setSubMenuOpen}
                setSubMenuSelected={setSubMenuSelected}
                handleLinkClick={handleLinkClick}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;

const MenuItem = ({
  item,
  idx,
  subMenuOpen,
  subMenuSelected,
  setSubMenuOpen,
  setSubMenuSelected,
  handleLinkClick,
}: {
  item: Items;
  idx: number;
  subMenuOpen: boolean;
  subMenuSelected: string;
  setSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSubMenuSelected: React.Dispatch<React.SetStateAction<string>>;
  handleLinkClick: () => void;
}) => {
  const pathname = usePathname();

  const { isSidebarOpen } = useStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
    }))
  );

  const toggleSubMenu = (subMenu: string) => {
    if (isSidebarOpen) {
      setSubMenuOpen(subMenuSelected !== subMenu || !subMenuOpen);
    }

    setSubMenuSelected(subMenu);
  };

  return item["has-submenu"] ? (
    <li className="relative">
      <button
        onClick={() => toggleSubMenu(item["menu-item"])}
        className={cn(
          "group w-full flex justify-between relative items-center gap-4 text-sm font-medium text-mistyBlue hover:bg-mistyBlue/10 hover:text-white duration-300 p-[10px] rounded-lg",
          subMenuSelected === item["menu-item"]! && "bg-mistyBlue/10 text-white"
        )}
      >
        <div className="flex items-center gap-4">
          {createElement(item["menu-icon"], {
            width: 20,
            height: 20,
          })}

          <p
            style={{ transitionDelay: `${idx + 1}00ms` }}
            className={cn(
              "whitespace-pre duration-300",
              !isSidebarOpen &&
                "opacity-0 absolute left-10 translate-x-28 overflow-hidden"
            )}
          >
            {item["menu-item"]}
          </p>
        </div>
        {isSidebarOpen && (
          <IoChevronDownOutline
            className={cn(
              "duration-300",
              subMenuOpen &&
                subMenuSelected === item["menu-item"]! &&
                "rotate-180"
            )}
          />
        )}

        <div
          className={cn(
            "fixed left-32 z-[99] bg-dark shadow-2xl shadow-dark-2/5 text-[13px] font-medium whitespace-pre text-dark-2 rounded-md px-0 py-0 w-0 overflow-hidden group-hover:w-fit group-hover:py-3 group-hover:px-3 group-hover:left-14 group-hover:duration-500",
            isSidebarOpen && "hidden"
          )}
        >
          <ul className="space-y-3 px-3">
            {item["submenu-items"]?.map((subItem, idx) => (
              <li key={idx} className="text-left text-white">
                <Link
                  href={subItem["menu-link"]}
                  className="hover:text-brand duration-100"
                >
                  {subItem["menu-item"]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </button>

      <AnimatePresence>
        {subMenuOpen && subMenuSelected === item["menu-item"] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="my-2 ml-11 flex flex-col space-y-4 relative overflow-hidden border-l border-dashed border-mistyBlue/50"
          >
            {item["submenu-items"]?.map((subItem, idx) => {
              return (
                <Link
                  key={idx}
                  href={subItem["menu-link"]}
                  style={{ transitionDelay: `${idx + 1}00ms` }}
                  className={cn(
                    "whitespace-pre flex items-center gap-2 text-sm font-medium text-mistyBlue hover:text-white duration-300",
                    !isSidebarOpen &&
                      "opacity-0 absolute left-10 translate-x-28 overflow-hidden",
                    pathname === subItem["menu-link"] && "text-white"
                  )}
                >
                  <div className="h-[1px] w-2 rounded-full bg-mistyBlue/50"></div>
                  <span>{subItem["menu-item"]}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  ) : (
    <li key={idx}>
      <Link
        href={item["menu-link"]!}
        className={cn(
          "group flex relative items-center gap-4 text-sm font-medium text-mistyBlue hover:bg-mistyBlue/10 hover:text-white duration-300 p-[10px] rounded-lg",
          pathname === item["menu-link"] &&
            !subMenuSelected &&
            "bg-mistyBlue/10 text-white"
        )}
        onClick={handleLinkClick}
      >
        {createElement(item["menu-icon"], {
          width: 20,
          height: 20,
        })}

        <p
          style={{ transitionDelay: `${idx + 1}00ms` }}
          className={cn(
            "whitespace-pre duration-300",
            !isSidebarOpen &&
              "opacity-0 absolute left-10 translate-x-28 overflow-hidden"
          )}
        >
          {item["menu-item"]}
        </p>

        <div
          className={cn(
            "fixed left-32 z-[99] bg-dark shadow-2xl shadow-dark-2/5 text-[13px] font-medium whitespace-pre text-white hover:text-brand duration-100 rounded-md px-0 py-0 w-0 overflow-hidden group-hover:w-fit group-hover:py-3 group-hover:px-3 group-hover:left-14 group-hover:duration-500",
            isSidebarOpen && "hidden"
          )}
        >
          <span className="px-3">{item["menu-item"]}</span>
        </div>

        {item["menu-item"] == "Dashboard" && (
          <span
            className={cn(
              "px-2 py-1 rounded-md bg-purple/20 text-purple text-xs",
              !isSidebarOpen &&
                "opacity-0 absolute left-10 translate-x-28 overflow-hidden"
            )}
          >
            statistics
          </span>
        )}
        {item["menu-item"] == "Staff" && (
          <span
            className={cn(
              "px-2 py-1 rounded-md bg-orange/20 text-orange text-xs",
              !isSidebarOpen &&
                "opacity-0 absolute left-10 translate-x-28 overflow-hidden"
            )}
          >
            employees
          </span>
        )}
        {item["menu-item"] == "Reports" && (
          <span
            className={cn(
              "size-5 font-medium flex justify-center items-center rounded-md bg-green/20 text-green text-xs",
              !isSidebarOpen &&
                "opacity-0 absolute left-10 translate-x-28 overflow-hidden"
            )}
          >
            2
          </span>
        )}
        {item["menu-item"] == "Appointments" && (
          <span
            className={cn(
              "size-5 font-medium flex justify-center items-center rounded-md bg-green/20 text-green text-xs",
              !isSidebarOpen &&
                "opacity-0 absolute left-10 translate-x-28 overflow-hidden"
            )}
          >
            8
          </span>
        )}
      </Link>
    </li>
  );
};
