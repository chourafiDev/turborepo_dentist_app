import { Button } from "../ui/button";
import { CloseCircleOutlineIcon, SearchIcon } from "@/utils/assets";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  staffFiltersFormSchema,
  TStaffFiltersFormSchema,
} from "@/lib/validation";
import { toast } from "@/hooks/use-toast";
import SelectField from "../form-elements/SelectField";
import { genders } from "@/utils/data";
import DatePickerField from "../form-elements/DatePickerField";
import InputField from "../form-elements/InputField";

const StaffFilters = () => {
  const form = useForm<TStaffFiltersFormSchema>({
    resolver: zodResolver(staffFiltersFormSchema),
  });

  function onSubmit(values: TStaffFiltersFormSchema) {
    console.log("values", values);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  const resetForm = () => {
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mt-2"
      >
        <div className="dark:bg-dark-3/25 border dark:border-mistyBlue/5 border-mistyBlue/15 rounded-lg lg:p-5 md:p-4 p-3 my-4">
          <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-3 gap-4 md:mb-3 mb-5">
            <InputField
              form={form}
              label="Search by fullname"
              name="name"
              placeholder="Enter fullname..."
            />

            <SelectField
              form={form}
              name="gender"
              label="Gender"
              data={genders}
              placeholder="Select gender"
            />

            <DatePickerField form={form} name="date" label="Date" />
          </div>

          <div className="flex items-center gap-x-2 justify-end">
            <Button variant="dashed" type="button" onClick={resetForm}>
              <CloseCircleOutlineIcon className="size-[18px] text-mistyBlue" />
              Clear all filters
            </Button>
            <Button variant="brand">
              <SearchIcon className="size-[14px] text-white" />
              Apply Filter
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default StaffFilters;
