# Meta Instagram Messaging API Overview

This document outlines how Instagram Messaging works and the required setup to make API calls from your backend.

## 📂 Setup Requirements

1. **Facebook Developer Account** - <https://developers.facebook.com>
2. **Facebook App (Business type)**
3. **Instagram Professional (Business) Account** - Connected to a Facebook Page
4. **Facebook Page** - Serves as the API context
5. **Permissions**:
   - pages_show_list
   - instagram_basic
   - instagram_manage_messages
   - pages_messaging

## 🔄 API Lifecycle

1. A user sends a message to your IG business account.
2. Meta sends a webhook event to your server.
3. You process the webhook payload.
4. You respond using Instagram Messaging API with a Page Access Token.

## 🔑 Tokens

- **Development**:
  - Generate User Token with `pages_show_list`
  - Use Graph API Explorer to convert it to a **long-lived Page Access Token**

## 🔐 Env Vars Required

```env
PAGE_ACCESS_TOKEN=your_page_access_token_here
VERIFY_TOKEN=your_custom_verify_token
```

## 📬 Sample Webhook Event

```json
{
  "object": "instagram",
  "entry": [
    {
      "id": "<page-id>",
      "time": 1698888888,
      "messaging": [
        {
          "sender": { "id": "<user-psid>" },
          "recipient": { "id": "<page-id>" },
          "timestamp": 1698888888,
          "message": {
            "mid": "<message-id>",
            "text": "Hi, I’m interested!"
          }
        }
      ]
    }
  ]
}
```

## 📎 API Docs

- [Messaging API](https://developers.facebook.com/docs/instagram-api/guides/messaging/)
- [Webhook Reference](https://developers.facebook.com/docs/graph-api/webhooks/)
- [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
