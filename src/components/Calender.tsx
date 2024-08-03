import React from "react";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment object to the correct localizer.
const localizer = momentLocalizer(moment);

type CalendarComponentProps = {
  events: Event[];
};

const CalendarComponent: React.FC<CalendarComponentProps> = ({ events }) => {
  return (
    <div className="p-4 w-[80%]">
      <h1 className="text-center text-2xl font-bold my-4">Schedule</h1>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month", "week", "day"]}
      />
    </div>
  );
};

export default CalendarComponent;
