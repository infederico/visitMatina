import axios from 'axios';
import {
  delProduct,
  getAllProductsByShopId,
  post,
  update,
} from './productSlice';

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
      dispatch(post(posted));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (input) => {
  return async (dispatch) => {
    try {
      const product = await axios.put(`/product/`, input);
      dispatch(update(product.data));
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const product = await axios.delete(`/product/${id}`);
      dispatch(delProduct(product.data));
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };
};
