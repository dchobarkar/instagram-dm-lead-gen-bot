import express from "express";
import { verifyWebhook, handleMessage } from "../controller/messageController";

const router = express.Router();

router.get("/", verifyWebhook);
router.post("/", handleMessage);

export default router;
