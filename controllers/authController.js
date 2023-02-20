import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Provide all values.");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Invalid credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  const {
    email,
    name,
    lastName,
    lastLesson,
    nextLesson,
    nextLessonDate,
    homework,
    isPaid,
    lastLessons,
  } = req.body;

  if (!email || !name) {
    throw new BadRequestError("Provide all values.");
  }

  const user = await User.findOne({ _id: req.user.userID });
  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.nextLesson = nextLesson;
  user.homework = homework;
  user.isPaid = isPaid;

  await user.save();

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user });
};

export { register, login, updateUser };
