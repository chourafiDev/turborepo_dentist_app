import {
  ArrowDownIcon,
  InfoIcon,
  LogoutIcon,
  SettingsIcon,
  UserIcon,
  user,
} from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const User = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-3 border-l border-mistyBlue/40 pl-5">
          <div className="size-9 rounded-full overflow-hidden relative">
            <Image
              src={user}
              alt="user"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="md:block hidden">
            <h6 className="text-dark-2 dark:text-white font-semibold text-sm">
              Abdelmonaime Chourafi
            </h6>
            <p className="text-dark-2/60 text-start dark:text-white/60 font-medium text-sm">
              Super Admin
            </p>
          </div>
          <ArrowDownIcon className="size-5 dark:text-white text-dark-2 ml-3 md:block hidden" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px]">
        <ul className="">
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 text-dark-2 dark:text-white font-medium text-sm px-2 py-2 rounded-lg hover:text-brand dark:hover:text-brand hover:bg-mistyBlue/10 duration-200 ease-in"
            >
              <UserIcon className="size-5" />
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 text-dark-2 dark:text-white font-medium text-sm px-2 py-2 rounded-lg hover:text-brand dark:hover:text-brand hover:bg-mistyBlue/10 duration-200 ease-in"
            >
              <SettingsIcon className="size-5" />
              Account Setting
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 text-dark-2 dark:text-white font-medium text-sm px-2 py-2 rounded-lg hover:text-brand dark:hover:text-brand hover:bg-mistyBlue/10 duration-200 ease-in"
            >
              <InfoIcon className="size-5" />
              Help
            </Link>
          </li>
        </ul>

        <button className="text-mistyBlue w-full hover:text-white bg-mistyBlue/5 hover:bg-brand flex justify-center items-center gap-2 py-2 rounded-lg duration-200 mt-3 font-medium text-[13px]">
          <LogoutIcon className="size-5" />
          Logout
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default User;
