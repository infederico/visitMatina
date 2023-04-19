const express = require('express');
const router = express.Router();
const {enviarCorreo} = require('../../controllers/enviarMail/controllerMail.js');

router.post('/', enviarCorreo);

module.exports = router;