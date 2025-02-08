import amqp from "amqplib/callback_api";
import { EmailData } from "../types/email";

export const sendMailToQueue = (emailData: EmailData) => {
  amqp.connect(`${process.env.AMQP_URL}`, (err, connection) => {
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

      channel.publish(
        exchange,
        routingKey,
        Buffer.from(JSON.stringify(emailData))
      );
      console.log("Email sent to queue", emailData);
    });
  });
};
