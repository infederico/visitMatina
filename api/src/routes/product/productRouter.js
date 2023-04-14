const express = require('express')
const router = express.Router()

const {
  getProductByName,
  getAllProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} = require('../../controllers/product/product')

router.get('/', async (req, res) => {
  try {
    let { name } = req.query
    if (name) {
      let productByName = await getProductByName(name)
      res.status(200).send(productByName)
    } else {
      let getAll = await getAllProducts()
      res.status(200).send(getAll)
    }
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    let { id } = req.params
    let productById = await getProductById(id)
    res.status(200).send(productById)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    let { id } = req.params
    let { name, description, price, active } = req.body
    await updateProduct(id, name, description, price, active)
    res.status(200).json('Product updated successfully')
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})
router.post('/', async (req, res) => {
  try {
    let { name, description, price } = req.body
    let newProduct = await createProduct(name, description, price)
    res.status(200).send(newProduct)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let { id } = req.params
    let { active } = req.body
    await deleteProduct(id, active)
    res.status(200).send('Product Deleted Successfully')
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

module.exports = router
