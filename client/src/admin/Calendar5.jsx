import { gapi } from "gapi-script";
import { Fragment, useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Scheduler, useScheduler } from "@aldabil/react-scheduler";
import { RESOURCES, EVENTS } from "./data";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import axios from "axios";
import moment from "moment";

export default function Calendar5() {
  const [events, setEvents] = useState([]);
  const { resourceViewMode, setResourceViewMode } = useScheduler();

  const calendarID = process.env.REACT_APP_CALENDAR_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

  const authFetch = axios.create({
    baseURL: "https://www.googleapis.com/calendar/v3/calendars",
  });

  const getEvents = async (calendarID, apiKey) => {
    console.log("getEvents");
    try {
      return await authFetch(`/${calendarID}/events?key=${apiKey}`).then(
        (response) =>
          setEvents(
            response.data.items.map((event) => {
              return {
                event_id: event.id,
                admin_id: 1,
                start: new Date(event.start.dateTime),
                end: new Date(event.end.dateTime),
                title: event.summary,
              };
            })
          )
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents(calendarID, apiKey);
  }, []);

  const test = () => {
    console.log("button click");
    getEvents(calendarID, apiKey);
  };
  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <span>Resource View Mode: </span>
        <Button
          color={resourceViewMode === "default" ? "primary" : "inherit"}
          variant={resourceViewMode === "default" ? "contained" : "text"}
          size="small"
          onClick={() => setResourceViewMode("default")}
        >
          Default
        </Button>
        <Button
          color={resourceViewMode === "tabs" ? "primary" : "inherit"}
          variant={resourceViewMode === "tabs" ? "contained" : "text"}
          size="small"
          onClick={() => setResourceViewMode("tabs")}
        >
          Tabs
        </Button>
      </div>
      {events.length !== 0 && (
        <Scheduler
          events={events}
          resources={RESOURCES}
          resourceFields={{
            idField: "admin_id",
            textField: "title",
            subTextField: "mobile",
            //   avatarField: "title",
            colorField: "primary",
          }}
          fields={[
            {
              name: "admin_id",
              type: "select",
              default: RESOURCES[0].admin_id,
              options: RESOURCES.map((res) => {
                return {
                  id: res.admin_id,
                  text: `${res.title} (${res.mobile})`,
                  value: res.admin_id, //Should match "name" property
                };
              }),
              config: { label: "Assignee", required: true },
            },
          ]}
          viewerExtraComponent={(fields, event) => {
            return (
              <div>
                {fields.map((field, i) => {
                  if (field.name === "admin_id") {
                    const admin = field.options.find(
                      (fe) => fe.id === event.admin_id
                    );
                    return (
                      <Typography
                        key={i}
                        style={{ display: "flex", alignItems: "center" }}
                        color="textSecondary"
                        variant="caption"
                        noWrap
                      >
                        <PersonRoundedIcon /> {admin.text}
                      </Typography>
                    );
                  } else {
                    return "";
                  }
                })}
              </div>
            );
          }}
        />
      )}
    </Fragment>
  );
}
