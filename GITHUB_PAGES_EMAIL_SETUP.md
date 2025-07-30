# Contact Form Setup for GitHub Pages

Since GitHub Pages only serves static files, we'll use EmailJS for client-side email functionality.

## EmailJS Setup (Free & Perfect for GitHub Pages)

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Easy setup, just connect your Google account
   - **Outlook**: If you prefer Microsoft
   - **Yahoo**: Alternative option
4. Follow the connection steps
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

**Template ID**: `template_contact` (you can customize this)

**Subject**: `Portfolio Contact: {{subject}}`

**Content**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #191F3A; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
    <h2 style="margin: 0; color: #00FFFF;">New Contact Form Submission</h2>
  </div>
  
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
    <div style="margin-bottom: 15px;">
      <strong>Name:</strong> {{from_name}}
    </div>
    
    <div style="margin-bottom: 15px;">
      <strong>Email:</strong> {{from_email}}
    </div>
    
    <div style="margin-bottom: 15px;">
      <strong>Subject:</strong> {{subject}}
    </div>
    
    <div style="margin-bottom: 15px;">
      <strong>Message:</strong>
      <div style="margin-top: 10px; padding: 15px; background-color: white; border-left: 4px solid #00FFFF;">
        {{message}}
      </div>
    </div>
    
    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
      <p>This message was sent from your portfolio contact form.</p>
      <p>Reply directly to this email to respond to {{from_name}}.</p>
    </div>
  </div>
</div>
```

4. Set the "To Email" to: `nqmasilela777@gmail.com`
5. Set "Reply To" to: `{{from_email}}`
6. Save the template

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (starts with something like `user_abc123`)

### Step 5: Update Your Code
Replace the placeholder values in your contact form:

```typescript
// In pages/contact.tsx, update these values:
service_id: 'your_actual_service_id',     // From Step 2
template_id: 'your_actual_template_id',   // From Step 3  
user_id: 'your_actual_public_key',        // From Step 4
```

### Step 6: Test Your Setup
1. Build and deploy your site to GitHub Pages
2. Go to your contact page
3. Fill out and submit the form
4. Check your email (nqmasilela777@gmail.com)

## Example Configuration

Here's what your final configuration should look like:

```typescript
body: JSON.stringify({
  service_id: 'service_abc123',           // Your Gmail service ID
  template_id: 'template_contact',        // Your template ID
  user_id: 'user_xyz789',                // Your public key
  template_params: {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'nqmasilela777@gmail.com'
  }
}),
```

## EmailJS Free Tier Limits
- **200 emails per month** (perfect for portfolio contact forms)
- No credit card required
- Upgrade to paid plan if you need more

## Security Notes
- EmailJS public key is safe to expose in client-side code
- Your actual email credentials are never exposed
- EmailJS handles all the email sending securely

## Troubleshooting

### Form not working?
1. Check browser console for errors
2. Verify all IDs match your EmailJS dashboard
3. Make sure your email service is connected in EmailJS
4. Test the template directly in EmailJS dashboard

### Not receiving emails?
1. Check spam/junk folder
2. Verify the "To Email" in your template
3. Test sending from EmailJS dashboard directly
4. Make sure your email service is properly connected

### GitHub Pages deployment issues?
1. Make sure your build process includes the contact page
2. Check that the form is accessible at your GitHub Pages URL
3. Verify no console errors on the deployed site

## Alternative: Formspree (Backup Option)

If EmailJS doesn't work for you, try Formspree:

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Update your form action to point to Formspree endpoint

This gives you a simple form-to-email solution that works perfectly with GitHub Pages!

---

## Current Status

✅ Contact form updated for GitHub Pages
✅ EmailJS integration ready
⏳ **You need to configure EmailJS with your credentials**

Follow the steps above to start receiving emails from your contact form!
