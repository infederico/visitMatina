import axios from 'axios';
import { getAllProductsByShopId, postNewProduct } from './productSlice';

export const getProductsByShopId = (shopId) => {
  //agregar por porps shopId
  return async (dispatch) => {
    try {
      console.log('entra al try de getproductsbyshopid');
      const products = await axios(`/product/${shopId}`); //agregar
      dispatch(getAllProductsByShopId(products.data));
    } catch (error) {
      console.log('no entra');
    }
  };
};

export const postProduct = (product) => {
  return async (dispatch) => {
    try {
      const posted = await axios.post(`/product/${product.shop_id}`, product);
      console.log(posted);
      dispatch(postNewProduct(posted));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (product) => {
}
export const updateProduct = (product) => {
}