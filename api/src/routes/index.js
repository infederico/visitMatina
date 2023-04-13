const { Router } = require('express');

//Media
const { media } = require("./media/media")

const router = Router();

router.use('/media', media);

module.exports = router;
