const express = require("express");
const cors = require("cors");
const payments = require("./routes/Payment.routes");
require("dotenv").config();
const port = process.env.PORT || 8080;

// const paymentRoute = require("./routes/payments");
//Initialize App
const app = express();
//Middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND,
    credentials: true,
    optionsSuccessStatus:202
  })
);


//Routing updated
app.use("/api/pay", payments);
// post apply
app.use("/", (req, res) => {
  res.send("backend work");
});

//Listening App
app.listen(port, () => console.log(`Listening port ${port}`));

