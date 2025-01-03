const express = require('express')
const { CreatingOrder, verifyingPayment } = require('../controller/Payment.controller')
const router = express.Router()

router.post('/create/Order' , CreatingOrder);
router.post('/order/verify',verifyingPayment);


module.exports = router