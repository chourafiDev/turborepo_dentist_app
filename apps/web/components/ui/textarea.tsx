import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-md text-dark-2/80 font-medium border border-mistyBlue/35 bg-white px-3 py-2 text-sm placeholder:text-slate-50 outline-none disabled:cursor-not-allowed duration-100 ease-in disabled:opacity-50 dark:border-mistyBlue/60 dark:bg-transparent dark:text-white dark:placeholder:text-white/80 focus:ring-[1.5px] focus:ring-brand focus:ring-offset-[1.5px] dark:ring-offset-dark-3",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
