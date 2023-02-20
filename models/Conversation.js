import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
  participants: [String, String],
  messages: [
    {
      senderID: String,
      senderName: String,
      receiverID: String,
      receiverName: String,
      message: String,
      date: Date,
      isRead: Boolean,
    },
    { timestamps: true },
  ],
});

export default mongoose.model("Conversation", ConversationSchema);
