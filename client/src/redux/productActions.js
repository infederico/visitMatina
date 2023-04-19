import axios from 'axios'
import { getAllProducts } from './productSlice'

export const getProducts = () => {
  return async (dispatch) => {
    const products = await axios('http://localhost:3001/api/product/')
    dispatch(getAllProducts(products.data))
  }
}
