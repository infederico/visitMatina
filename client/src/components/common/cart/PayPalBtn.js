import { useEffect, useState } from 'react';
import watch from 'redux-watch';
import store from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { transaccion } from '../../../redux/cartActions';
import { cleanCart } from '../../../redux/cartSlice';
import styles from './paypalBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function PayPalBtn() {
  let products = [];

  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const test = (newVal) => {
    setTotal(Number(newVal));
  };

  let w = watch(store.getState, 'cart.total');
  store.subscribe(
    w((newVal, oldVal, objectPath) => {
      test(newVal);
      return newVal;
    })
  );

  useEffect(() => {}, [total, products]);

  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.total);

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);
    dispatch(transaccion(totalPrice));
    setTimeout(() => {
      dispatch(cleanCart());
    }, 30000);
  };

  return (
    <>
      <button className={styles.btn} onClick={handleClick} disabled={loading}>
        {loading ? (
          <FontAwesomeIcon icon={faSpinner} spin />
        ) : (
          'Pagar con Paypal'
        )}
      </button>
    </>
  );
}
