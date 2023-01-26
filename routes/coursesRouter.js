import express from "express";
const router = express.Router();

import {
  createCourse,
  getNewCourses,
} from "../controllers/coursesController.js";

router.route("/").post(createCourse).get(getNewCourses);

export default router;
