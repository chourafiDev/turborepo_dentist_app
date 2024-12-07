import { StaticImageData } from "next/image";

export type Staff = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  image: StaticImageData;
  gender: string;
  createdAt: string;
};
