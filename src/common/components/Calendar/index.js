import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import googleAPI from "./utils/googleAPI";
import { useEffect } from "react";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const CustomCalendar = ({ config }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (config) {
      googleAPI.getAllCalendars(config).then((evns) => {
        setEvents(evns);
      });
    } else {
      console.log(
        "React Google Calendar requires you pass a configuration object"
      );
    }
  }, [config]);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      style={{ height: "100vh" }}
    />
  );
};

export default CustomCalendar;
