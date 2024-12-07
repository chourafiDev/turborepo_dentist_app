import { StaticImageData } from "next/image";

export type Appointment = {
  id: number;
  no: string;
  name: string;
  date: string;
  time: string;
  disease: string;
  image: StaticImageData;
};
