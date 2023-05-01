import axios from 'axios';
import {
  delProduct,
  getAllProductsByShopId,
  post,
  update,
  clnDelProduct,
  clnUpdtProduct,
  clnPstProduct,
  updateLeo,
  delProductLeo
} from './productSlice';

export const getProductsByShopId = (shopId) => {
  //agregar por porps shopId
  return async (dispatch) => {
    try {
      const products = await axios(`/product/${shopId}`); //agregar
      dispatch(getAllProductsByShopId(products.data));
    } catch (error) {
    }
  };
};

export const postProduct = (product) => {
  return async (dispatch) => {
    try {
      const posted = await axios.post(`/product/${product.shop_id}`, product);
      dispatch(post(posted.data.success));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (input) => {
  return async (dispatch) => {
    try {
      const product = await axios.put(`/product/`, input);
      dispatch(update(product.data.success));
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };
};

export const updateProductLeo = (input) => {
  return async (dispatch) => {
    try {
      const product = await axios.put(`/product/`, input);
      dispatch(updateLeo(product.data.success));
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const product = await axios.delete(`/product/${id}`);
      dispatch(delProduct(product.data.success));
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };
};

export const deleteProductLeo = (id) => {
  return async (dispatch) => {
    try {
      const product = await axios.delete(`/product/${id}`);
      dispatch(delProductLeo(product.data.success));
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };
};

export const cleanDeleteProduct = () => {
  return (clnDelProduct());
}

export const cleanUpdateProduct = () => {
  return (clnUpdtProduct());
}

export const cleanPostProduct = () => {
  return (clnPstProduct());
}
