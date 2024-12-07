import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select as SelectUI,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import classNames from "classnames";

type SelectProps = {
  form: any;
  name: string;
  label: string;
  data: { value: string; label: string }[];
  required: boolean;
  placeholder?: string;
};

const SelectField = ({
  form,
  name,
  label,
  data,
  required,
  placeholder,
}: SelectProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <div className="flex justify-between items-center mb-2">
            <FormLabel>
              {label}{" "}
              {required && <span className="text-red-600 text-base">*</span>}
            </FormLabel>
            <FormMessage />
          </div>
          <SelectUI onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger
                className={classNames({
                  "dark:border-red-500 border-red-500": fieldState.error,
                })}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {data.map(({ value, label }, i) => (
                <SelectItem key={i} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectUI>
        </FormItem>
      )}
    />
  );
};

export default SelectField;
