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
import RadioButtonCards from "@/components/form-elements/RadioButtonCards";
import { patients, time } from "@/utils/data";
import TextAreaField from "@/components/form-elements/TextAreaField";
import SelectField from "@/components/form-elements/SelectField";
import DatePickerField from "@/components/form-elements/DatePickerField";
import { AddSquareIcon } from "@/utils/assets";
import LoadingButton from "@/components/ui/loading-button";

const AddAppointment = () => {
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
          Make New Appointment
          <AddSquareIcon className="size-5 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Make New Appointment</DialogTitle>
          <DialogDescription>
            Request a new appointment in 10 seconds
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 mt-2"
          >
            <div className="flex md:flex-row flex-col items-center gap-3">
              <div className="w-full">
                <SelectField
                  form={form}
                  name="name"
                  label="Patient Name"
                  data={patientsList}
                  placeholder="Select patient"
                  required
                />
              </div>

              <div className="w-full">
                <DatePickerField
                  form={form}
                  name="date"
                  label="Date"
                  required
                />
              </div>
            </div>

            <RadioButtonCards
              form={form}
              name="time"
              label="Time"
              data={time}
              required
            />
            <TextAreaField form={form} label="Note" name="note" />

            <DialogFooter className="gap-2">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <LoadingButton text="Save Appointment" variant="brand" />
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAppointment;
