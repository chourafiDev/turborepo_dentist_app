"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { user } from "@/utils/assets";
import { days } from "@/utils/data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cn } from "@/lib/utils";

export default function Home() {
  const [selectedDate, setSelectedDate] = React.useState("");

  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <div className="w-full h-full md:p-6 p-3">
      <Card>
        <CardContent>
          <div className="mb-6 border-b border-dashed border-mistyBlue/30 pb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-dark-2 dark:text-white font-medium text-base">
                Appointments
              </h2>
            </div>

            <Swiper className="mt-3" slidesPerView={14}>
              {days.map((el) => (
                <SwiperSlide key={el.number}>
                  <button
                    onClick={() => handleSelectDate(el.number)}
                    className={cn(
                      "border border-mistyBlue/30 dark:border-mistyBlue/10 size-16 flex-col rounded-lg flex justify-center items-center cursor-pointer",
                      selectedDate === el.number
                        ? "bg-brand"
                        : " bg-gray/15 dark:bg-mistyBlue/5"
                    )}
                  >
                    <p
                      className={cn(
                        "font-semibold text-sm",
                        selectedDate === el.number
                          ? "text-white"
                          : " text-dark-2 dark:text-white"
                      )}
                    >
                      {el.number}
                    </p>
                    <p
                      className={cn(
                        "font-semibold text-sm",
                        selectedDate === el.number
                          ? "text-white/70"
                          : " text-dark-2/30 dark:text-white/30"
                      )}
                    >
                      {el.day}
                    </p>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            <h2 className="text-dark-2 dark:text-white font-medium text-base">
              Total Appointments:{" "}
              <span className="text-brand text-sm bg-brand/20 py-1 px-2 rounded-md">
                6
              </span>
            </h2>

            <ul className="my-6 space-y-6">
              <li className="pl-8 relative before:absolute before:h-full before:border-l before:border-dashed before:border-mistyBlue/70 before:left-[5px] before:top-5">
                <div className="absolute top-[2px] left-0 size-3 z-10 rounded-full border border-dashed border-mistyBlue/70"></div>
                <p className="text-dark-2 dark:text-white text-xs font-semibold mb-2">
                  10:00 AM
                </p>
                <div className="shadow-lg shadow-gray/20 dark:shadow-dark inline-flex items-center gap-3 border border-mistyBlue/30 dark:border-mistyBlue/10 px-4 py-3 rounded-xl">
                  <div className="size-12 relative rounded-full overflow-hidden">
                    <Image
                      src={user}
                      alt="user"
                      fill
                      className="absolute object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-dark-2 dark:text-white font-medium text-[14px]">
                      Jhon Stone
                    </p>
                    <p className="text-dark-2/60 dark:text-white:60 dark:text-white/60 font-medium text-[14px]">
                      Stomach Aches
                    </p>
                  </div>
                </div>
              </li>
              <li className="pl-8 relative before:absolute before:h-full before:border-l before:border-dashed before:border-mistyBlue/70 before:left-[5px] before:top-5">
                <div className="absolute top-[2px] left-0 size-3 z-10 rounded-full border border-dashed border-mistyBlue/70"></div>

                <p className="text-dark-2 dark:text-white text-xs font-semibold mb-2">
                  11:00 AM
                </p>
                <div className="flex gap-2">
                  <div className="shadow-lg shadow-gray/20 dark:shadow-dark flex items-center gap-3 border border-mistyBlue/30 dark:border-mistyBlue/10 px-4 py-3 rounded-xl">
                    <div className="size-12 relative rounded-full overflow-hidden">
                      <Image
                        src={user}
                        alt="user"
                        fill
                        className="absolute object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-dark-2 dark:text-white font-medium text-[14px]">
                        Jhon Stone
                      </p>
                      <p className="text-dark-2/60 dark:text-white/60 font-medium text-[14px]">
                        Stomach Aches
                      </p>
                    </div>
                  </div>
                  <div className="shadow-lg shadow-gray/20 dark:shadow-dark flex items-center gap-3 border border-mistyBlue/30 dark:border-mistyBlue/10 px-4 py-3 rounded-xl">
                    <div className="size-12 relative rounded-full overflow-hidden">
                      <Image
                        src={user}
                        alt="user"
                        fill
                        className="absolute object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-dark-2 dark:text-white font-medium text-[14px]">
                        Jhon Stone
                      </p>
                      <p className="text-dark-2/60 dark:text-white/60 font-medium text-[14px]">
                        Stomach Aches
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pl-8 relative before:absolute before:h-full before:border-l before:border-dashed before:border-mistyBlue/70 before:left-[5px] before:top-5">
                <div className="absolute top-[2px] left-0 size-3 z-10 rounded-full border border-dashed border-mistyBlue/70"></div>

                <p className="text-dark-2 dark:text-white text-xs font-semibold mb-2">
                  12:00 AM
                </p>
                <div className="shadow-lg shadow-gray/20 h-20 w-full dark:shadow-dark inline-flex items-center gap-3 border border-mistyBlue/30 dark:border-mistyBlue/10 px-4 py-3 rounded-xl">
                  <p className="text-dark-2/60 dark:text-white/60 text-center w-full font-medium text-sm">
                    No appointments
                  </p>
                </div>
              </li>
              <li className="pl-8 relative before:absolute before:h-full before:border-l before:border-dashed before:border-mistyBlue/70 before:left-[5px] before:top-5">
                <div className="absolute top-[2px] left-0 size-3 z-10 rounded-full border border-dashed border-mistyBlue/70"></div>

                <p className="text-dark-2 dark:text-white text-xs font-semibold mb-2">
                  13:00 AM
                </p>
                <div className="shadow-lg shadow-gray/20 dark:shadow-dark inline-flex items-center gap-3 border border-mistyBlue/30 dark:border-mistyBlue/10 px-4 py-3 rounded-xl">
                  <div className="size-12 relative rounded-full overflow-hidden">
                    <Image
                      src={user}
                      alt="user"
                      fill
                      className="absolute object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-dark-2 dark:text-white font-medium text-[14px]">
                      Jhon Stone
                    </p>
                    <p className="text-dark-2/60 dark:text-white/60 font-medium text-[14px]">
                      Stomach Aches
                    </p>
                  </div>
                </div>
              </li>
              <li className="pl-8 relative before:absolute before:h-full before:border-l before:border-dashed before:border-mistyBlue/70 before:left-[5px] before:top-5">
                <div className="absolute top-[2px] left-0 size-3 z-10 rounded-full border border-dashed border-mistyBlue/70"></div>

                <p className="text-dark-2 dark:text-white text-xs font-semibold mb-2">
                  14:00 AM
                </p>
                <div className="shadow-lg shadow-gray/20 h-20 w-full dark:shadow-dark inline-flex items-center gap-3 border border-mistyBlue/30 dark:border-mistyBlue/10 px-4 py-3 rounded-xl">
                  <p className="text-dark-2/60 dark:text-white/60 text-center w-full font-medium text-sm">
                    No appointments
                  </p>
                </div>
              </li>
              <li className="pl-8 relative before:absolute before:h-full before:border-l before:border-dashed before:border-mistyBlue/70 before:left-[5px] before:top-5">
                <div className="absolute top-[2px] left-0 size-3 z-10 rounded-full border border-dashed border-mistyBlue/70"></div>

                <p className="text-dark-2 dark:text-white text-xs font-semibold mb-2">
                  15:00 AM
                </p>
                <div className="flex gap-2">
                  <div className="shadow-lg shadow-gray/20 dark:shadow-dark flex items-center gap-3 border border-mistyBlue/30 dark:border-mistyBlue/10 px-4 py-3 rounded-xl">
                    <div className="size-12 relative rounded-full overflow-hidden">
                      <Image
                        src={user}
                        alt="user"
                        fill
                        className="absolute object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-dark-2 dark:text-white font-medium text-[14px]">
                        Jhon Stone
                      </p>
                      <p className="text-dark-2/60 dark:text-white/60 font-medium text-[14px]">
                        Stomach Aches
                      </p>
                    </div>
                  </div>
                  <div className="shadow-lg shadow-gray/20 dark:shadow-dark flex items-center gap-3 border border-mistyBlue/30 dark:border-mistyBlue/10 px-4 py-3 rounded-xl">
                    <div className="size-12 relative rounded-full overflow-hidden">
                      <Image
                        src={user}
                        alt="user"
                        fill
                        className="absolute object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-dark-2 dark:text-white font-medium text-[14px]">
                        Jhon Stone
                      </p>
                      <p className="text-dark-2/60 dark:text-white/60 font-medium text-[14px]">
                        Stomach Aches
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pl-8 relative before:absolute before:h-full before:border-l before:border-dashed before:border-mistyBlue/70 before:left-[5px] before:top-5">
                <div className="absolute top-[2px] left-0 size-3 z-10 rounded-full border border-dashed border-mistyBlue/70"></div>

                <p className="text-dark-2 dark:text-white text-xs font-semibold mb-2">
                  16:00 AM
                </p>
                <div className="shadow-lg shadow-gray/20 h-20 w-full dark:shadow-dark inline-flex items-center gap-3 border border-mistyBlue/30 dark:border-mistyBlue/10 px-4 py-3 rounded-xl">
                  <p className="text-dark-2/60 dark:text-white/60 text-center w-full font-medium text-sm">
                    No appointments
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
