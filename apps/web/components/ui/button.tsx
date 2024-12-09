import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-lg text-[13px] font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        outline:
          "bg-transparent dark:bg-transparent px-3 py-2 text-dark-2 dark:text-white border border-mistyBlue/35 rounded-md",
        default: "bg-dark-2 text-white hover:bg-dark-2/90",
        destructive:
          "bg-red-500 text-stone-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-stone-50 dark:hover:bg-red-900/90",
        white:
          "border border-dark-2/20 text-dark-2 bg-white hover:bg-gray/80 hover:text-dark-2/80 dark:border-dark-2/40 dark:bg-gray dark:hover:text-dark-2",
        secondary:
          "dark:bg-mistyBlue/10 bg-mistyBlue/15 text-dark-2 dark:text-white",
        ghost:
          "hover:bg-mistyBlue/15 hover:text-stone-900 dark:hover:bg-mistyBlue/10 dark:hover:text-stone-50",
        link: "text-stone-900 underline-offset-4 hover:underline dark:text-stone-50",
        brand:
          "bg-brand text-white hover:bg-brand/80 focus:ring-[1px] focus:ring-brand focus:ring-offset-[1.5px] dark:ring-offset-dark-3",
        dashed:
          "border border-dashed border-mistyBlue/50 text-dark-2 dark:text-mistyBlue hover:bg-mistyBlue/10",
      },
      size: {
        default: "h-9 px-3 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "rounded-md py-3 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
