const { Router } = require('express')
const usersRouter = require('../routes/users/usersRouter')
const productRouter = require('../routes/product/productRouter')

const router = Router()

router.use('/user', usersRouter)
router.use('/product', productRouter)

module.exports = router
