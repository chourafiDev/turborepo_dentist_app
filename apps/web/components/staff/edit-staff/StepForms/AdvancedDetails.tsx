import {
  TStaffSecondFormSchema,
  staffSecondFormSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { motion } from "framer-motion";
import InputField from "@/components/form-elements/InputField";
import NavButtons from "@/components/patients/add-patient/NavButtons";
import TextAreaField from "@/components/form-elements/TextAreaField";
import { Button } from "@/components/ui/button";

const AdvancedDetails = () => {
  const { currentStep, setCurrentStep, handleSetFormData, formData } = useStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
      setCurrentStep: state.setCurrentStep,
      handleSetFormData: state.handleSetFormData,
      formData: state.formData,
    }))
  );

  const form = useForm<TStaffSecondFormSchema>({
    resolver: zodResolver(staffSecondFormSchema),
    defaultValues: {
      ...formData,
    },
  });

  function onSubmit(values: TStaffSecondFormSchema) {
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
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-3">
              <InputField form={form} label="CIN" name="cin" required />
              <InputField
                form={form}
                label="Mobile"
                name="mobile"
                type="tel"
                required
              />
            </div>

            <div className="flex md:flex-row flex-col items-end md:gap-4 gap-2 mb-3">
              <div className="flex-1 md:w-auto w-full">
                <InputField
                  form={form}
                  label="Password"
                  name="password"
                  type="password"
                  required
                />
              </div>
              <Button
                variant={"dashed"}
                className="py-5 md:w-auto w-full"
                type="button"
              >
                Generate password
              </Button>
            </div>

            <TextAreaField
              form={form}
              label="Address"
              name="address"
              required
            />
          </div>

          <div className="border-t border-dashed border-mistyBlue/40 mt-6">
            <NavButtons />
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default AdvancedDetails;