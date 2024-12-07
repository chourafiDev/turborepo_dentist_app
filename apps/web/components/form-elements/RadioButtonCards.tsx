import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioOption {
  value: string;
  label: string;
}

type RadioButtonCardsProps = {
  form: any;
  name: string;
  label: string;
  data: RadioOption[];
  required?: boolean;
};

export function RadioButtonCards({
  form,
  name,
  label,
  data,
  required,
}: RadioButtonCardsProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <div className="flex justify-between items-center mb-1">
            <FormLabel>
              {label}{" "}
              {required && <span className="text-red-600 text-base">*</span>}
            </FormLabel>
            <FormMessage />
          </div>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-wrap"
            >
              {data.map(({ value, label }) => (
                <FormItem key={value}>
                  <FormControl className="sr-only">
                    <RadioGroupItem value={value} />
                  </FormControl>
                  <FormLabel
                    className={cn(
                      "cursor-pointer flex items-center gap-2 font-medium border border-dashed px-5 py-[13px] rounded-lg duration-100 ease-in",
                      form.watch(name) == value
                        ? "bg-brand/5 border-brand/10 dark:text-brand text-brand"
                        : "hover:bg-gray/10 border-mistyBlue/30 text-dark-2/80",
                      fieldState.error && "dark:border-red-500 border-red-500"
                    )}
                  >
                    <span
                      className={cn(
                        "size-3 rounded-full border",
                        form.watch(name) == value
                          ? "border-brand border-4"
                          : "border-mistyBlue"
                      )}
                    ></span>
                    {label}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export default RadioButtonCards;
