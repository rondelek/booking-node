import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";

// db
import connectDB from "./db/connect.js";

// routes
import authRouter from "./routes/authRouter.js";
import coursesRouter from "./routes/coursesRouter.js";
import adminRouter from "./routes/adminRouter.js";

// middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
// json
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send({ msg: "hello" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/courses", authenticateUser, coursesRouter);
app.use("/api/v1/admin", authenticateUser, adminRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
