import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
  participants: [String, String],
  messages: [
    {
      sender: String,
      receiver: String,
      message: String,
      date: Date,
      isRead: Boolean,
    },
    { timestamps: true },
  ],
});

export default mongoose.model("Conversation", ConversationSchema);
