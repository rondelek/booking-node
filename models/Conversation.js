import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
  participants: [String, String],
});

export default mongoose.model("Conversation", ConversationSchema);
