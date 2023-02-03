import Conversation from "../models/Conversation.js";
import { StatusCodes } from "http-status-codes";

import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const createConversation = async (req, res) => {
  const { participants } = req.body;
  const conversation = await Conversation.create(req.body);
  // res.status(StatusCodes.CREATED).json({ course });
  res.json({ conversation });
};

const getAllConversations = async (req, res) => {
  const allConversations = await Conversation.find({});
  res.json({ allConversations });
};

const updateConversation = async (req, res) => {
  const { id: sender } = req.params;
  const { receiver, message, date, isRead } = req.body;
  const conversation = await Conversation.findOne({
    $or: [
      { participants: [sender, receiver] },
      { participants: [receiver, sender] },
    ],
  });

  console.log(conversation._id);

  if (!conversation) {
    const newConversation = await new Conversation({
      participants: [sender, receiver],
      messages: [
        {
          sender,
          receiver,
          message,
          date: new Date(),
          isRead,
        },
      ],
    });
    await newConversation.save();
    // console.log(newConversation);
    res.status(StatusCodes.OK).json({ newConversation });
  }

  const newMessage = {
    sender: sender,
    receiver: receiver,
    message: message,
    date: date,
    isRead: isRead,
  };

  conversation.messages.push(newMessage);
  await conversation.save();

  res.status(StatusCodes.OK).json({ conversation });

  // if (!student) {
  //   throw new NotFoundError(`No user with id:  ${studentID}`);
  // }

  // const updatedStudent = await User.findOneAndUpdate(
  //   { _id: studentID },
  //   { isPaid: isPaid },
  //   {
  //     new: true,
  //     runValidators: true,
  //   }
  // );

  // student.isPaid = isPaid;

  // await student.save();

  // res.status(StatusCodes.OK).json({ updatedStudent });
};

export { createConversation, getAllConversations, updateConversation };
