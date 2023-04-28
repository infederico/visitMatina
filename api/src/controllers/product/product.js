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
const updateProduct = async (id_product, name, description, price, image) => {
  try {
    let findProduct = await Product.findByPk(id_product);
    if (findProduct) {
      if (name) {
        await Product.update({ name }, { where: { id_product } });
      }
      if (description) {
        await Product.update({ description }, { where: { id_product } });
      }
      if (price) {
        await Product.update({ price }, { where: { id_product } });
      }
      if (image) {
        const cloudImg = await uptloadCl(image);
        await Product.update({ image: cloudImg }, { where: { id_product } });
      }
      return { success: `El Producto ${findProduct.name} fue actualizado` };
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
    return { success: `El Producto ${newProduct.name} fue creado` };
  } catch (error) {
    throw new Error(`Error trying to create product ${error.message}`);
  }
};

const deleteProduct = async (id_product) => {
  try {
    let findProduct = await Product.findByPk(id_product);
    if (findProduct) {
      if (findProduct.active === true) {
        await Product.update({ active: false }, { where: { id_product } });
        return { success: `El Producto ${findProduct.name} fue eliminado` };
      }
      if (findProduct.active === false) {
        await Product.update({ active: true }, { where: { id_product } });
        return { success: `El Producto ${findProduct.name} fue activado` };
      }
    } else {
      throw new Error('Producto no existe');
    }
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
