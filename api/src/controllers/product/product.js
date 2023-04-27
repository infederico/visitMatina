const { Product, Shop } = require('../../db');
const { uptloadCl } = require('../../helpers/CloudinaryUpload');

const getProductByName = async (name) => {
  try {
    let productByName = await Product.findOne({ where: { name } });
    if (productByName) {
      return productByName;
    } else {
      throw new Error(`Error product with name ${name} not found`);
    }
  } catch (error) {
    throw new Error(`Error getting user by name: ${error.message}`);
  }
};
const getAllProducts = async () => {
  try {
    const products = await Product.findAll({
      include: {
        model: Shop,
      },
    });
    if (products) {
      return products;
    } else {
      throw new Error(`Error products not found`);
    }
  } catch (error) {
    throw new Error(`Error getting products ${error.message}`);
  }
};
const getProductById = async (shop_id) => {
  console.log(shop_id);
  try {
    const products = await Product.findAll({
      include: {
        model: Shop,
        where: {
          id_shop: shop_id,
        },
      },
    });
    if (products) {
      return products;
    } else {
      throw new Error(`Error product with shop_id ${shop_id} not found`);
    }
  } catch (error) {
    throw new Error(`Error getting product by shop id: ${error.message}`);
  }
};
const updateProduct = async (id, name, description, price, image) => {
  try {
    let findProduct = await getProductById(id);
    if (findProduct) {
      if (name) {
        await Product.update({ name }, { where: { id } });
      }
      if (description) {
        await Product.update({ description }, { where: { id } });
      }
      if (price) {
        await Product.update({ price }, { where: { id } });
      }
      if (image) {
        await Product.update({ image }, { where: { id } });
      }
      return true;
    }
  } catch (error) {
    throw new Error(`Error trying to update product ${error.message}`);
  }
};
const createProduct = async (name, description, price, shop_id, image) => {
  try {
    let productDefaultImage =
      'https://res.cloudinary.com/dfnw2l08x/image/upload/v1682190665/cowzi5bmlouxob2hllcu.jpg';
    const cloudImg = await uptloadCl(image);
    let newProduct = await Product.create({
      name,
      description,
      price,
      image: image ? cloudImg : productDefaultImage,
    });
    let shop = await Shop.findByPk(shop_id);
    if (!shop) {
      throw new Error(`Shop with ID ${shop_id} does not exist`);
    }
    newProduct.setShop(shop);
    return newProduct;
  } catch (error) {
    throw new Error(`Error trying to create product ${error.message}`);
  }
};

const deleteProduct = async (id, active) => {
  try {
    let findProduct = await getProductById(id);
    if (findProduct) {
      if (active !== undefined) {
        await Product.update({ active }, { where: { id } });
      }
    }
    return true;
  } catch (error) {
    throw new Error(`Error trying to delete product ${error.message}`);
  }
};

module.exports = {
  getProductByName,
  getAllProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
};
