const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: process.env.MP_KEY,
});


const newPayment = async (req, res) => {

    const items = req.body;
    console.log(items);

    let preference = {
        items: items,
        back_urls: {
            success: 'http://localhost:3000/successPay/',
            failure: '',
            pending: '',
        },
        auto_return: 'approved',
        binary_mode: true,
    }

    mercadopago.preferences.create(preference)
    .then(resp => res.status(200).send({resp}))
    .catch(err => res.status(400).send({error: err.message }))

}

module.exports = {
    newPayment,
}