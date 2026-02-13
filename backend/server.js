// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// /* ================= MIDDLEWARE ================= */
// app.use(cors());
// app.use(express.json());

// /* ================= TEST ROUTE ================= */
// app.get("/", (req, res) => {
//   res.send("✅ Server is running");
// });

// /* ================= CONTACT ROUTE ================= */
// app.post("/send", async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   // Validate input
//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({ success: false, error: "All fields are required" });
//   }

//   try {
//     // Create transporter (Gmail)
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // Send email
//     await transporter.sendMail({
//       // Show visitor's name but email is still your company Gmail
//       from: `"${name}" <${process.env.SMTP_USER}>`,
//       replyTo: email, // reply goes to the visitor
//       to: process.env.CONTACT_EMAIL,
//       subject: `New Contact: ${subject}`,
//       text: `
// New contact form submission:

// Name: ${name}
// Email: ${email}
// Subject: ${subject}
// Message: ${message}
//       `,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #fefefe;">
//           <h2 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 10px;">New Contact Form Message</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></p>
//           <p><strong>Subject:</strong> ${subject}</p>
//           <p><strong>Message:</strong></p>
//           <p style="padding: 12px; background: #f4f4f4; border: 1px solid #ddd; border-radius: 4px;">${message}</p>
//           <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
//           <p style="font-size: 12px; color: #777;">This message was sent from your website contact form.</p>
//         </div>
//       `,
//     });

//     res.json({ success: true, message: "Message sent successfully" });
//   } catch (error) {
//     console.error("❌ Email error:", error);
//     res.status(500).json({ success: false, error: "Failed to send message" });
//   }
// });

// /* ================= START SERVER ================= */
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });
