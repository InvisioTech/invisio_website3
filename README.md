Invisio_website

## Email Functionality Setup

This website includes a working contact form that sends emails via Netlify Functions. Here's how to set it up:

### Basic Setup (Works out of the box)
The contact form will work immediately when deployed to Netlify using the basic Netlify Functions implementation.

### Enhanced Setup with EmailJS (Optional)
For enhanced email functionality with custom templates:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and User ID
5. In your Netlify dashboard, go to Site Settings > Environment Variables
6. Add these environment variables:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID` 
   - `EMAILJS_USER_ID`

### Deployment
1. Connect your repository to Netlify
2. The build settings are automatically configured via `netlify.toml`
3. Deploy and your contact form will work immediately!

### Email Template Variables (for EmailJS)
If using EmailJS, your email template can use these variables:
- `{{from_name}}` - Contact's name
- `{{from_email}}` - Contact's email
- `{{company}}` - Contact's company
- `{{message}}` - Contact's message
- `{{to_email}}` - Your email (hello.invisio@gmail.com)
