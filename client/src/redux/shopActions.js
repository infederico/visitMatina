import axios from 'axios';
import {
  getAllShops,
  getAllAllShops,
  getShopIdByPath,
  getShopDataByPath,
  resPostShop,
  updtShop,
  delShop,
  clnResDel,
  clnResUpDt,
  clnResCreate,
} from './shopSlice';

export const getShops = () => async (dispatch) => {
  try {
    const shops = await axios('/shops');
    dispatch(getAllShops(shops.data));
  } catch (error) {
    console.log(error);
  }
};
export const getFullShops = () => async (dispatch) => {
  try {
    const shops = await axios('/shops/all');
    dispatch(getAllAllShops(shops.data));
  } catch (error) {
    console.log(error);
  }
};

export const getShopId = (path) => async (dispatch) => {
  try {
    const shops = await axios('/shops');
    const shopFiltered = shops?.data.filter((shop) => shop.path === path);
    //console.log(shopFiltered);
    dispatch(getShopIdByPath(shopFiltered.at(0)['id_shop']));
  } catch (error) {
    console.log(error);
  }
};

export const getShopData = (path) => async (dispatch) => {
  try {
    const shops = await axios('/shops');
    const shopFiltered = shops.data.filter((shop) => shop.path === path);
    dispatch(getShopDataByPath(shopFiltered.at(0)));
  } catch (error) {
    console.log(error);
  }
};

export const postShop = (obj) => async (dispatch) => {
  try {
    const shops = await axios.post('/shops', obj);
    dispatch(resPostShop(shops.data.message));
    return shops.data.message;
  } catch (error) {
    return error.response.data.error;
  }
};

export const updateShop = (obj) => async (dispatch) => {
  try {
    const shops = await axios.put('/shops', obj);
    return dispatch(updtShop(shops.data.message));
  } catch (error) {
    return error.response.data.error;
  }
};

export const deleteShop = (id_shop) => async (dispatch) => {
  try {
    const shops = await axios.delete(`/shops/${id_shop}`);
    return dispatch(delShop(shops.data.message));
  } catch (error) {
    return error.response.data.error;
  }
};

export const clnDel = () => {
  return clnResDel();
};

export const clnUpdt = () => {
  return clnResUpDt();
};
export const clnPost = () => {
  return clnResCreate();
};
