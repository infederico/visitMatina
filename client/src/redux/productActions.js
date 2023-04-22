import axios from 'axios'
import { getAllProductsByShopId } from './productSlice'

export const getProductsByShopId = () => {//agregar por porps shopId
  return async (dispatch) => {
    try{
      console.log("entra al try de getproductsbyshopid");
      const products = await axios(`/product/`) //agregar ${shopId}
      dispatch(getAllProductsByShopId(products.data))
    }catch(error){
      console.log("no entra");
    }
  }
}
