"use client";

// reactjs/nextjs
import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Icons
import { IoIosArrowRoundForward } from "react-icons/io";

// other
import { Appointment } from "@/types/appointment";
import { appointments } from "@/utils/data";
import { HistoryIcon } from "@/utils/assets";

const UpcomingAppointments = () => {
  return (
    <Card className="lg:w-[35%] w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          Upcoming Appointments{" "}
          <p className="size-6 rounded-full bg-dark-2 text-white flex justify-center items-center text-sm">
            {appointments.length}
          </p>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-2">
        <div className="divide-y divide-dashed divide-mistyBlue/30 dark:divide-gray/5">
          {appointments.map((el: Appointment) => (
            <div
              key={el.id}
              className="flex justify-between items-center hover:bg-mistyBlue/10 duration-150 ease-linear rounded-lg px-2"
            >
              <div className="flex items-center gap-3 py-[15px]">
                <div className="size-12 rounded-full overflow-hidden relative">
                  <Image
                    src={el.image}
                    alt="patient"
                    fill
                    className="absolute object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-dark-2 dark:text-white font-semibold text-[14px]">
                    {el.name}
                  </h3>
                  <p className="text-dark-2/60 dark:text-mistyBlue/90 font-medium text-[13px]">
                    {el.disease}
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-dark-2 dark:text-white font-semibold text-xs">
                  Today
                </p>
                <div className="flex items-center gap-2">
                  <HistoryIcon className="size-3 text-dark-2/80 dark:text-mistyBlue" />
                  <p className="text-dark-2/60 dark:text-mistyBlue/90 font-medium text-[13px]">
                    {el.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-4 flex justify-center border-t border-dashed border-mistyBlue/30 dark:border-gray/10">
          <Link
            href="/appointments/list"
            className="text-xs text-mistyBlue hover:text-brand font-medium flex items-center gap-2"
          >
            Show more <IoIosArrowRoundForward className="text-xl" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingAppointments;
