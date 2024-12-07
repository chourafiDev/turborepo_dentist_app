import { StaticImageData } from "next/image";

export type Patient = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  image: StaticImageData;
  action: string;
  gender: string;
  createdAt: string;
};
