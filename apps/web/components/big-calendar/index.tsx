"use client";

import { Calendar, momentLocalizer, SlotInfo, Views } from "react-big-calendar";
import moment from "moment-timezone";
import { calendarEvents } from "@/utils/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { Calendar as ICalendar } from "@/types/calendar";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";
import ToolBar from "./ToolBar";

// Set default timezone to Morocco (Africa/Casablanca)
moment.tz.setDefault("Africa/Casablanca");

const localizer = momentLocalizer(moment);
type Keys = keyof typeof Views;

const Index = () => {
  const [dateSelected, setDateSelected] = useState<Date>(moment().toDate()); // Initialize with today's date
  const [event, setEvent] = useState<ICalendar | null>(null);
  const [events, setEvents] = useState<ICalendar[]>(calendarEvents);
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.WEEK); // Default view is WEEK
  const [isAddEvent, setIsAddEvent] = useState<boolean>(false);
  const [isEditEvent, setIsEditEvent] = useState<boolean>(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Handle slot selection (add event modal)
  const handleSelectSlot = (slotInfo: SlotInfo) => {
    const localStart = moment(slotInfo.start)
      .tz(moment.tz.guess())
      .format("YYYY-MM-DD HH:mm");
    const localEnd = moment(slotInfo.end)
      .tz(moment.tz.guess())
      .format("YYYY-MM-DD HH:mm");

    setStartDate(localStart);
    setEndDate(localEnd);
    setIsAddEvent(true);
  };

  // Handle event selection (edit event modal)
  const onSelectEvent = (event: ICalendar) => {
    setIsEditEvent(true);
    setEvent(event);
  };

  // Define min and max time (for week/day views)
  const minTime = moment().set({ hour: 9, minute: 0 }).toDate();
  const maxTime = moment().set({ hour: 17, minute: 0 }).toDate();

  return (
    <>
      {/* Toolbar with Date Picker and Navigation */}
      <ToolBar
        dateSelected={dateSelected}
        setDateSelected={setDateSelected}
        setView={setView}
        view={view}
      />

      {/* Calendar */}
      <Calendar
        localizer={localizer}
        events={events}
        defaultDate={new Date()} // Default is today's date
        date={dateSelected} // Controlled date state
        view={view} // Controlled view state
        onNavigate={setDateSelected} // Update selected date on navigation
        onView={setView} // Update view state on view change
        views={["month", "week", "day"]} // Supported views
        min={minTime} // Min time for day/week views
        max={maxTime} // Max time for day/week views
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={onSelectEvent}
        startAccessor="start"
        endAccessor="end"
        toolbar={false}
        style={{
          height: view === Views.MONTH ? "100vh" : "100%",
          width: "100%",
          overflow: "auto",
        }}
      />

      {/* Add Event Modal */}
      <AddEvent
        isAddEvent={isAddEvent}
        seIsAddEvent={setIsAddEvent}
        startDate={startDate}
        endDate={endDate}
        setEvents={setEvents}
        events={events}
      />

      {/* Edit Event Modal */}
      <EditEvent
        isEditEvent={isEditEvent}
        seIsEditEvent={setIsEditEvent}
        setEvents={setEvents}
        events={events}
        event={event}
      />
    </>
  );
};

export default Index;
