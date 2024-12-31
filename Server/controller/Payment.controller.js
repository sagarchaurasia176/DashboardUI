const uuid = require("uuid");
const instance = require("../config/Razorpay.config");
const { error } = require("console");
const crypto = require("crypto");


// creating orders
const CreatingOrder = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomUUID(),
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong!" });
      }
      res.status(200).json({
        success: true,
        message: "Order created !",
        data: order,
      });
    });
  } catch (er) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

// verified payments
const verifyingPayment = async (req, res) => {
  try {
    const { razorId, payment_id, razor_sign } = req.body;

    //check the conditions over there so we get
    if (!razorId || !payment_id || !razor_sign) {
      res.status(403).json({
        success: false,
        message: "kindly add the req body",
      });
    }
    const updateRazorPayId = razorId + "|" + payment_id;
    const resultSign = crypto
      .createHash("sha256", process.env.Key_Secret)
      .update(updateRazorPayId.toString())
      .digest("hex");
  
  
      if (updateRazorPayId == resultSign) {
      return res.status(200).json({
        success: true,
        message: "Payment verified successfully",
        data: resultSign,
        
      });
    }
  } catch (er) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = {
  CreatingOrder,
  verifyingPayment,
};
