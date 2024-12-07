"use client";

import {
  TAppointmentFormSchema,
  appointmentFormSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import RadioButtonCards from "@/components/form-elements/RadioButtonCards";
import { diseases, patients, time } from "@/utils/data";
import TextAreaField from "@/components/form-elements/TextAreaField";
import SelectField from "@/components/form-elements/SelectField";
import DatePickerField from "@/components/form-elements/DatePickerField";
import InputField from "../form-elements/InputField";

type EditAppointmentProps = {
  isEditOpen: boolean;
  setIsEditOpen: (value: boolean) => void;
};

const EditPayment = ({ isEditOpen, setIsEditOpen }: EditAppointmentProps) => {
  const form = useForm<TAppointmentFormSchema>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: { note: "" },
  });

  function onSubmit(values: TAppointmentFormSchema) {
    console.log(values);
  }

  const patientsList = patients.map((el) => ({
    value: `${el.firstName} ${el.lastName}`,
    label: `${el.firstName} ${el.lastName}`,
  }));

  return (
    <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Payment</DialogTitle>
          <DialogDescription>Edit patient payment</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 mt-2"
          >
            <div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-3">
                <SelectField
                  form={form}
                  name="name"
                  label="Patient Name"
                  data={patientsList}
                  placeholder="Select patient"
                  required
                />
                <SelectField
                  form={form}
                  name="disease"
                  label="Disease"
                  data={diseases}
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <InputField
                  form={form}
                  label="Pay"
                  name="pay"
                  type="number"
                  required
                />
                <InputField
                  form={form}
                  label="Rest"
                  name="rest"
                  type="number"
                  required
                />
              </div>
            </div>

            <DialogFooter className="gap-2">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" variant="brand">
                Edit payment
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPayment;
