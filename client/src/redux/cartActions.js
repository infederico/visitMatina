import { addProduct, pay } from './cartSlice';
import axios from 'axios';

export const PostContact = (data) => {
  return async function (dispatch) {
    try {
      return dispatch(addProduct(data));
    } catch (error) {
      console.log('Error al añadir el producto');
    }
  };
};

export const transaccion = (data) => {
  return async function (dispatch) {
    try {
      let response = await axios.post(`/payments/`, { data: data }); //agregar
      window.open(response.data.data.links[1].href);
      return dispatch(pay(response.data.data.links[1].href));
    } catch (error) {
      console.log('Pago no procesado');
    }
  };
};

export const ejecutar = (data) => {
  return async function (dispatch) {
    try {
      await axios.get(
        `/payments/execute-payment/?token=${data.token}&PayerID=${data.PayerID}`
      ); //agregar

      // return dispatch(addProduct());
    } catch (error) {
      console.log('Pago no procesado');
    }
  };
};

export const cleanPayment = () => {
  return async function (dispatch) {
    dispatch(pay());
  };
};
