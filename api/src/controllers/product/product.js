const { Product, Shop } = require('../../db')

const getProductByName = async (name) => {
  try {
    let productByName = await Product.findOne({ where: { name } })
    if (productByName) {
      return productByName
    } else {
      throw new Error(`Error product with name ${name} not found`)
    }
  } catch (error) {
    throw new Error(`Error getting user by name: ${error.message}`)
  }
}
const getAllProducts = async () => {
  try {
    let products = await Product.findAll()
    if (products) {
      return products
    } else {
      throw new Error(`Error products not found`)
    }
  } catch (error) {
    throw new Error(`Error getting products ${error.message}`)
  }
}
const getProductById = async (shopId) => {
  try {
    let productById = await Product.findAll({
      where: {
        shopId,
      },
    })
    if (productById) {
      return productById
    } else {
      throw new Error(`Error product with id ${id} not found`)
    }
  } catch (error) {
    throw new Error(`Error getting user by name: ${error.message}`)
  }
}
const updateProduct = async (id, name, description, price) => {
  try {
    let findProduct = await getProductById(id)
    if (findProduct) {
      if (name) {
        await Product.update({ name }, { where: { id } })
      }
      if (description) {
        await Product.update({ description }, { where: { id } })
      }
      if (price) {
        await Product.update({ price }, { where: { id } })
      }
      return true
    }
  } catch (error) {
    throw new Error(`Error trying to update product ${error.message}`)
  }
}
const createProduct = async (name, description, price, shop_id) => {
  try {
    let newProduct = await Product.create({
      name,
      description,
      price,
    })
    let shop = await Shop.findByPk(shop_id)
    if (!shop) {
      throw new Error(`Shop with ID ${shop_id} does not exist`)
    }
    newProduct.addShops(shop)
    return newProduct
  } catch (error) {
    throw new Error(`Error trying to create product ${error.message}`)
  }
}
const deleteProduct = async (id, active) => {
  try {
    let findProduct = await getProductById(id)
    if (findProduct) {
      if (active !== undefined) {
        await Product.update({ active }, { where: { id } })
      }
    }
    return true
  } catch (error) {
    throw new Error(`Error trying to delete product ${error.message}`)
  }
}

module.exports = {
  getProductByName,
  getAllProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
}
