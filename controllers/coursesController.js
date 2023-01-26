import Course from "../models/Course.js";
import { StatusCodes } from "http-status-codes";

import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const createCourse = async (req, res) => {
  const { name, level, type, groupLimit, price, startsAt } = req.body;
  const course = await Course.create(req.body);
  res.status(StatusCodes.CREATED).json({ course });
};

const getNewCourses = async (req, res) => {
  const newCourses = await Course.find({});
  res.status(StatusCodes.OK).json({ newCourses });
};

export { createCourse, getNewCourses };
