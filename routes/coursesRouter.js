import express from "express";
const router = express.Router();

import {
  createCourse,
  //   deleteCourse,
  //   getAllCourses,
  //   updateCourse,
} from "../controllers/coursesController.js";

// import testUser from "../middleware/testUser.js";

router.route("/").post(createCourse);
// .get(getAllCourses);
// router.route("/:id").delete(deleteCourse).patch(updateCourse);

export default router;
