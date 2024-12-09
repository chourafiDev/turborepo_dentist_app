import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type InputFieldProps = {
  form: any;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

const InputField = ({
  form,
  label,
  name,
  type = "text",
  required,
  placeholder,
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
                fieldState.error &&
                  "dark:border-red-500 border-red-500 focus:ring-0"
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
              placeholder={placeholder}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default InputField;
