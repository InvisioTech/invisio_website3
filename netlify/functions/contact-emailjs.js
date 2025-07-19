// Alternative implementation using EmailJS for actual email sending
const https = require('https');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, company, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // EmailJS configuration (you'll need to set these as environment variables in Netlify)
    const emailjsData = {
      service_id: process.env.EMAILJS_SERVICE_ID || 'your_service_id',
      template_id: process.env.EMAILJS_TEMPLATE_ID || 'your_template_id',
      user_id: process.env.EMAILJS_USER_ID || 'your_user_id',
      template_params: {
        from_name: name,
        from_email: email,
        company: company || 'Not provided',
        message: message,
        to_email: 'hello.invisio@gmail.com'
      }
    };

    // Send email via EmailJS
    const emailjsResponse = await new Promise((resolve, reject) => {
      const postData = JSON.stringify(emailjsData);
      
      const options = {
        hostname: 'api.emailjs.com',
        port: 443,
        path: '/api/v1.0/email/send',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          if (res.statusCode === 200) {
            resolve({ success: true, data });
          } else {
            reject(new Error(`EmailJS API error: ${res.statusCode}`));
          }
        });
      });

      req.on('error', reject);
      req.write(postData);
      req.end();
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully!' 
      }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to send message. Please try again later.' 
      }),
    };
  }
};