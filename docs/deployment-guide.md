# 🚀 Deploying the Instagram Lead Bot on Railway

## 🔧 Requirements

- Railway account: <https://railway.app>
- GitHub repo connected
- Supabase project created
- Meta Developer Console setup complete

## ✅ Steps

1. Go to Railway > New Project > Deploy from GitHub
2. Select the repo (e.g., `instagram-dm-lead-gen-bot`)
3. Railway will auto-detect Node.js

   ## 🔐 Set Environment Variables in Railway

   ```env
   PAGE_ACCESS_TOKEN=your_meta_token
   VERIFY_TOKEN=your_custom_token
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your_anon_key_here
   ```

4. Wait for successful deployment.

## 🌍 Meta Webhook Configuration

- Navigate to <https://developers.facebook.com>
- Go to App > Webhooks
- Choose "Instagram" or "Page"
- Set Webhook URL to: `https://your-railway-url/webhook`
- Use same VERIFY_TOKEN
- Subscribe to:
  - `messages`
  - `messaging_postbacks`

Meta will verify via GET request.

## 💬 Testing

- Add Instagram test user (Roles > Instagram Testers)
- DM from that IG account
- Watch Railway logs or use ngrok for local development

✅ Your bot is now live!
