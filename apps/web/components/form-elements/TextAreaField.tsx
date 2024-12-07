import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import classNames from "classnames";

type TextAreaFieldProps = {
  form: any;
  label: string;
  name: string;
  required?: boolean;
};

const TextAreaField = ({ form, label, name, required }: TextAreaFieldProps) => {
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
          <FormControl>
            <Textarea
              className={cn(
                "resize-none",
                classNames({
                  "dark:border-red-500 border-red-500": fieldState.error,
                })
              )}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default TextAreaField;
