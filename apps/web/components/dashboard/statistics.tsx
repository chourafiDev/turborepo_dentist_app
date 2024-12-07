"use client";

import { createElement, useEffect, useState } from "react";
import { statistics } from "@/utils/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarLineIcon } from "@/utils/assets";
import { Skeleton } from "@/components/ui/skeleton";
import NumberTicker from "../ui/number-ticker";

const Statistics = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const [isLoading, setIsLoading] = useState(true);

  // Effect to simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="mt-6">
      <Tabs defaultValue="last-day" className="w-full">
        <div className="flex lg:flex-row flex-col gap-2 justify-between lg:items-center items-start">
          <TabsList>
            <TabsTrigger value="last-day">Last 24 hour</TabsTrigger>
            <TabsTrigger value="last-weeks">Last weeks</TabsTrigger>
            <TabsTrigger value="last-month">Last month</TabsTrigger>
            <TabsTrigger value="last-year">Last year</TabsTrigger>
          </TabsList>
          <div className={cn("grid gap-2 md:w-auto w-full")}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "md:w-[300px] w-full justify-start text-left text-dark-2/60 font-medium shadow-lg shadow-gray/20 py-5 bg-white dark:bg-dark dark:text-white border dark:border-mistyBlue/10",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarLineIcon className="size-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Filter by date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <TabsContent value="last-day">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mt-3">
            {isLoading
              ? statistics.map((el) => (
                  <div
                    key={el.id}
                    className="space-y-10 bg-brand bg-waveShape bg-cover rounded-xl p-4 shadow-xl shadow-gray/40 dark:shadow-dark-3"
                  >
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />

                      <div className="space-y-2">
                        <Skeleton className="h-2 w-24 rounded-full" />
                        <Skeleton className="h-3 w-40 rounded-full" />
                      </div>
                    </div>

                    <Skeleton className="h-2 w-32 rounded-full" />
                  </div>
                ))
              : statistics.map((el) => (
                  <div
                    key={el.id}
                    className="bg-brand bg-waveShape bg-cover rounded-xl p-4 shadow-xl shadow-gray/40 dark:shadow-dark-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`text-white bg-white/20 rounded-full size-10 flex justify-center items-center`}
                      >
                        {createElement(el.icon, {
                          width: 23,
                          height: 23,
                        })}
                      </div>
                      <div>
                        <h3 className="text-white/70 font-medium text-sm">
                          {el.title}
                        </h3>

                        {el.title === "Total Revenue" ? (
                          <>
                            <NumberTicker value={el.value} />
                            <span className="text-white font-semibold text-2xl ml-2">
                              DH
                            </span>
                          </>
                        ) : (
                          <NumberTicker value={el.value} />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mt-6">
                      <p
                        className={cn(
                          `px-[6px] py-[1.5px] gap-2 text-white rounded-full text-xs font-bold flex items-center`
                        )}
                      >
                        {createElement(el.statusIcon, { size: 15 })}
                        <span>{el.status}</span>
                      </p>
                      <p className="text-white text-xs font-medium">
                        this month
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </TabsContent>
        <TabsContent value="last-weeks">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mt-3">
            {isLoading
              ? statistics.map((el) => (
                  <div
                    key={el.id}
                    className="space-y-10 bg-brand bg-waveShape bg-cover rounded-xl p-4 shadow-xl shadow-gray/40 dark:shadow-dark-3"
                  >
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />

                      <div className="space-y-2">
                        <Skeleton className="h-2 w-24 rounded-full" />
                        <Skeleton className="h-3 w-40 rounded-full" />
                      </div>
                    </div>

                    <Skeleton className="h-2 w-32 rounded-full" />
                  </div>
                ))
              : statistics.map((el) => (
                  <div
                    key={el.id}
                    className="bg-brand bg-waveShape bg-cover rounded-xl p-4 shadow-xl shadow-gray/40 dark:shadow-dark-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`text-white bg-white/20 rounded-full size-10 flex justify-center items-center`}
                      >
                        {createElement(el.icon, {
                          width: 23,
                          height: 23,
                        })}
                      </div>
                      <div>
                        <h3 className="text-white/70 font-medium text-sm">
                          {el.title}
                        </h3>
                        {el.title === "Total Revenue" ? (
                          <>
                            <NumberTicker value={el.value} />
                            <span className="text-white font-semibold text-2xl ml-2">
                              DH
                            </span>
                          </>
                        ) : (
                          <NumberTicker value={el.value} />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mt-6">
                      <p
                        className={cn(
                          `px-[6px] py-[1.5px] gap-2 text-white rounded-full text-xs font-bold flex items-center`
                        )}
                      >
                        {createElement(el.statusIcon, { size: 15 })}
                        <span>{el.status}</span>
                      </p>
                      <p className="text-white text-xs font-medium">
                        this month
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </TabsContent>
        <TabsContent value="last-month">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mt-3">
            {isLoading
              ? statistics.map((el) => (
                  <div
                    key={el.id}
                    className="space-y-10 bg-brand bg-waveShape bg-cover rounded-xl p-4 shadow-xl shadow-gray/40 dark:shadow-dark-3"
                  >
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />

                      <div className="space-y-2">
                        <Skeleton className="h-2 w-24 rounded-full" />
                        <Skeleton className="h-3 w-40 rounded-full" />
                      </div>
                    </div>

                    <Skeleton className="h-2 w-32 rounded-full" />
                  </div>
                ))
              : statistics.map((el) => (
                  <div
                    key={el.id}
                    className="bg-brand bg-waveShape bg-cover rounded-xl p-4 shadow-xl shadow-gray/40 dark:shadow-dark-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`text-white bg-white/20 rounded-full size-10 flex justify-center items-center`}
                      >
                        {createElement(el.icon, {
                          width: 23,
                          height: 23,
                        })}
                      </div>
                      <div>
                        <h3 className="text-white/70 font-medium text-sm">
                          {el.title}
                        </h3>
                        {el.title === "Total Revenue" ? (
                          <>
                            <NumberTicker value={el.value} />
                            <span className="text-white font-semibold text-2xl ml-2">
                              DH
                            </span>
                          </>
                        ) : (
                          <NumberTicker value={el.value} />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mt-6">
                      <p
                        className={cn(
                          `px-[6px] py-[1.5px] gap-2 text-white rounded-full text-xs font-bold flex items-center`
                        )}
                      >
                        {createElement(el.statusIcon, { size: 15 })}
                        <span>{el.status}</span>
                      </p>
                      <p className="text-white text-xs font-medium">
                        this month
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </TabsContent>
        <TabsContent value="last-year">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mt-3">
            {isLoading
              ? statistics.map((el) => (
                  <div
                    key={el.id}
                    className="space-y-10 bg-brand bg-waveShape bg-cover rounded-xl p-4 shadow-xl shadow-gray/40 dark:shadow-dark-3"
                  >
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />

                      <div className="space-y-2">
                        <Skeleton className="h-2 w-24 rounded-full" />
                        <Skeleton className="h-3 w-40 rounded-full" />
                      </div>
                    </div>

                    <Skeleton className="h-2 w-32 rounded-full" />
                  </div>
                ))
              : statistics.map((el) => (
                  <div
                    key={el.id}
                    className="bg-brand bg-waveShape bg-cover rounded-xl p-4 shadow-xl shadow-gray/40 dark:shadow-dark-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`text-white bg-white/20 rounded-full size-10 flex justify-center items-center`}
                      >
                        {createElement(el.icon, {
                          width: 23,
                          height: 23,
                        })}
                      </div>
                      <div>
                        <h3 className="text-white/70 font-medium text-sm">
                          {el.title}
                        </h3>
                        {el.title === "Total Revenue" ? (
                          <>
                            <NumberTicker value={el.value} />
                            <span className="text-white font-semibold text-2xl ml-2">
                              DH
                            </span>
                          </>
                        ) : (
                          <NumberTicker value={el.value} />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mt-6">
                      <p
                        className={cn(
                          `px-[6px] py-[1.5px] gap-2 text-white rounded-full text-xs font-bold flex items-center`
                        )}
                      >
                        {createElement(el.statusIcon, { size: 15 })}
                        <span>{el.status}</span>
                      </p>
                      <p className="text-white text-xs font-medium">
                        this month
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Statistics;
