const { Router } = require('express');
const shopsRoutes = require('./shops/shopsRoutes');
const router = Router();


router.use('/',shopsRoutes);


module.exports = router;
