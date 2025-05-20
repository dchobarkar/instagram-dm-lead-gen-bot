import { Request, Response } from "express";

import {
  sendTextMessage,
  markSeen,
  showTyping,
} from "../services/instagramService";

export const verifyWebhook = (req: Request, res: Response) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token === VERIFY_TOKEN) {
    console.log("Webhook verified ✅");
    return res.status(200).send(challenge as string);
  } else {
    return res.sendStatus(403);
  }
};

export const handleMessage = async (req: Request, res: Response) => {
  const body = req.body;

  if (body.object === "instagram") {
    for (const entry of body.entry) {
      const event = entry.messaging?.[0];

      if (event?.sender?.id && event?.message?.text) {
        const senderId = event.sender.id;
        const message = event.message.text;

        console.log(`📩 User says: ${message}`);

        await markSeen(senderId);
        await showTyping(senderId);

        await sendTextMessage(
          senderId,
          "Hey! Thanks for messaging us. How can I help you today? 😊"
        );
      } else {
        console.log("⚠️ Unsupported or missing message format.");
      }
    }
  }

  res.sendStatus(200);
};
