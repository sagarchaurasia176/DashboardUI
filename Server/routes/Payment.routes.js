const express = require('express')
const { CreatingOrder, verifyingPayment } = require('../controller/Payment.controller')
const router = express.Router()

router.post('/api/create/Order' , CreatingOrder);
router.post('/api/order/verify',verifyingPayment);


module.exports = router