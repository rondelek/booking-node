import express from "express";
const router = express.Router();

import {
  createConversation,
  getAllConversations,
  updateConversation,
} from "../controllers/conversationsController.js";

router.route("/").post(createConversation).get(getAllConversations);
router.route("/:id").patch(updateConversation);

export default router;
