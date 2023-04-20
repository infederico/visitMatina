import axios from "axios";
import { getAllShops } from "./shopSlice";

export const getShops = () => async (dispatch) => {
    try{
        const shops = await axios("http://localhost:3001/api/shops");
          dispatch(getAllShops(shops.data));
    }catch(error) {
        console.log(error);
    }
};