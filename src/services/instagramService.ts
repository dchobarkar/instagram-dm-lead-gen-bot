import axios from "axios";

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const API_BASE_URL = "https://graph.facebook.com/v19.0/me/messages";

export async function sendTextMessage(recipientId: string, text: string) {
  const url = `${API_BASE_URL}?access_token=${PAGE_ACCESS_TOKEN}`;

  const payload = {
    recipient: { id: recipientId },
    message: { text },
    messaging_type: "RESPONSE",
  };

  try {
    const res = await axios.post(url, payload);
    console.log("✅ Message sent:", res.data);
  } catch (err: any) {
    console.error(
      "❌ Error sending message:",
      err.response?.data || err.message
    );
  }
}

export async function markSeen(recipientId: string) {
  const url = `${API_BASE_URL}?access_token=${PAGE_ACCESS_TOKEN}`;

  try {
    await axios.post(url, {
      recipient: { id: recipientId },
      sender_action: "mark_seen",
    });
  } catch (err: any) {
    console.error(
      "❌ Error marking message as seen:",
      err.response?.data || err.message
    );
  }
}

export async function showTyping(recipientId: string) {
  const url = `${API_BASE_URL}?access_token=${PAGE_ACCESS_TOKEN}`;

  try {
    await axios.post(url, {
      recipient: { id: recipientId },
      sender_action: "typing_on",
    });
  } catch (err: any) {
    console.error(
      "❌ Error showing typing indicator:",
      err.response?.data || err.message
    );
  }
}
