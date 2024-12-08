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
import LoadingButton from "@/components/ui/loading-button";
import { Calendar } from "@/types/calendar";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputField from "../form-elements/InputField";
import moment from "moment-timezone";
import DeleteConfirmationDialog from "../ui/delete-confirmation-dialog";
import { Textarea } from "../ui/textarea";

type AddEventProps = {
  isEditEvent: boolean;
  seIsEditEvent: (value: boolean) => void;
  events: Calendar[];
  setEvents: Dispatch<SetStateAction<Calendar[]>>;
  event: Calendar | null;
};

const EditEvent = ({
  isEditEvent,
  seIsEditEvent,
  setEvents,
  events,
  event,
}: AddEventProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const form = useForm<TAppointmentWithCalendarFormSchema>({
    resolver: zodResolver(appointmentWithCalendarFormSchema),
    defaultValues: {
      title: "",
      note: "",
    },
  });

  // Load event data to the form
  useEffect(() => {
    if (event) {
      form.reset({
        title: event?.title || "",
        note: event?.description || "",
      });
    }
  }, [event, form]);

  // Handle edit event
  function onSubmit(values: TAppointmentWithCalendarFormSchema) {
    const data = {
      id: event?.id,
      start: event?.start,
      end: event?.end,
      title: values.title,
      description: values.note,
    };

    if (event) {
      setEvents((prevEvents: Calendar[]) =>
        prevEvents.map((ev) => (ev.id === event.id ? data : ev))
      );
    } else {
      setEvents((prevEvents: Calendar[]) => [...prevEvents, data]);
    }

    form.reset();
    seIsEditEvent(false);
  }

  // Handle delete event
  const deleteEvent = () => {
    setEvents((prevEvents: Calendar[]) =>
      prevEvents.filter((el) => el.id != event?.id)
    );
    setIsDeleteOpen(false);
    seIsEditEvent(false);
  };

  const patientsList = patients.map((el) => ({
    value: `${el.firstName} ${el.lastName}`,
    label: `${el.firstName} ${el.lastName}`,
  }));

  return (
    <>
      <Dialog open={isEditEvent} onOpenChange={seIsEditEvent}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {event ? (
                <p>
                  Manage Appointment: Edit or Delete -{" "}
                  <span className="text-brand">{event.title}</span>
                </p>
              ) : (
                "Manage Appointment"
              )}
            </DialogTitle>
            <DialogDescription>
              Manage appointment in 10 seconds
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
                    {moment(event?.start).format("YYYY-MM-DD HH:mm")}
                  </span>
                </p>
                <div className="h-10 w-[1px] bg-mistyBlue/30"></div>
                <p className="text-dark-2 dark:text-mistyBlue font-medium text-[15px]">
                  End Date:{" "}
                  <span className="text-dark-2/60 dark:text-mistyBlue">
                    {moment(event?.end).format("YYYY-MM-DD HH:mm")}
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

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                {/* <LoadingButton text="Save Appointment" variant="brand" /> */}
                <Button
                  variant="destructive"
                  type="button"
                  onClick={() => setIsDeleteOpen(true)}
                >
                  Delete Appointment
                </Button>
                <Button variant="brand">Edit Appointment</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <DeleteConfirmationDialog
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
        handleDelete={deleteEvent}
      >
        <label className="-mb-2 dark:text-white text-dark-2 font-medium text-sm mt-3">
          Note about canceling this appointment.
        </label>
        <Textarea />
      </DeleteConfirmationDialog>
    </>
  );
};

export default EditEvent;
