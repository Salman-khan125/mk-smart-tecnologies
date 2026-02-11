import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.sendMail({
  from: `"MK Smart Technologies" <${process.env.SMTP_USER}>`,
  to: process.env.CONTACT_EMAIL,
  subject: "Test Email",
  text: "Testing Gmail SMTP",
})
.then(() => console.log("✅ Test email sent"))
.catch((err) => console.error("❌ Test email failed:", err));
