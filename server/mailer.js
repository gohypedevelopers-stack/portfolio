const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async ({ name, email, message }) => {
  return resend.emails.send({
    from: `${name} via Portfolio<onboarding@resend.dev>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New message from ${name}`,
    reply_to: email,
    html: `
      <div style="background-color: #eef1f5; padding: 60px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="max-width: 640px; margin: auto; background-color: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.12);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #6e00b8, #4d0099, #a76dd4); padding: 30px; text-align: center; color: #fff;">
            <h1 style="margin: 0; font-size: 24px;">📨 New Portfolio Inquiry</h1>
            <p style="margin-top: 10px; font-size: 14px; opacity: 0.9;">You’ve received a message through your website</p>
          </div>
          
          <!-- Body -->
          <div style="padding: 35px 30px 40px 30px;">
            <p style="font-size: 17px; color: #333; margin-bottom: 30px;">
              Hello! A visitor has sent a message through your portfolio contact form.
            </p>
            
            <div style="margin-bottom: 22px;">
              <label style="font-size: 15px; color: #555; font-weight: 600;">Name:</label>
              <div style="margin-top: 4px; font-size: 16px; color: #222;">${name}</div>
            </div>
            
            <div style="margin-bottom: 22px;">
              <label style="font-size: 15px; color: #555; font-weight: 600;">Email:</label>
              <div style="margin-top: 4px;">
                <a href="mailto:${email}" style="font-size: 16px; color: #0d6efd; text-decoration: none;">${email}</a>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <label style="font-size: 15px; color: #555; font-weight: 600;">Message:</label>
            </div>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; font-size: 15px; color: #444; line-height: 1.7; border: 1px solid #e0e0e0;">
              ${message}
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f4f4f4; padding: 20px 30px; text-align: center; font-size: 13px; color: #999;">
            This email was sent automatically from your portfolio contact form.
          </div>
        </div>
      </div>
    `,
  });
};

module.exports = sendMail;
