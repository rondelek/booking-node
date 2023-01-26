import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import moment from "moment/moment";
import { Box } from "@mui/system";

export default function CourseCard({ course }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={80}
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="green iguana"
          sx={{ maxHeight: "180px" }}
        />
        <div className="flex mt-4">
          <span
            className={`ml-3 mt-2 px-4 py-1 rounded-full text-white ${
              course?.type === "business" ? "bg-blue" : "bg-pink"
            }  bg-opacity-90 font-semibold text-xs flex align-center w-max`}
          >
            {course.type}
          </span>
          <span className="ml-3 mt-2 px-4 py-1 rounded-full text-white bg-yellow bg-opacity-90 font-semibold text-xs flex align-center w-max">
            {course.level}
          </span>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "1rem",
              gap: "5px",
              color: "gray",
            }}
          >
            <CalendarMonthIcon />
            {moment(course.startsAt).format("l")}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing={true}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: ".5rem",
          marginBottom: "1rem",
          gap: ".5rem",
        }}
      >
        <Button size="small" color="primary" fullWidth variant="outlined">
          zobacz szczegóły
        </Button>
        <Button
          size="small"
          variant="contained"
          fullWidth
          endIcon={<SendIcon />}
        >
          zapisz się
        </Button>
      </CardActions>
    </Card>
  );
}
