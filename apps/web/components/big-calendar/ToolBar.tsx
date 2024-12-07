import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarLineIcon,
} from "@/utils/assets";
import { format } from "date-fns";
import { motion } from "framer-motion";
import moment from "moment-timezone";
import { useCallback, useMemo } from "react";
import { View, Views } from "react-big-calendar";
import { VIEW_OPTIONS } from "@/utils/data";

// Set default timezone to Morocco (Africa/Casablanca)
moment.tz.setDefault("Africa/Casablanca");

type ToolBarProps = {
  dateSelected: Date;
  view: any;
  setDateSelected: (value: Date) => void;
  setView: (value: View) => void;
};

const ToolBar = ({
  dateSelected,
  view,
  setDateSelected,
  setView,
}: ToolBarProps) => {
  // Function to switch views (Day, Week, Month)
  const handleClickView = (
    id: "month" | "week" | "work_week" | "day" | "agenda"
  ) => {
    setView(id);
  };

  // Navigate to previous week/day/month
  const onPrevClick = useCallback(() => {
    const newDate =
      view === Views.DAY
        ? moment(dateSelected).subtract(1, "d").toDate()
        : view === Views.WEEK
        ? moment(dateSelected).subtract(1, "w").toDate()
        : moment(dateSelected).subtract(1, "M").toDate();

    setDateSelected(newDate);
  }, [view, dateSelected, setDateSelected]);

  // Navigate to next week/day/month
  const onNextClick = useCallback(() => {
    const newDate =
      view === Views.DAY
        ? moment(dateSelected).add(1, "d").toDate()
        : view === Views.WEEK
        ? moment(dateSelected).add(1, "w").toDate()
        : moment(dateSelected).add(1, "M").toDate();

    setDateSelected(newDate);
  }, [view, dateSelected, setDateSelected]);

  // Set date to today
  const onTodayClick = useCallback(() => {
    setDateSelected(moment().toDate());
  }, []);

  // Clear the date picker selection
  const onClearClick = useCallback(() => {
    setDateSelected(moment().toDate());
  }, []);

  // Format the date text displayed on the toolbar (Week, Day, Month)
  const dateText = useMemo(() => {
    if (view === Views.DAY) return moment(dateSelected).format("dddd, MMMM DD");
    if (view === Views.WEEK) {
      const from = moment(dateSelected).startOf("week");
      const to = moment(dateSelected).endOf("week");
      return `${from.format("MMMM DD")} to ${to.format("MMMM DD")}`;
    }
    return moment(dateSelected).format("MMMM YYYY");
  }, [view, dateSelected]);

  return (
    <div className="mb-3 flex justify-between">
      <div className="flex gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-72 justify-between text-left font-medium shadow-none py-5 border-mistyBlue/35 dark:border-mistyBlue/55 dark:text-white dark:bg-transparent"
            >
              {format(dateSelected, "PPP")}
              <CalendarLineIcon className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarPicker
              mode="single"
              selected={dateSelected}
              onSelect={(date) => setDateSelected(date ?? moment().toDate())}
            />
          </PopoverContent>
        </Popover>
        <Button
          onClick={onClearClick}
          variant="dashed"
          className="bg-gray/40 dark:bg-dark-2/10 h-[41px]"
        >
          Clear
        </Button>
      </div>

      <div className="flex gap-x-3 items-center">
        <div className="flex items-center gap-4">
          <Button onClick={onTodayClick} variant="brand" className="h-10">
            Today
          </Button>
          <p className="text-dark-2/80 dark:text-white/80 font-medium text-sm">
            {dateText}
          </p>
          <div className="flex items-center">
            <button onClick={onPrevClick}>
              <ArrowLeftIcon className="text-dark-2/80 dark:text-white/80 size-5" />
            </button>
            <button onClick={onNextClick}>
              <ArrowRightIcon className="text-dark-2/80 dark:text-white/80 size-5" />
            </button>
          </div>
        </div>

        {/* View Switcher */}
        <ul className="flex items-center gap-4 bg-gray/50 dark:bg-dark-3 border border-gray dark:border-mistyBlue/10 px-[2px] py-[2px] rounded-lg">
          {VIEW_OPTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleClickView(id)}
                className="relative py-2 px-3"
              >
                <p
                  className={cn(
                    "relative z-10 text-[13px] font-semibold",
                    view === id
                      ? "text-brand"
                      : "text-dark-2/80 dark:text-white/80"
                  )}
                >
                  {label}
                </p>
                {view === id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-0 h-full w-full bg-white dark:bg-dark rounded-lg"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToolBar;
