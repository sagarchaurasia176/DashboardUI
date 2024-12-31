const Razorpay = require('razorpay');
require('dotenv').config();

// instances
const instance = new Razorpay({
    key_id:process.env.CLIENT_ID,
    key_secret:process.env.Key_Secret
})

module.exports = instance;
