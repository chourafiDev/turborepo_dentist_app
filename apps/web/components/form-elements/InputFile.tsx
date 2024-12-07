import React from "react";
import { cn, convertToBase64 } from "@/lib/utils";
import { ACCEPTED_FILE_TYPES } from "@/lib/validation";
import { InboxInIcon } from "@/utils/assets";
import { Controller } from "react-hook-form";

type InputFileProps = {
  form: any;
  name: string;
  error: any;
  setBase64: (value: string) => void;
  setFileName: (value: string) => void;
  setFileSize: (value: number) => void;
  required: boolean;
};

const InputFile = ({
  form,
  name,
  error,
  setBase64,
  setFileName,
  setFileSize,
  required,
}: InputFileProps) => {
  return (
    <div className="w-full mt-3">
      <div className="flex justify-between items-center mb-1">
        <p className="font-medium text-sm text-dark-2 dark:text-white">
          Choose Image{" "}
          {required && <span className="text-red-600 text-base">*</span>}
        </p>
        {error && typeof error === "string" && (
          <p className="text-[0.8rem] font-medium text-red-600 mt-1">{error}</p>
        )}
      </div>
      <Controller
        name="image"
        control={form.control}
        render={({ field, fieldState }) => (
          <label
            htmlFor={name}
            className={cn(
              "border border-dashed border-mistyBlue/50 flex justify-center items-center w-full cursor-pointer px-4 py-16 rounded-md text-mistyBlue text-center",
              fieldState.error && "dark:border-red-500 border-red-500"
            )}
          >
            <p className="flex flex-col justify-center items-center gap-2">
              <InboxInIcon className="size-10 text-dark-2/30 dark:text-white/60" />
              <span className="text-dark-2/30 dark:text-white/30 text-xs font-medium">
                Supports: JPEG, JPG, PNG
              </span>
            </p>
            <input
              type="file"
              id={name}
              className="sr-only"
              name={field.name}
              ref={field.ref}
              onBlur={field.onBlur}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  const file = e.target.files[0];
                  setFileName(file.name);
                  setFileSize(file.size);
                  field.onChange(e.target.files);
                  convertToBase64(file, setBase64);
                }
              }}
              accept={ACCEPTED_FILE_TYPES.join(",")}
              disabled={field.disabled}
            />
          </label>
        )}
      />
    </div>
  );
};

export default InputFile;
