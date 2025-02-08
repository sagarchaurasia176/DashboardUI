import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { EmailData } from "../types/email";
import { mailTemplate } from "./mail-template";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
} as SMTPTransport.Options);

export async function sendMail(emailData: EmailData) {
  try {
    const { user } = emailData;

    await transporter.sendMail({
      from: `${process.env.MAIL_ID}`,
      to: `${user.name} <${user.emailId}>`,
      subject: "Payment Confirmation",
      html: mailTemplate(emailData),
    });
  } catch (error) {
    console.log(error);
  }
}
