const { Router } = require('express');

const { media } = require("./media/media");
const { comment } = require("./comments/comments");

const router = Router();

router.use('/media', media);
router.use('/comments', comment);

module.exports = router;
