const express = require('express');
const router = express.Router();
const {
  newPayment,
  createPayment,
  executePayment,
} = require('../../controllers/payments/payments.js');

// router.post('/', newPayment);
router.post('/', createPayment);
router.get('/execute-payment', executePayment);

module.exports = router;
