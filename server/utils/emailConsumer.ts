import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { EmailData } from "../types/email";
import { mailTemplate } from "./mail-template";
import amqp from "amqplib/callback_api";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp.resend.com",
  port: process.env.MAIL_PORT || 465,
  auth: {
    user: process.env.MAIL_USER || "resend",
    pass: process.env.MAIL_PASS || "re_Zaa3yUnv_H2MQdqxY5JJyeb4Bjxz3uHHw",
  },
} as SMTPTransport.Options);

export async function sendMail(emailData: EmailData) {
  try {
    const { user } = emailData;

    await transporter.sendMail({
      from: `${process.env.MAIL_ID || "DashboardUI <ui@mail.manishlal.live>"}`,
      to: `${user.name} <${user.emailId}>`,
      subject: "Payment Confirmation",
      html: mailTemplate(emailData),
    });
  } catch (error) {
    console.log(error);
  }
}
console.log(process.env.AMQP_URL);

const listenToQueue = () => {
  amqp.connect(
    `${process.env.AMQP_URL || "amqp://guest:guest@localhost:5672"}`,
    (err, connection) => {
      if (err) {
        throw err;
      }
      connection.createChannel((err, channel) => {
        if (err) {
          throw err;
        }
        const exchange = "mailExchange";
        const queue = "mailQueue";
        const routingKey = "mailRoutingKey";

        channel.assertExchange(exchange, "direct", { durable: true });

        channel.assertQueue(queue, {
          durable: true,
        });
        channel.bindQueue(queue, exchange, routingKey);

        console.log("Waiting for messages in %s", queue);

        channel.consume(
          queue,
          (message) => {
            if (message) {
              const emailData = JSON.parse(message.content.toString());
              console.log("Recieved email data", emailData);
              sendMail(emailData);
              channel.ack(message);
            }
          },
          { noAck: false }
        );
      });
    }
  );
};
listenToQueue();
