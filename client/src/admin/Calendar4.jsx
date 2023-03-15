// import { createRoot } from "react-dom/client";
// import * as React from "react";
// import ReactDOM from "react-dom";
// import Scheduler from "react-mui-scheduler";
// import { useState } from "react";
// import { gapi } from "gapi-script";
// // import {
// //   ScheduleComponent,
// //   Day,
// //   Week,
// //   WorkWeek,
// //   Month,
// //   Agenda,
// //   Inject,
// //   DragAndDrop,
// // } from "@syncfusion/ej2-react-schedule";
// import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
// import { extend } from "@syncfusion/ej2-base";
// import dataSource from "./datasource";
// import { useEffect } from "react";

export default function Calendar4() {
  // const [events, setEvents] = React.useState([]);

  // const calendarID = process.env.REACT_APP_CALENDAR_ID;
  // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  // const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

  // function onClickAdd() {
  //   let Data = [
  //     {
  //       Id: 1,
  //       Subject: "Conference",
  //       StartTime: new Date(2023, 2, 17, 9, 0),
  //       EndTime: new Date(2023, 2, 17, 10, 0),
  //       IsAllDay: false,
  //     },
  //     {
  //       Id: 2,
  //       Subject: "Meeting",
  //       StartTime: new Date(2018, 1, 15, 10, 0),
  //       EndTime: new Date(2018, 1, 15, 11, 30),
  //       IsAllDay: false,
  //     },
  //   ];

  //   console.log(scheduleObj);
  //   scheduleObj.addEvent(Data);
  // }

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

  //           setEvents(
  //             events.map((event) => {
  //               return {
  //                 id: event.id,
  //                 StartTime: event.start.dateTime,
  //                 EndTime: event.end.dateTime,
  //                 Subject: event.summary,
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

  // useEffect(() => {
  //   getEvents(calendarID, apiKey);
  //   console.log(events);
  // }, []);

  // let scheduleObj;

  // function onPopupOpen(args) {
  //   console.log(args);

  //   if (args.type === "Editor") {
  //     scheduleObj.eventWindow.recurrenceEditor.frequencies = ["none", "daily"];
  //   }

  //   if (args.type === "DeleteAlert") {
  //     let content = args.element.querySelector("#QuickDialog_dialog-content");
  //     console.log(content);
  //     let dropdown = React.createElement("button", {
  //       className: "reason-dropdown",
  //     });
  //     content.appendChild(dropdown);

  //     console.log(dropdown);
  //     console.log(content);
  //   }
  // }

  // //   function onPopupClose(args) {
  // //     if (args.type === "Editor" && args.data && this.recurrObject.value) {
  // //       args.data.RecurrenceRule = this.recurrObject.value;
  // //     }
  // //   }

  // //   function onPopupClose(args) {
  // //     if (args.type === "Editor") {
  // //       scheduleObj.eventWindow.recurrenceEditor = null;
  // //     }
  // //   }

  // console.log(events.length);
  return (
    <>
      {/* <ButtonComponent id="add" title="Add" onClick={onClickAdd}>
        Add
      </ButtonComponent>
      <ScheduleComponent
        width="100%"
        ref={(t) => (scheduleObj = t)}
        height="450px"
        startHour="07:00"
        endHour="21:00"
        selectedDate={new Date(2023, 1, 17)}
        allowDragAndDrop="true"
        eventSettings={{
          dataSource: events,
        }}
        popupOpen={onPopupOpen}
        //   popupClose={onPopupClose}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]} />
      </ScheduleComponent> */}
    </>
  );
}
