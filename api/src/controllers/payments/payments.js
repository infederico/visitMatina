const mercadopago = require('mercadopago');
const request = require('request');
require('dotenv').config();
const { CLIENT, SECRET } = process.env;

mercadopago.configure({
  access_token: process.env.MP_KEY,
});

const newPayment = async (req, res) => {
  const items = req.body;

  let preference = {
    items: items,
    back_urls: {
      success: 'https://visit-matina.vercel.app/successPay/',
      failure: '',
      pending: '',
    },
    auto_return: 'approved',
    binary_mode: true,
  };

  mercadopago.preferences
    .create(preference)
    .then((resp) => res.status(200).send({ resp }))
    .catch((err) => res.status(400).send({ error: err.message }));
};

const auth = { user: CLIENT, pass: SECRET };
const PAYPAL_API = 'https://api-m.sandbox.paypal.com';
const createPayment = (req, res) => {
  const { data } = req.body;
  const body = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
          value: data,
        },
      },
    ],
    application_context: {
      brand_name: `Visit Matina`,
      landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
      user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
      return_url: `https://visit-matina.vercel.app/execute-payment`, // Url despues de realizar el pago
      cancel_url: `https://visit-matina.vercel.app/`, // Url despues de realizar el pago
    },
  };
  request.post(
    `${PAYPAL_API}/v2/checkout/orders`,
    {
      auth,
      body,
      json: true,
    },
    (err, response) => {
      res.json({ data: response.body });
    }
  );
};

const executePayment = (req, res) => {
  try {
    const token = req.query.token; //<-----------
    request.post(
      `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {
        auth,
        body: {},
        json: true,
      },
      (err, response) => {
        res.json({ data: response.body });
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  newPayment,
  createPayment,
  executePayment,
};
