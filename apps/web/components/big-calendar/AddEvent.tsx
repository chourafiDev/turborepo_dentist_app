"use client";

import {
  TAppointmentWithCalendarFormSchema,
  appointmentWithCalendarFormSchema,
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
import { patients } from "@/utils/data";
import TextAreaField from "@/components/form-elements/TextAreaField";
import SelectField from "@/components/form-elements/SelectField";
import LoadingButton from "../LoadingButton";
import { Calendar } from "@/types/calendar";
import { Dispatch, SetStateAction } from "react";
import InputField from "../form-elements/InputField";
import moment from "moment-timezone";

type AddEventProps = {
  isAddEvent: boolean;
  seIsAddEvent: (value: boolean) => void;
  startDate: string | null;
  endDate: string | null;
  setEvents: Dispatch<SetStateAction<Calendar[]>>;
  events: Calendar[];
};

const AddEvent = ({
  isAddEvent,
  seIsAddEvent,
  setEvents,
  startDate,
  endDate,
  events,
}: AddEventProps) => {
  const form = useForm<TAppointmentWithCalendarFormSchema>({
    resolver: zodResolver(appointmentWithCalendarFormSchema),
    defaultValues: { note: "" },
  });

  function onSubmit(values: TAppointmentWithCalendarFormSchema) {
    const newEvent = {
      id: events.length + 1,
      title: values?.title,
      start: moment(startDate, "YYYY-MM-DD HH:mm").toDate(),
      end: moment(endDate, "YYYY-MM-DD HH:mm").toDate(),
      description: "Discussing the project updates and next steps.",
    };

    setEvents((prevEvents: Calendar[]) => [...prevEvents, newEvent]);
    form.reset();
    seIsAddEvent(false);
  }

  const patientsList = patients.map((el) => ({
    value: `${el.firstName} ${el.lastName}`,
    label: `${el.firstName} ${el.lastName}`,
  }));

  return (
    <Dialog open={isAddEvent} onOpenChange={seIsAddEvent}>
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
            <div className="flex items-center justify-between gap-x-8 border border-mistyBlue/30 bg-mistyBlue/5 px-10 py-1 rounded-lg">
              <p className="text-dark-2 dark:text-mistyBlue font-medium text-[15px]">
                Start Date:{" "}
                <span className="text-dark-2/60 dark:text-mistyBlue">
                  {startDate}
                </span>
              </p>
              <div className="h-10 w-[1px] bg-mistyBlue/30"></div>
              <p className="text-dark-2 dark:text-mistyBlue font-medium text-[15px]">
                End Date:{" "}
                <span className="text-dark-2/60 dark:text-mistyBlue">
                  {endDate}
                </span>
              </p>
            </div>

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

            <InputField form={form} label="Title" name="title" required />
            <TextAreaField form={form} label="Note" name="note" />

            <DialogFooter className="gap-2">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              {/* <LoadingButton text="Save Appointment" variant="brand" /> */}
              <Button variant="brand">Save Appointment</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEvent;
