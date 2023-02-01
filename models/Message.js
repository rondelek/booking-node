import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: [true, "Provide a name"],
  },

  receiver: {
    type: String,
    required: [true, "Provide a name"],
  },

  message: {
    type: String,
    required: [true, "Provide a message"],
    trim: true,
  },

  date: {
    type: Date,
    required: [true, "Provide a message"],
  },

  isRead: {
    type: Boolean,
  },
});

export default mongoose.model("Message", MessageSchema);
