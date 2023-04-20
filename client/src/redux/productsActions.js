// se borrara cuando se haga conexion con back
import axios from "axios";
import { getAllProducts } from "./productsSlice";

export const getProducts = () => (dispatch) => {
    try {
        let products = require("../components/common/CardProductContainer/res_back.json")
        console.log(products.response);
        dispatch(getAllProducts(products.response))
    }
    catch(error){
        console.log(error);
    }
}