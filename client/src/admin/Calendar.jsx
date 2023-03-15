import Paper from "@mui/material/Paper";
import { gapi } from "gapi-script";
import React, { useEffect } from "react";

import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  DragDropProvider,
  AppointmentForm,
  AppointmentTooltip,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";

import { CurrentTimeIndicator } from "@devexpress/dx-react-scheduler";
import { useState } from "react";
import Calendar2 from "./Calendar2";

export const appointments = [
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 5, 25, 9, 35),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 0,
    location: "Room 1",
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 1,
    location: "Room 1",
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 5, 25, 14, 30),
    endDate: new Date(2018, 5, 25, 15, 35),
    id: 2,
    location: "Room 2",
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2018, 5, 26, 10, 0),
    endDate: new Date(2018, 5, 26, 11, 0),
    id: 3,
    location: "Room 2",
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2018, 5, 26, 12, 0),
    endDate: new Date(2018, 5, 26, 13, 35),
    id: 4,
    location: "Room 2",
  },
  {
    title: "New Brochures",
    startDate: new Date(2018, 5, 26, 14, 30),
    endDate: new Date(2018, 5, 26, 15, 45),
    id: 5,
    location: "Room 2",
  },
  {
    title: "Install New Database",
    startDate: new Date(2018, 5, 27, 9, 45),
    endDate: new Date(2018, 5, 27, 11, 15),
    id: 6,
    location: "Room 1",
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2018, 5, 27, 12, 0),
    endDate: new Date(2018, 5, 27, 14, 0),
    id: 7,
    location: "Room 3",
  },
  {
    title: "Upgrade Personal Computers",
    startDate: new Date(2018, 5, 27, 15, 15),
    endDate: new Date(2018, 5, 27, 16, 30),
    id: 8,
    location: "Room 3",
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 5, 28, 11, 0),
    endDate: new Date(2018, 5, 28, 12, 0),
    id: 9,
    location: "Room 3",
  },
  {
    title: "Prepare 2015 Marketing Plan",
    startDate: new Date(2018, 5, 28, 11, 0),
    endDate: new Date(2018, 5, 28, 13, 30),
    id: 10,
    location: "Room 1",
  },
  {
    title: "Brochure Design Review",
    startDate: new Date(2018, 5, 28, 14, 0),
    endDate: new Date(2018, 5, 28, 15, 30),
    id: 11,
    location: "Room 2",
  },
  {
    title: "Create Icons for Website",
    startDate: new Date(2018, 5, 29, 10, 0),
    endDate: new Date(2018, 5, 29, 11, 30),
    id: 12,
    location: "Room 2",
  },
  {
    title: "Upgrade Server Hardware",
    startDate: new Date(2018, 5, 29, 14, 30),
    endDate: new Date(2018, 5, 29, 16, 0),
    id: 13,
    location: "Room 3",
  },
  {
    title: "Submit New Website Design",
    startDate: new Date(2018, 5, 29, 16, 30),
    endDate: new Date(2018, 5, 29, 18, 0),
    id: 14,
    location: "Room 3",
  },
  {
    title: "Launch New Website",
    startDate: new Date(2018, 5, 29, 12, 20),
    endDate: new Date(2018, 5, 29, 14, 0),
    id: 15,
    location: "Room 2",
  },
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 6, 2, 9, 30),
    endDate: new Date(2018, 6, 2, 15, 30),
    id: 16,
    location: "Room 1",
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 6, 2, 12, 0),
    endDate: new Date(2018, 6, 2, 13, 0),
    id: 17,
    location: "Room 3",
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 6, 2, 14, 30),
    endDate: new Date(2018, 6, 2, 17, 30),
    id: 18,
    location: "Room 2",
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2018, 6, 2, 16, 0),
    endDate: new Date(2018, 6, 3, 9, 0),
    id: 19,
    location: "Room 2",
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2018, 6, 3, 10, 15),
    endDate: new Date(2018, 6, 3, 13, 35),
    id: 20,
    location: "Room 1",
  },
  {
    title: "New Brochures",
    startDate: new Date(2018, 6, 3, 14, 30),
    endDate: new Date(2018, 6, 3, 15, 45),
    id: 21,
    location: "Room 3",
  },
  {
    title: "Install New Database",
    startDate: new Date(2018, 6, 3, 15, 45),
    endDate: new Date(2018, 6, 4, 12, 15),
    id: 22,
    location: "Room 3",
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2018, 6, 4, 12, 35),
    endDate: new Date(2018, 6, 4, 14, 15),
    id: 23,
    location: "Room 3",
  },
  {
    title: "Upgrade Personal Computers",
    startDate: new Date(2018, 6, 4, 15, 15),
    endDate: new Date(2018, 6, 4, 20, 30),
    id: 24,
    location: "Room 2",
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 6, 5, 6, 0),
    endDate: new Date(2018, 6, 5, 14, 20),
    id: 25,
    location: "Room 1",
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 6, 5, 14, 35),
    endDate: new Date(2018, 6, 5, 16, 20),
    id: 26,
    location: "Room 1",
  },
  {
    title: "Customer Workshop 2",
    startDate: new Date(2018, 6, 5, 10, 0),
    endDate: new Date(2018, 6, 5, 11, 20),
    id: 27,
    location: "Room 2",
  },
  {
    title: "Prepare 2015 Marketing Plan",
    startDate: new Date(2018, 6, 5, 20, 0),
    endDate: new Date(2018, 6, 6, 13, 30),
    id: 28,
    location: "Room 3",
  },
  {
    title: "Brochure Design Review",
    startDate: new Date(2018, 6, 6, 14, 10),
    endDate: new Date(2018, 6, 6, 15, 30),
    id: 29,
    location: "Room 3",
  },
  {
    title: "Create Icons for Website",
    startDate: new Date(2018, 6, 6, 10, 0),
    endDate: new Date(2018, 6, 7, 14, 30),
    id: 30,
    location: "Room 1",
  },
  {
    title: "Upgrade Server Hardware",
    startDate: new Date(2018, 6, 3, 9, 30),
    endDate: new Date(2018, 6, 3, 12, 25),
    id: 31,
    location: "Room 2",
  },
  {
    title: "Submit New Website Design",
    startDate: new Date(2018, 6, 3, 12, 30),
    endDate: new Date(2018, 6, 3, 18, 0),
    id: 32,
    location: "Room 2",
  },
  {
    title: "Launch New Website",
    startDate: new Date(2018, 6, 3, 12, 20),
    endDate: new Date(2018, 6, 3, 14, 10),
    id: 33,
    location: "Room 2",
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 5, 26, 0, 0),
    endDate: new Date(2018, 5, 27, 0, 0),
    id: 34,
    location: "Room 1",
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 5, 29, 10, 0),
    endDate: new Date(2018, 5, 30, 14, 30),
    id: 35,
    location: "Room 1",
  },
  {
    title: "Google AdWords Strategy",
    startDate: new Date(2018, 6, 3, 0, 0),
    endDate: new Date(2018, 6, 4, 10, 30),
    id: 36,
    location: "Room 3",
  },
  {
    title: "Rollout of New Website and Marketing Brochures",
    startDate: new Date(2018, 6, 5, 10, 0),
    endDate: new Date(2018, 6, 9, 14, 30),
    id: 37,
    location: "Room 3",
  },
  {
    title: "Update NDA Agreement",
    startDate: new Date(2018, 6, 1, 10, 0),
    endDate: new Date(2018, 6, 3, 14, 30),
    id: 38,
    location: "Room 2",
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 6, 1),
    endDate: new Date(2018, 6, 2),
    allDay: true,
    id: 39,
    location: "Room 1",
  },
];

export default function Calendar() {
  const [data, setData] = useState(appointments);
  const [newEvent, setNewEvent] = useState();

  const calendarID = process.env.REACT_APP_CALENDAR_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

  // const getEvents = (calendarID, apiKey) => {
  //   function initiate() {
  //     gapi.client
  //       .init({
  //         apiKey: apiKey,
  //       })
  //       .then(function () {
  //         return gapi.client.request({
  //           path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
  //         });
  //       })
  //       .then(
  //         (response) => {
  //           let events = response.result.items;
  //           console.log(events);

  //           setEvents(
  //             events.map((event) => {
  //               return {
  //                 id: event.id,
  //                 startDate: event.start.dateTime,
  //                 endDate: event.end.dateTime,
  //                 title: event.summary,
  //               };
  //             })
  //           );
  //         },
  //         function (err) {
  //           return [false, err];
  //         }
  //       );
  //   }
  //   gapi.load("client", initiate);
  // };

  // getEvents(calendarID, apiKey);

  // function createEvent(startDate, title, endDate) {
  //   const event = {
  //     id: 1, // You must use a custom id generator
  //     title: title,
  //     start: startDate,
  //     allDay: endDate ? endDate : true, // If there's no end date, the event will be all day of start date
  //   };

  //   setNewEvent({ title: title, startDate: startDate, endDate });
  // }

  // ****************************

  const [currentDate, setCurrentDate] = useState("2018-06-27");
  const [addedAppointment, setAddedAppointment] = useState();
  const [appointmentChanges, setAppointmentChanges] = useState();
  const [editingAppointment, setEditingAppointment] = useState(undefined);

  // ********************************

  const currentDateChange = (currentDate) => {
    // debugger;
    console.log("currentDataChange");
    setCurrentDate(currentDate);
  };

  const changeAddedAppointment = (addedAppointment) => {
    // debugger;
    console.log("changeAddedAppointment");
    setAddedAppointment(addedAppointment);
  };

  const changeAppointmentChanges = (appointmentChanges) => {
    console.log(appointmentChanges);
    // debugger;
    console.log("changeAppointmentChanges");
    setAppointmentChanges(appointmentChanges);
  };

  const changeEditingAppointment = (editingAppointment) => {
    console.log("changeEditingAppointment: ", editingAppointment);
    setEditingAppointment(editingAppointment);
  };

  const commitChanges = (added, changed, deleted) => {
    debugger;
    let events = data;
    if (added) {
      console.log("added");
      const startingAddedId =
        events.length > 0 ? events[events.length - 1].id + 1 : 0;
      events = [...events, { id: startingAddedId, ...added }];
    }
    if (changed) {
      console.log("changed");
      events = events.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      );
    }
    if (deleted !== undefined) {
      console.log("deleted");
      events = events.filter((appointment) => appointment.id !== deleted);
    }
    setData(events);
  };

  return (
    <Paper>
      <Scheduler data={data} height={660} showCurrentTimeIndicator={true}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={currentDateChange}
        />
        <EditingState
          onCommitChanges={commitChanges}
          addedAppointment={addedAppointment}
          onAddedAppointmentChange={changeAddedAppointment}
          appointmentChanges={appointmentChanges}
          onAppointmentChangesChange={changeAppointmentChanges}
          editingAppointment={editingAppointment}
          onEditingAppointmentChange={changeEditingAppointment}
        />
        <WeekView startDayHour={7} endDayHour={21} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <AllDayPanel />
        <EditRecurrenceMenu />
        <ConfirmationDialog />
        <Appointments />
        <AppointmentTooltip showOpenButton showDeleteButton />
        <AppointmentForm />

        <DragDropProvider />
        <CurrentTimeIndicator shadePreviousCells updateInterval={10000} />
      </Scheduler>
      <Calendar2 />
    </Paper>
  );
}
