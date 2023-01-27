import express from "express";
const router = express.Router();

import {
  getAllStudents,
  updateStudent,
} from "../controllers/adminController.js";

import authenticateUser from "../middleware/auth.js";

router.route("/").get(getAllStudents).patch(authenticateUser, updateStudent);
router.route("/students/:id").patch(updateStudent);

export default router;
