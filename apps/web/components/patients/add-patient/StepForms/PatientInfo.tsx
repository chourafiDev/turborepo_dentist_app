"use client";

import {
  TPatientFirstFormSchema,
  patientFirstFormSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { motion } from "framer-motion";
import InputField from "@/components/form-elements/InputField";
import NavButtons from "../NavButtons";
import RadioButtonCards from "@/components/form-elements/RadioButtonCards";
import { genders } from "@/utils/data";

const PatientInfo = () => {
  const { currentStep, setCurrentStep, handleSetFormData, formData } = useStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
      setCurrentStep: state.setCurrentStep,
      handleSetFormData: state.handleSetFormData,
      formData: state.formData,
    }))
  );

  const form = useForm<TPatientFirstFormSchema>({
    resolver: zodResolver(patientFirstFormSchema),
    defaultValues: {
      ...formData,
    },
  });

  function onSubmit(values: TPatientFirstFormSchema) {
    setCurrentStep("inc");
    handleSetFormData(values);
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateX: currentStep * 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -currentStep * 100 }}
      transition={{ duration: 0.5 }}
      className="flex-1 h-full w-full flex flex-col gap-6"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-full flex flex-col justify-between"
        >
          <div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-3">
              <InputField
                form={form}
                label="First Name"
                name="firstname"
                required
              />
              <InputField
                form={form}
                label="Last Name"
                name="lastname"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-3">
              <InputField
                form={form}
                label="Email"
                name="email"
                type="email"
                required
              />
              <InputField form={form} label="Mobile" name="mobile" required />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-3">
              <InputField
                form={form}
                label="Age"
                name="age"
                type="number"
                required
              />
              <RadioButtonCards
                form={form}
                name="gender"
                label="Gender"
                data={genders}
                required
              />
            </div>
          </div>

          <div className="border-t border-dashed border-mistyBlue/40 mt-6">
            <NavButtons />
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default PatientInfo;
