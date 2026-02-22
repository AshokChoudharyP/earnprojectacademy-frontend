import { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import API from "../api/axios";
import StudentLayout from "../components/layout/StudentLayout";
import toast from "react-hot-toast";

const Calendar = () => {
 
  const [events, setEvents] = useState([]);

useEffect(() => {
  const fetchLiveClasses = async () => {
    try {
      const res = await API.get("/live-classes/my");

      const formatted = res.data.map(cls => ({
        id: cls._id,
        title: cls.title,
        start: cls.scheduledAt,
        extendedProps: {
          liveLink: cls.liveLink
        }
      }));

      setEvents(formatted);
    } catch (err) {
      console.error("Calendar error:", err);
    }
  };

  fetchLiveClasses();
}, []);

  const handleEventClick = (info) => {
    const liveLink = info.event.extendedProps.liveLink;
    const classStartTime = new Date(info.event.start);
    const now = new Date();

    // Enable link 2 hours before class
    const enableTime = new Date(
      classStartTime.getTime() - 2 * 60 * 60 * 1000
    );

    if (now >= enableTime) {
      window.open(liveLink, "_blank");
    } else {
      toast("Live class link opens 2 hours before start ⏰");
    }
  };

  return (
    <StudentLayout>
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Live Class Calendar</h2>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          height="80vh"
          eventClick={handleEventClick}
        />
      </div>
    </StudentLayout>
  );
};

export default Calendar;