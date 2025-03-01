import { EmailData } from "./types";

export const mailTemplate = (emailData: EmailData) => {
  const { user, payment } = emailData;
  return `
  <html>
    <head>
    <title>Payment Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            background-color: #4CAF50;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .email-body {
            padding: 20px;
            color: #333333;
            line-height: 1.6;
        }
        .email-footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 10px;
            color: #777777;
            font-size: 12px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            color: #ffffff;
            background-color: #4CAF50;
            border-radius: 5px;
            text-decoration: none;
        }
    </style>
    </head>
    <body>
        <div class="email-container">
            <div class="email-header">
                <h1>Thank You for Your Payment!</h1>
            </div>
            <div class="email-body">
                <p>Hi, ${user.name}</p>
                <p>We're excited to let you know that your payment for
                <strong>${payment.product}</strong> has been successfully processed. Thank you for your purchase!</p>
                <p><strong>Transaction Details:</strong></p>
                <ul>
                    <li><strong>Payment ID:</strong>${payment.paymentId}</li>
                    <li><strong>Amount Paid:</strong>${payment.amount}</li>
                    <li><strong>Date:</strong>${payment.paymentDate}</li>
                </ul>
                <p>If you have any questions about your purchase or need further assistance, feel free to contact us.</p>
                <a href="${process.env.FRONTEND_URL}" class="button">Visit Your Account</a>
            </div>
            <div class="email-footer">
                <p>&copy; 2025 Dashboard UI. All rights reserved.</p>
                <p>Need help? <a href="mailto:dashboardui@mail.manishlal.live" style="color: #4CAF50;">Contact us</a></p>
            </div>
        </div>
    </body>
    </html>
  `;
};
