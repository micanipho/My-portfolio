# Contact Form for GitHub Pages - Complete Setup

Your contact form is ready for GitHub Pages! Choose one of these simple options:

## 🚀 Option 1: Formspree (Recommended - Easiest)

### Why Formspree?
- ✅ 5-minute setup
- ✅ No complex configuration
- ✅ 50 free submissions/month
- ✅ Built-in spam protection
- ✅ Perfect for GitHub Pages

### Setup Steps:
1. **Create Account**: Go to [formspree.io](https://formspree.io) and sign up
2. **Create Form**: Click "New Form", name it "Portfolio Contact", set email to `nqmasilela777@gmail.com`
3. **Get Form ID**: Copy the ID from the URL (e.g., `xpznvqko` from `https://formspree.io/f/xpznvqko`)
4. **Update Code**: In `pages/contact.tsx`, replace `YOUR_FORM_ID` with your actual Form ID:
   ```typescript
   const formspreeResponse = await fetch('https://formspree.io/f/xpznvqko', {
   ```
5. **Deploy**: Commit, push to GitHub, and test!

---

## 🔧 Option 2: EmailJS (More Customizable)

### Why EmailJS?
- ✅ More control over email templates
- ✅ 200 free emails/month
- ✅ Custom email styling
- ✅ Multiple email services

### Setup Steps:
1. **Create Account**: Go to [emailjs.com](https://emailjs.com) and sign up
2. **Add Email Service**: Connect your Gmail/Outlook account
3. **Create Template**: Use the template from `GITHUB_PAGES_EMAIL_SETUP.md`
4. **Get Credentials**: Note your Service ID, Template ID, and Public Key
5. **Update Code**: In `pages/contact.tsx`, replace the EmailJS placeholders:
   ```typescript
   service_id: 'service_abc123',     // Your service ID
   template_id: 'template_contact',  // Your template ID  
   user_id: 'user_xyz789',          // Your public key
   ```

---

## 📝 Current Code Status

Your contact form (`pages/contact.tsx`) is configured with:

1. **Formspree integration** (primary method)
2. **EmailJS fallback** (backup method)
3. **Proper error handling**
4. **Loading states**
5. **Form validation**
6. **Success/error messages**

## 🔄 How It Works

1. User fills out contact form
2. Form tries Formspree first
3. If Formspree fails, tries EmailJS
4. You receive email at `nqmasilela777@gmail.com`
5. User sees success/error message

## 📧 What You'll Receive

**Formspree Email:**
```
From: Formspree <noreply@formspree.io>
Subject: New submission from Portfolio Contact Form

Name: John Doe
Email: john@example.com
Subject: Job Opportunity
Message: Hi, I'd like to discuss...
```

**EmailJS Email:**
```
From: Portfolio Contact <noreply@emailjs.com>
Subject: Portfolio Contact: Job Opportunity

[Styled HTML email with your portfolio theme]
Name: John Doe
Email: john@example.com
Message: Hi, I'd like to discuss...
```

## 🚀 Deployment Steps

1. **Choose your email service** (Formspree recommended)
2. **Update the Form ID/credentials** in `pages/contact.tsx`
3. **Build your site**: `npm run build`
4. **Deploy to GitHub Pages**
5. **Test the contact form**
6. **Check your email**

## 🔍 Testing

After deployment:
1. Go to your contact page
2. Fill out the form with your own email
3. Submit the form
4. Check for success message
5. Check your email inbox (and spam folder)

## 🛠️ Troubleshooting

### Form shows error?
- Check browser console for error messages
- Verify your Form ID/credentials are correct
- Make sure you're using the exact format

### Not receiving emails?
- Check spam/junk folder
- Verify email address in service dashboard
- Test with a different email address

### GitHub Pages not updating?
- Check GitHub Actions for deployment status
- Clear browser cache
- Wait a few minutes for deployment

## 📊 Service Comparison

| Feature | Formspree | EmailJS |
|---------|-----------|---------|
| Setup Time | 5 minutes | 15 minutes |
| Free Emails | 50/month | 200/month |
| Customization | Basic | Advanced |
| Spam Protection | Built-in | Manual |
| Best For | Quick setup | Custom styling |

## 🎯 Recommendation

**Start with Formspree** - it's the easiest and most reliable for GitHub Pages. You can always switch to EmailJS later if you need more customization.

---

## ✅ Next Steps

1. Choose Formspree or EmailJS
2. Follow the setup guide
3. Update your code with the credentials
4. Deploy and test
5. Start receiving contact form emails!

Your contact form is ready to go live! 🚀
