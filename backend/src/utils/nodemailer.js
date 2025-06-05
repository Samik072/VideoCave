import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "samik12000120072@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
