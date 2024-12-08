import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import classNames from "classnames";

type InputFieldProps = {
  form: any;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
};

const InputField = ({
  form,
  label,
  name,
  type = "text",
  required,
}: InputFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <div className="flex justify-between items-center mb-2">
            <FormLabel>
              {label}
              {required && (
                <span className="text-red-600 text-base ml-1">*</span>
              )}
            </FormLabel>
            <FormMessage />
          </div>
          <FormControl>
            <Input
              type={type}
              className={cn(
                fieldState.error && "dark:border-red-500 border-red-500 focus:ring-0"
              )}
              {...field}
              onChange={(e) => {
                const value = e.target.value;
                if (type === "number") {
                  field.onChange(Number(value));
                } else {
                  field.onChange(value);
                }
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default InputField;
