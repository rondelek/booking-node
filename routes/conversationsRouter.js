import express from "express";
const router = express.Router();

import {
  createConversation,
  getAllConversations,
} from "../controllers/conversationsController.js";

router.route("/").post(createConversation).get(getAllConversations);

export default router;
