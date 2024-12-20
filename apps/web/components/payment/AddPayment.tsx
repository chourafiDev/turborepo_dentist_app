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
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { diseases, patients } from "@/utils/data";
import SelectField from "@/components/form-elements/SelectField";
import { AddSquareIcon } from "@/utils/assets";
import InputField from "../form-elements/InputField";

const AddPayment = () => {
  const form = useForm<TAppointmentFormSchema>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: { note: "" },
  });

  function onSubmit(values: TAppointmentFormSchema) {
    console.log(values);
  }

  const patientsList = patients.map((el) => ({
    value: el.fullName,
    label: el.fullName,
  }));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand">
          Add New Payment
          <AddSquareIcon className="size-5 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Payment</DialogTitle>
          <DialogDescription>Add new payment to a patient</DialogDescription>
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
                Save payment
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPayment;
