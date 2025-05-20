# ✅ Testing the Instagram DM Bot

Thorough testing ensures your bot behaves reliably before launch. Follow these steps:

## 🙋 Step 1: Add Test Users in Meta Console

- Go to [Meta Developer Console](https://developers.facebook.com)
- App > Roles > **Instagram Testers**
- Add your personal Instagram handle
- Accept the invite on Instagram App Settings

## 💬 Step 2: DM the Connected Business Profile

Try:

```text
Hi there
```

Bot should reply:

> Hey! 👋 What's your name?

Complete the flow:

- Name
- Invalid and valid email
- Interest

Check Supabase — new row should be inserted.

## 🔍 Step 3: Test Edge Cases

Test:

- Empty message
- Only emojis
- Invalid emails
- Starting mid-flow
- Concurrent users

Expected:

- No crash
- Graceful error responses
- Flow continuity

## 📊 Step 4: Monitor Logs on Railway

- Visit [Railway](https://railway.app)
- Go to your project > Logs tab
- Watch real-time webhook events and console output

## 🔁 Step 5: Simulate Webhooks via Curl or Postman

```bash
curl -X POST https://your-server.com/webhook   -H "Content-Type: application/json"   -d '{
    "object": "instagram",
    "entry": [{
      "id": "test-page-id",
      "messaging": [{
        "sender": { "id": "123456789" },
        "message": { "text": "Hello" }
      }]
    }]
  }'
```

Useful for:

- Testing without Instagram UI
- QA automation

## 🧩 Common Issues

| Issue                 | Fix                                   |
| --------------------- | ------------------------------------- |
| No bot reply          | Check `PAGE_ACCESS_TOKEN`             |
| 403 webhook error     | VERIFY_TOKEN mismatch                 |
| No test DM received   | Accept tester invite on Instagram     |
| Supabase insert fails | Enable RLS policy: `Allow all insert` |

✅ Your bot is now tested, debugged, and production-ready!
