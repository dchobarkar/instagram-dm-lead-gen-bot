import { Request, Response } from "express";

export const verifyWebhook = (req: Request, res: Response) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token === VERIFY_TOKEN) {
    console.log("Webhook verified ✅");
    return res.status(200).send(challenge as string);
  } else {
    console.log("Webhook verification failed ❌");
    return res.sendStatus(403);
  }
};

export const handleMessage = (req: Request, res: Response) => {
  const body = req.body;

  if (body.object === "instagram") {
    body.entry.forEach((entry: any) => {
      const event = entry.messaging[0];

      if (event.message && event.sender && event.sender.id) {
        const senderId = event.sender.id;
        const messageText = event.message.text;

        console.log(`📩 Message from ${senderId}: ${messageText}`);
        // Next: Call a responder here
      } else {
        console.log(
          "⚠️ Unsupported event format:",
          JSON.stringify(event, null, 2)
        );
      }
    });
  } else {
    console.log("❌ Non-Instagram webhook received");
  }

  res.sendStatus(200); // Always respond with 200 to acknowledge receipt
};
