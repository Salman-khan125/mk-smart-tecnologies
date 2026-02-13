import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

  await transporter.sendMail({
  from: `"${name}" <${email}>`,  // shows the user name and email
  replyTo: email,
  to: process.env.CONTACT_EMAIL,
  subject: `New Contact: ${subject}`,
  text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
  `,
  html: `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    
    <h2 style="color: #E30613; text-align: center; margin-bottom: 10px;">New Contact Form Message</h2>
    <hr style="border: none; border-top: 2px solid #E30613; margin: 10px 0;" />
    
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
    <p><strong>Subject:</strong> ${subject}</p>
    
    <p><strong>Message:</strong></p>
    <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; white-space: pre-line; border: 1px solid #eee;">
      ${message}
    </div>
    
    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
    
    <p style="text-align: center; font-size: 0.9rem; color: #777;">
      This message was sent from your website contact form.
    </p>
  </div>
  `,
});


    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
}
