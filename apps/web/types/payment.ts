import { StaticImageData } from "next/image";

export type Payment = {
  id: number;
  firstName: string;
  lastName: string;
  image: StaticImageData;
  disease: string;
  pay: number;
  rest: number;
  createdAt: string;
};
