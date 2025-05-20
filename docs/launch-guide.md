# 🚀 Launch Guide: Submitting Your Instagram Bot for Meta Review

Your bot is ready — now let's go live! Follow these steps to submit your Meta app for production access.

## ✅ Step 1: Prepare for Review

Before applying:

- Test thoroughly with Instagram test users
- Clean up logs and test-only features
- Ensure user-facing replies are clear, helpful, and policy-compliant

Meta reviewers will:

- Manually test your Instagram bot
- Confirm your replies are not misleading
- Validate email handling, privacy, and message quality

## 🔐 Step 2: Enable Permissions

In [Meta Developer Console](https://developers.facebook.com):

1. Go to **App Review > Permissions and Features**
2. Request:

   - `pages_messaging`
   - `instagram_basic`
   - `instagram_manage_messages`

### Sample Justification

```text
We use `instagram_manage_messages` to help customers inquire about services via DM. The bot guides users through a short Q&A flow and stores their lead details securely in Supabase.
```

## 🎥 Step 3: Add Screencast and Steps

Meta requires a screencast:

### Your video should show

- User DMs your business IG account
- Bot replies, asks for name/email/interest
- User finishes flow, gets thank-you message

Upload to **Loom**, **YouTube (unlisted)**, or **Google Drive (shared link)**

### Add Instructions

```text
1. Go to Instagram profile @yourbusiness
2. Send "hi" to trigger the bot
3. Complete the Q&A flow
4. Bot ends with a thank-you message
```

## 📝 Step 4: Submit Review

1. Go to **App Review > Requests**
2. Add requested permissions
3. Attach:
   - Screencast link
   - Step-by-step usage guide
4. Submit ✅

Meta typically responds in 3–7 days.

If rejected:

- Read the reason
- Fix and re-submit
- Keep it concise and compliant

## 🚀 Step 5: Switch App to Live

After approval:

- Go to **App Settings > Basic**
- Switch App Mode from **Development** ➝ **Live**
- Your bot is now available to all Instagram users!

## 📋 Final Go-Live Checklist

| Task                           | Done |
| ------------------------------ | ---- |
| Webhook verified               | ✅   |
| Supabase storing leads         | ✅   |
| Session handling in place      | ✅   |
| Edge case testing complete     | ✅   |
| Permissions requested          | ✅   |
| Screencast + instructions done | ✅   |
| App switched to live mode      | ✅   |

🎉 Congratulations! You're now running a production-ready Instagram DM bot with lead capture, persistence, and automated replies.

Next up: Integrating this bot with your eCommerce store or website for multi-channel lead gen 🔗
