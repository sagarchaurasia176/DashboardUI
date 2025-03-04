import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { EmailData } from "./types";
import { mailTemplate } from "./mail-template";
import amqp from "amqplib/callback_api";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT as string),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
} as SMTPTransport.Options);

async function sendMail(emailData: EmailData) {
  try {
    const { user } = emailData;

    await transporter.sendMail({
      from: `${process.env.MAIL_ID}`,
      to: `${user.name} <${user.emailId}>`,
      subject: "Payment Confirmation",
      html: mailTemplate(emailData),
    });
    console.log(`Email sent to ${user.emailId}`);
  } catch (error) {
    console.log("Failed to send email: ", error);
  }
}

const listenToQueue = () => {
  amqp.connect(`${process.env.AMQP_URL}`, (err, connection) => {
    if (err) {
      console.log("RabbitMQ connection error:", err);
      return;
    }
    connection.createChannel((err, channel) => {
      if (err) {
        console.log("RabbitMQ channel error:", err);
        return;
      }

      const exchange = "mailExchange";
      const queue = "mailQueue";
      const routingKey = "mailRoutingKey";

      channel.assertExchange(exchange, "direct", { durable: true });
      channel.assertQueue(queue, {
        durable: true,
      });
      channel.bindQueue(queue, exchange, routingKey);

      console.log("[*] Waiting for messages in %s", queue);

      channel.consume(
        queue,
        (message) => {
          if (message) {
            try {
              const emailData = JSON.parse(message.content.toString());
              console.log("Recieved email data", emailData);
              sendMail(emailData);
              channel.ack(message);
            } catch (error) {
              console.log("Message processing error: ", error);
              channel.nack(message, false, true);
            }
          }
        },
        { noAck: false }
      );

      process.on("SIGINT", () => {
        console.log("Closing RabbitMQ connection...");
        connection.close();
        process.exit(0);
      });
    });
  });
};
listenToQueue();
