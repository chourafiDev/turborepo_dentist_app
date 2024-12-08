"use client";

import { TCategorySchema, categorySchema } from "@/lib/validation";
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
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TextAreaField from "@/components/form-elements/TextAreaField";
import { AddSquareIcon } from "@/utils/assets";
import InputField from "../form-elements/InputField";
import LoadingButton from "@/components/ui/loading-button";

const AddCategory = () => {
  const form = useForm<TCategorySchema>({
    resolver: zodResolver(categorySchema),
    defaultValues: { description: "" },
  });

  function onSubmit(values: TCategorySchema) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand">
          New Category
          <AddSquareIcon className="size-5 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Category</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 mt-2"
          >
            <InputField form={form} label="Name" name="name" required />
            <TextAreaField form={form} label="Description" name="description" />

            <DialogFooter className="gap-2">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button variant="brand">Save</Button>
              {/* <LoadingButton text="Save Category" variant="brand" /> */}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
