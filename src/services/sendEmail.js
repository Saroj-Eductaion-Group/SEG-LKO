import nodemailer from "nodemailer";

const sendOtpEmail = async (email, otp, name) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head><meta charset="UTF-8" /><title>OTP Verification</title></head>
  <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <h1 style="color: #1e3a8a; font-size: 24px; margin: 0;">Password Reset OTP</h1>
      <p style="font-size: 16px; color: #555; margin: 20px 0;">Dear ${name || "Admin"},</p>
      <p style="font-size: 16px; color: #555;">You requested to reset your password. Use the OTP below:</p>
      <div style="font-size: 36px; font-weight: bold; color: #1e3a8a; margin: 30px 0; text-align: center; letter-spacing: 8px; background: #f0f4ff; padding: 20px; border-radius: 8px;">
        ${otp}
      </div>
      <p style="font-size: 14px; color: #e53e3e; font-weight: bold;">⚠️ This OTP is valid for 10 minutes only.</p>
      <p style="font-size: 14px; color: #555;">If you did not request this, please ignore this email. Your password will not be changed.</p>
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
      <p style="font-size: 12px; color: #999;">Saroj Educational Group - Admin Panel</p>
    </div>
  </body>
  </html>`;

  await transporter.sendMail({
    from: `"SEG Admin" <${process.env.EMAIL}>`,
    to: email,
    subject: "SEG Admin - Password Reset OTP",
    html: htmlContent,
  });
};

export default sendOtpEmail;
