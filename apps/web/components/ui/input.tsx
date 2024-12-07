import * as React from "react";

import { cn } from "@/lib/utils";
import { EyeClosedIcon, EyeIcon } from "@/utils/assets";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [inputType, setInputType] = React.useState(type || "text");

    const togglePasswordVisibility = () => {
      setInputType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    };
    return (
      <div className={cn("relative", className)}>
        <input
          type={inputType}
          className={cn(
            "flex w-full outline-none rounded-md text-dark-2/80 dark:text-gray font-normal border border-mistyBlue/35 bg-white text-sm duration-100 ease-in file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-mistyBlue/60 dark:bg-transparent dark:placeholder:text-gray/50",
            type === "password" ? "pl-3 pr-10 py-[10px]" : "px-3 py-[10px]",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-0 top-0 text-dark-2/60 dark:text-mistyBlue h-full p-3 text-lg"
            onClick={togglePasswordVisibility}
          >
            {inputType === "password" ? (
              <EyeIcon className="size-5" />
            ) : (
              <EyeClosedIcon className="size-5" />
            )}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
