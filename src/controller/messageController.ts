import { Request, Response } from "express";

import {
  sendTextMessage,
  markSeen,
  showTyping,
} from "../services/instagramService";
import { getSession, clearSession } from "../sessionStore";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
        const message = event.message.text.trim();
        const session = getSession(senderId);

        await markSeen(senderId);
        await showTyping(senderId);

        switch (session.step) {
          case 0:
            await sendTextMessage(senderId, "Hey! 👋 What's your name?");
            session.step = 1;
            break;

          case 1:
            session.data.name = message;
            await sendTextMessage(
              senderId,
              `Nice to meet you, ${message}! What's your email? ✉️`
            );
            session.step = 2;
            break;

          case 2:
            if (!emailRegex.test(message)) {
              await sendTextMessage(
                senderId,
                "Hmm, that doesn't look like a valid email. Try again ✍️"
              );
            } else {
              session.data.email = message;
              await sendTextMessage(
                senderId,
                "Got it! Lastly, what are you interested in? 💡"
              );
              session.step = 3;
            }
            break;

          case 3:
            session.data.interest = message;
            await sendTextMessage(
              senderId,
              "Awesome! Thanks for sharing. We'll be in touch soon. 🚀"
            );
            console.log("📝 Captured lead:", session.data);
            clearSession(senderId);
            break;
        }
      }
    }
  }

  res.sendStatus(200);
};
