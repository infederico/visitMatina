const { Router } = require('express')
const usersRouter = require('../routes/users/usersRouter')
const productRouter = require('../routes/product/productRouter')
const { media } = require('./media/media')

const router = Router()

router.use('/user', usersRouter)
router.use('/product', productRouter)
//Media
router.use('/media', media)

module.exports = router
