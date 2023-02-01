import Conversation from "../models/Conversation.js";
import { StatusCodes } from "http-status-codes";

import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const createConversation = async (req, res) => {
  const { name, level, type, groupLimit, price, startsAt } = req.body;
  const course = await Course.create(req.body);
  res.status(StatusCodes.CREATED).json({ course });
};

const getAllConversations = async (req, res) => {
  const newCourses = await Course.find({});
  res.status(StatusCodes.OK).json({ newCourses });
};

export { createConversation, getAllConversations };
