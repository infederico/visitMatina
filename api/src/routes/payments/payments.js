const express = require('express');
const router = express.Router();
const { newPayment } = require('../../controllers/payments/payments.js');

router.post('/', newPayment);

module.exports = router;