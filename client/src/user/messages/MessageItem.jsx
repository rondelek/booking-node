import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box } from "@mui/system";
import { Truncate } from "@primer/react";
import Wrapper from "../../assets/wrappers/MessageItem";

export default function MessageItem() {
  return (
    <Wrapper>
      <ListItem sx={{ padding: "1.5rem 1rem" }}>
        <FiberManualRecordIcon
          color="warning"
          sx={{ width: "20px", marginRight: "16px", marginLeft: "2px" }}
        />
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box>
          <h2>John Smith</h2>
          <h3>Jest to jakiś temat</h3>
          <p>
            <Truncate maxWidth={390}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              facere quae aliquam dolore est modi id quaerat consectetur dicta
              amet suscipit, quam distinctio alias debitis pariatur praesentium
              quisquam laboriosam doloremque?
            </Truncate>
          </p>
        </Box>
      </ListItem>
      <Divider variant="inset" />
      <ListItem>
        <StarBorderIcon
          sx={{
            width: "24px",
            marginRight: "14px",
            stroke: "#ffffff",
            strokeWidth: 1,
          }}
        />

        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" />
      <ListItem>
        <StarBorderIcon
          sx={{
            width: "24px",
            marginRight: "14px",
            stroke: "#ffffff",
            strokeWidth: 1,
          }}
        />
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" />
      <ListItem>
        <StarBorderIcon
          sx={{
            width: "24px",
            marginRight: "14px",
            stroke: "#ffffff",
            strokeWidth: 1,
          }}
        />
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </Wrapper>
  );
}
