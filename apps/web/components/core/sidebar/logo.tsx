import { AppLogo, AppSmallLogo } from "@/utils/assets";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/store";
import Link from "next/link";

const Logo = () => {
  const { isSidebarOpen } = useStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
    }))
  );

  return (
    <div className="py-4 flex justify-center items-center bg-dark-3/40">
      <Link href="/">
        {isSidebarOpen ? (
          <AppLogo className="w-44 h-8" />
        ) : (
          <AppSmallLogo className="size-10" />
        )}
      </Link>
    </div>
  );
};

export default Logo;
