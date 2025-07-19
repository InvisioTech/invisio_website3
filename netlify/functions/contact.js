exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, company, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Use Netlify's built-in form handling or integrate with email service
    // For this implementation, we'll use a webhook approach that works with various email services
    
    // Format the email content
    const emailContent = {
      to: 'hello.invisio@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2, #06b6d4); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; text-align: center;">New Contact Form Submission</h1>
          </div>
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0891b2;">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #1e293b; margin-top: 0;">Message</h2>
              <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 4px solid #0891b2;">
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                This message was sent from the Invisio website contact form.<br>
                Timestamp: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}

---
Sent from Invisio Contact Form
Timestamp: ${new Date().toLocaleString()}
      `
    };

    // Use EmailJS or similar service for actual email sending
    // For now, we'll use a webhook approach that can integrate with various email services
    
    // You can integrate with services like:
    // 1. EmailJS (client-side, but can be used server-side too)
    // 2. SendGrid
    // 3. Mailgun
    // 4. Resend
    // 5. Netlify Forms (built-in)

    // For this example, we'll use a simple webhook approach
    // In production, you'd replace this with your preferred email service

    // Simulate email sending (replace with actual email service)
    console.log('Email would be sent:', emailContent);

    // For demonstration, we'll return success
    // In a real implementation, you'd integrate with your email service here
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully!' 
      }),
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error. Please try again later.' 
      }),
    };
  }
};