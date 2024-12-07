import { z } from "zod";

const isBrowser = typeof window !== "undefined";
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const MAX_FILE_SIZE = 2 * 1024 * 1024;
export const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png"];

const imageValidation = isBrowser
  ? z
      .instanceof(FileList, { message: "Image is required." })
      .refine((fileList) => fileList.length > 0, {
        message: "Image is required.",
      })
      .refine((fileList) => fileList[0]?.size <= MAX_FILE_SIZE, {
        message: "La taille du image doit être inférieure à 2MB.",
      })
      .refine((fileList) => ACCEPTED_FILE_TYPES.includes(fileList[0].type), {
        message: "Invalid image type.",
      })
  : z.any();

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "Email address is required" })
    .email({
      message: "Must be a valid email",
    }),
  password: z.string().trim().min(2, { message: "Password is required" }),
});

// Category schema
export const categorySchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .trim()
    .toLowerCase(),
  description: z
    .string()
    .max(160, {
      message: "The description must not be higher than 160 characters.",
    })
    .optional(),
});

// Patinet multi step forms
export const patientFirstFormSchema = z.object({
  firstname: z
    .string({ required_error: "First Name is required" })
    .trim()
    .min(2, {
      message: "First Name must be at least 2 characters.",
    }),
  lastname: z
    .string({ required_error: "Last Name is required" })
    .trim()
    .min(2, {
      message: "Last Name must be at least 2 characters.",
    }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .toLowerCase()
    .refine((val) => !val || emailRegex.test(val), {
      message: "Email invalid",
    }),
  age: z
    .number({ required_error: "Age is required" })
    .min(5, {
      message: "Age must be greater than 5.",
    })
    .max(100, {
      message: "Age must be less than 100.",
    }),
  mobile: z.string({ required_error: "Mobile is required" }).length(10, {
    message: "Mobile must be 10 numbers.",
  }),
  gender: z.enum(["male", "female"], {
    required_error: "You need to select a gender.",
  }),
});

export const patientSecondFormSchema = z.object({
  address: z
    .string({ required_error: "Address is required" })
    .min(5, {
      message: "Address must be at longer 5 characters.",
    })
    .max(160, {
      message: "Address must not be less than 160 characters.",
    }),
  disease: z.string({ required_error: "Disease is required" }).trim(),
  cin: z.string({ required_error: "CIN is required" }).trim(),
});

export const patientThirdFormSchema = z.object({
  image: imageValidation,
});

// Staff multi step forms
export const staffFirstFormSchema = z.object({
  username: z.string({ required_error: "User is required" }).trim().min(2, {
    message: "User must be at least 2 characters.",
  }),
  firstname: z.string({ required_error: "First Name is required" }).trim(),
  lastname: z.string({ required_error: "Last Name is required" }).trim(),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .toLowerCase()
    .refine((val) => !val || emailRegex.test(val), {
      message: "Email invalid",
    }),
  age: z
    .number({ required_error: "Age is required" })
    .min(5, {
      message: "Age must be greater than 5.",
    })
    .max(100, {
      message: "Age must be less than 100.",
    }),
  gender: z.enum(["male", "female"], {
    required_error: "You need to select a gender.",
  }),
});

export const staffSecondFormSchema = z.object({
  address: z
    .string({ required_error: "Address is required" })
    .min(5, {
      message: "Address must be at longer 5 characters.",
    })
    .max(160, {
      message: "Address must not be less than 160 characters.",
    }),
  cin: z.string({ required_error: "CIN is required" }).trim(),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, {
      message: "Password must be greater than or equal 8.",
    })
    .trim(),
  mobile: z.string({ required_error: "Mobile is required" }).length(10, {
    message: "Mobile must be 10 numbers.",
  }),
});

export const staffThirdFormSchema = z.object({
  image: imageValidation,
});

// Appointment
export const appointmentFormSchema = z.object({
  name: z.string({ required_error: "Patient is required" }),
  date: z.date({
    required_error: "Date is required.",
  }),
  time: z.enum(
    [
      "10:00 - 10:30",
      "10:30 - 11:00",
      "11:00 - 11:30",
      "11:30 - 12:00",
      "12:00 - 12:30",
      "12:30 - 13:00",
      "13:00 - 13:30",
      "13:30 - 14:00",
      "14:00 - 14:30",
      "14:30 - 15:00",
      "15:00 - 15:30",
      "15:30 - 16:00",
      "16:00 - 16:30",
      "16:30 - 17:00",
    ],
    {
      required_error: "You need to select a time.",
    }
  ),
  note: z
    .string()
    .max(160, {
      message: "Note must not be less than 160 characters.",
    })
    .optional(),
});

// Appointment With Calendar
export const appointmentWithCalendarFormSchema = z.object({
  name: z.string({ required_error: "Patient is required" }),
  title: z
    .string({ required_error: "Title is required" })
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .trim(),
  note: z
    .string()
    .max(160, {
      message: "Note must not be less than 160 characters.",
    })
    .optional(),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TCategorySchema = z.infer<typeof categorySchema>;
export type TPatientFirstFormSchema = z.infer<typeof patientFirstFormSchema>;
export type TPatientThirdFormSchema = z.infer<typeof patientThirdFormSchema>;
export type TPatientSecondFormSchema = z.infer<typeof patientSecondFormSchema>;
export type TStaffFirstFormSchema = z.infer<typeof staffFirstFormSchema>;
export type TStaffThirdFormSchema = z.infer<typeof staffThirdFormSchema>;
export type TStaffSecondFormSchema = z.infer<typeof staffSecondFormSchema>;
export type TAppointmentFormSchema = z.infer<typeof appointmentFormSchema>;
export type TAppointmentWithCalendarFormSchema = z.infer<
  typeof appointmentWithCalendarFormSchema
>;
