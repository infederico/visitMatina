import { addProduct } from "./cartSlice";

export const PostContact = (data) => {
    
    return async function (dispatch) {
      try {
        return dispatch(addProduct(data));
      } catch (error) {
          console.log('Error al añadir el producto');
      }
    };
  };