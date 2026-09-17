"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000 * 15; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 3; // 3 emails per 15 minutes per IP

export async function sendEmail(formData: FormData) {
  // Honeypot check
  const website = formData.get("website") as string;
  if (website) {
    // If the hidden field is filled, silently reject (it's a bot)
    return { success: true }; 
  }

  // Rate Limiting
  const headerStore = await headers();
  const ip = headerStore.get("x-forwarded-for") || "unknown-ip";
  const now = Date.now();
  
  let rateLimitData = rateLimitMap.get(ip);
  if (!rateLimitData || now - rateLimitData.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitData = { count: 0, lastReset: now };
  }
  
  if (rateLimitData.count >= MAX_REQUESTS_PER_WINDOW) {
    return { error: "Too many requests. Please try again later." };
  }
  
  rateLimitData.count += 1;
  rateLimitMap.set(ip, rateLimitData);

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Please fill in all fields." };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `Portfolio Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h3>New message from your portfolio</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send email. Please try again later." };
  }
}
