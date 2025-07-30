# Easy Contact Form Setup with Formspree (GitHub Pages)

Formspree is the easiest way to add a working contact form to your GitHub Pages site. No complex configuration needed!

## Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email

### Step 2: Create a New Form
1. Click "New Form" in your dashboard
2. Enter form name: "Portfolio Contact Form"
3. Set email to: `nqmasilela777@gmail.com`
4. Click "Create Form"

### Step 3: Get Your Form ID
After creating the form, you'll see a form endpoint like:
```
https://formspree.io/f/xpznvqko
```
Your Form ID is the part after `/f/` (e.g., `xpznvqko`)

### Step 4: Update Your Code
In `pages/contact.tsx`, replace `YOUR_FORM_ID` with your actual Form ID:

```typescript
// Change this line:
const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {

// To this (using your actual Form ID):
const formspreeResponse = await fetch('https://formspree.io/f/xpznvqko', {
```

### Step 5: Deploy and Test
1. Commit your changes to GitHub
2. Push to your repository
3. GitHub Pages will automatically deploy
4. Test your contact form
5. Check your email!

## That's It! 🎉

Your contact form is now working. When someone submits the form:
1. You'll receive an email at `nqmasilela777@gmail.com`
2. The email will include all form details
3. You can reply directly to the sender

## Formspree Free Tier
- **50 submissions per month** (perfect for portfolios)
- No setup complexity
- Spam protection included
- Email notifications
- Form analytics

## Example Email You'll Receive

```
From: Formspree <noreply@formspree.io>
To: nqmasilela777@gmail.com
Subject: New submission from Portfolio Contact Form

Name: John Doe
Email: john@example.com
Subject: Job Opportunity
Message: Hi Nhlakanipho, I saw your portfolio and would like to discuss a job opportunity...

---
This email was sent via your Formspree form.
Reply to this email to respond directly to the sender.
```

## Advanced Configuration (Optional)

### Custom Thank You Page
In your Formspree dashboard, you can set a custom redirect URL after form submission.

### Spam Protection
Formspree includes built-in spam protection, but you can add reCAPTCHA for extra security.

### Email Templates
Customize how the emails look in your Formspree dashboard settings.

## Troubleshooting

### Form not working?
1. Check that your Form ID is correct
2. Make sure you're using the exact URL format: `https://formspree.io/f/YOUR_FORM_ID`
3. Check browser console for errors

### Not receiving emails?
1. Check spam/junk folder
2. Verify your email in Formspree dashboard
3. Check Formspree dashboard for submission logs

### GitHub Pages not updating?
1. Check GitHub Actions tab for deployment status
2. Clear browser cache
3. Wait a few minutes for deployment to complete

## Alternative: Simple HTML Form (Even Easier!)

If you want an even simpler approach, you can use a basic HTML form:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <input type="text" name="subject" placeholder="Subject" required>
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

This works immediately without any JavaScript configuration!

---

## Why Formspree for GitHub Pages?

✅ **No server required** - works with static hosting
✅ **5-minute setup** - just create account and get Form ID
✅ **Free tier** - 50 submissions/month
✅ **Reliable** - handles all email delivery
✅ **Spam protection** - built-in security
✅ **Analytics** - see form submission stats

Perfect for portfolio contact forms on GitHub Pages!
