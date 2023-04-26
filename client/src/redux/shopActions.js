import axios from "axios";
import { getAllShops, getShopIdByPath, getShopDataByPath, resPostShop } from "./shopSlice";

export const getShops = () => async (dispatch) => {
    try{
        const shops = await axios("/shops");
          dispatch(getAllShops(shops.data));
    }catch(error) {
        console.log(error);
    }
};

export const getShopId = (path) => async (dispatch) => {
    try{
        const shops = await axios("/shops");
        const shopFiltered = shops.data.filter(shop => shop.path === path);
        //console.log(shopFiltered);
        dispatch(getShopIdByPath(shopFiltered.at(0)['id_shop']));   
    }catch(error) {
        console.log(error);
    }
};

export const getShopData = (path) => async (dispatch) => {
    try{
        const shops = await axios("/shops");
        const shopFiltered = shops.data.filter(shop => shop.path === path);
        dispatch(getShopDataByPath(shopFiltered.at(0)));   
    }catch(error) {
        console.log(error);
    }
};

export const postShop = (obj) => async (dispatch) => {
    try {
        const shops = await axios.post("/shops" , obj);
        dispatch(resPostShop(shops.data.message));
    } catch (error) {
        window.alert(error.response.data.error);
    }
};