import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";

const getAllStudents = async (req, res) => {
  const allStudents = await User.find({});
  res.status(StatusCodes.OK).json({ allStudents });
};

const updateStudent = async (req, res) => {
  const { id: studentID } = req.params;
  const { isPaid } = req.body;
  const student = await User.findOne({ _id: studentID });

  if (!student) {
    throw new NotFoundError(`No user with id:  ${studentID}`);
  }

  const updatedStudent = await User.findOneAndUpdate(
    { _id: studentID },
    { isPaid: isPaid },
    {
      new: true,
      runValidators: true,
    }
  );

  // student.isPaid = isPaid;

  // await student.save();

  res.status(StatusCodes.OK).json({ updatedStudent });
};

export { getAllStudents, updateStudent };
