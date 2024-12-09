import { StaticImageData } from "next/image";

export type Staff = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  age: number;
  image: StaticImageData;
  gender: string;
  createdAt: string;
};
