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

export default function Calendar3() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState();

  const calendarID = process.env.REACT_APP_CALENDAR_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

  const getEvents = (calendarID, apiKey) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (response) => {
            let events = response.result.items;

            setEvents(
              events.map((event) => {
                return {
                  startDate: event.start.dateTime,
                  endDate: event.end.dateTime,
                  title: event.summary,
                };
              })
            );
          },
          function (err) {
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };

  const getColors = (calendarID, apiKey) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/colors`,
          });
        })
        .then((response) => {
          //   let events = response.result.items;
          //   setEvents(
          //     events.map((event) => {
          //       return {
          //         start: event.start.dateTime,
          //         end: event.end.dateTime,
          //         title: event.summary,
          //       };
          //     })
          //   );
          // },
          // function (err) {
          //   return [false, err];
        });
    }
    gapi.load("client", initiate);
  };

  useEffect(() => {
    const events = getEvents(calendarID, apiKey);
    setEvents(events);
  }, []);

  useEffect(() => {
    const colors = getColors(calendarID, apiKey);
  }, []);

  const handleEventClick = (clickInfo) => {
    console.log(clickInfo);

    console.log("handleEventClick");
  };

  const handleEvents = (events) => {
    console.log(events);

    console.log("handleEvents");
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <p>{eventInfo.event.title}</p>
      </>
    );
  };

  function createEvent(startDate, title, endDate) {
    const event = {
      id: 1, // You must use a custom id generator
      title: title,
      start: startDate,
      allDay: endDate ? endDate : true, // If there's no end date, the event will be all day of start date
    };

    setNewEvent({ title: title, startDate: startDate, endDate });

    setIsOpen(true);
  }

  const dateClick = (e) => {
    createEvent(e.dateStr, "Some event", undefined);
  };

  const [isOpen, setIsOpen] = useState(false);

  const onEventAdded = (event) => {
    setEvents([...events, event]);
  };

  // ****************************

  const [data, setData] = useState(events);
  const [currentDate, setCurrentDate] = useState("2018-06-27");
  const [addedAppointment, setAddedAppointment] = useState();
  const [appointmentChanges, setAppointmentChanges] = useState();
  const [editingAppointment, setEditingAppointment] = useState(undefined);

  //   *****************************

  // ********************************

  const currentDateChange = (currentDate) => {
    setCurrentDate(currentDate);
  };

  const changeAddedAppointment = (addedAppointment) => {
    setAddedAppointment(addedAppointment);
  };

  const changeAppointmentChanges = (appointmentChanges) => {
    setAppointmentChanges(appointmentChanges);
  };

  const changeEditingAppointment = (editingAppointment) => {
    setEditingAppointment(editingAppointment);
  };

  console.log(events);

  return (
    <Paper>
      <Scheduler data={events} height={660} showCurrentTimeIndicator={true}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={currentDateChange}
        />
        <EditingState
          //   onCommitChanges={commitChanges}
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
    </Paper>
  );
}
