"use client";

import { TLoginSchema, loginSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "@/components/form-elements/InputField";

const LoginForm = () => {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: TLoginSchema) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-6 mb-8">
          <InputField form={form} label="Email" name="email" type="email" />
          <InputField
            form={form}
            label="Password"
            name="password"
            type="password"
          />
        </div>
        <Button variant="brand" type="submit" size="lg" className="w-full">
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
