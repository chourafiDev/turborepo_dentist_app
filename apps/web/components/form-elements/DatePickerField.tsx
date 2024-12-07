import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import classNames from "classnames";
import { CalendarLineIcon } from "@/utils/assets";

type DatePickerFieldProps = {
  form: any;
  name: string;
  label: string;
  required: boolean;
};

const DatePickerField = ({
  form,
  name,
  label,
  required,
}: DatePickerFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="flex flex-col">
          <div className="flex justify-between items-center">
            <FormLabel>
              {label}{" "}
              {required && <span className="text-red-600 text-base">*</span>}
            </FormLabel>
            <FormMessage />
          </div>
          <Popover modal={true}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-between text-left font-medium shadow-none py-5 border-mistyBlue/35 dark:border-mistyBlue/55 dark:text-white dark:bg-transparent",
                    !field.value && "text-dark-2",
                    classNames({
                      "dark:border-red-500 border-red-500": fieldState.error,
                    })
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarLineIcon className="size-4" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
};

export default DatePickerField;
