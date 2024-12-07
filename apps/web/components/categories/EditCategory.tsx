"use client";

import { TCategorySchema, categorySchema } from "@/lib/validation";
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
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TextAreaField from "@/components/form-elements/TextAreaField";
import InputField from "@/components/form-elements/InputField";
import LoadingButton from "../LoadingButton";

type EditCategoryProps = {
  isEditOpen: boolean;
  setIsEditOpen: (value: boolean) => void;
};

const EditCategory = ({ isEditOpen, setIsEditOpen }: EditCategoryProps) => {
  const form = useForm<TCategorySchema>({
    resolver: zodResolver(categorySchema),
    defaultValues: { description: "" },
  });

  function onSubmit(values: TCategorySchema) {
    console.log(values);
  }

  return (
    <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
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
              <LoadingButton text="Edit Category" variant="brand" />
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategory;
