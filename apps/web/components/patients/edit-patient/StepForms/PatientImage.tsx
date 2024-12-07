import {
  TPatientThirdFormSchema,
  patientThirdFormSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { motion } from "framer-motion";
import { useState } from "react";

// zustand
import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

// form elements
import InputFile from "@/components/form-elements/InputFile";
import NavButtons from "../NavButtons";
import Image from "next/image";
import { bytesToMB } from "@/lib/utils";
import { TrashIcon } from "@/utils/assets";

const PatientImage = () => {
  const [base64, setBase64] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState<number | null>(null);

  const { currentStep, setCurrentStep, handleSetFormData, formData } = useStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
      setCurrentStep: state.setCurrentStep,
      handleSetFormData: state.handleSetFormData,
      formData: state.formData,
    }))
  );

  const form = useForm<TPatientThirdFormSchema>({
    resolver: zodResolver(patientThirdFormSchema),
    defaultValues: {
      ...formData,
    },
  });

  function handleClear() {
    setBase64("");
  }

  function onSubmit(values: TPatientThirdFormSchema) {
    setCurrentStep("inc");
    handleSetFormData(values);
  }
  return (
    <motion.div
      initial={{ opacity: 0, translateX: currentStep * 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -currentStep * 100 }}
      transition={{ duration: 0.5 }}
      className="flex-1 w-full h-full flex flex-col gap-6"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-full flex flex-col justify-between"
        >
          <div>
            <InputFile
              form={form}
              name="image"
              setBase64={setBase64}
              setFileName={setFileName}
              setFileSize={setFileSize}
              error={form.formState.errors.image?.message}
              required
            />
            {base64 && (
              <div className="flex w-full items-center justify-between p-1 mt-2 rounded-md border border-mistyBlue/10 bg-mistyBlue/10 dark:bg-dark-3/30">
                <div className="flex items-center gap-2">
                  <div className="relative size-12 rounded-md overflow-hidden">
                    <Image
                      src={base64}
                      alt="patient"
                      fill
                      className="absolute object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-dark-2 dark:text-white font-medium text-sm">
                      {fileName}
                    </p>
                    <span className="text-dark-2 dark:text-white text-2xl">
                      -
                    </span>
                    <p className="text-dark-2 dark:text-white font-medium text-sm">
                      {bytesToMB(fileSize)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClear}
                  className="bg-rose-600 size-8 flex justify-center items-center rounded-md text-white font-medium"
                >
                  <TrashIcon className="size-5" />
                </button>
              </div>
            )}
          </div>

          <div className="border-t border-dashed border-mistyBlue/40 mt-6">
            <NavButtons />
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default PatientImage;
