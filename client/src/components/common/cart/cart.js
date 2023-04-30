import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './cart.module.css';
import { useDispatch, useSelector } from 'react-redux';

import PayPalBtn from './PayPalBtn';
import {
  delProduct,
  addItem,
  delItem,
  restoreCart,
} from '../../../redux/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const openCart = () => {
    setVisible(!visible);
  };

  const products = useSelector((state) => state.cart.products);
  const totalToPay = useSelector((state) => state.cart.total);
  const payment = useSelector((state) => state.cart.payment);
  const quantity = useSelector((state) => state.cart.quantity);

  const handleDelete = (e) => {
    let id = e.target.value;
    dispatch(delProduct(id));
  };

  const handleAddItem = (e) => {
    let id = e.target.value;
    dispatch(addItem(id));
  };

  const handleDelItem = (e) => {
    let id = e.target.value;
    dispatch(delItem(id));
  };

  useEffect(() => {
    localStorage.clear();
    const localCart = localStorage.getItem('products');
    let local = JSON.parse(localCart) || [];
    dispatch(restoreCart(local));
    console.log(products);
  }, [payment]);

  return (
    <>
      {products.length > 0 && (
        <div className={styles.wrapCart}>
          {visible && (
            <div className={`${styles.wrapItems}`}>
              <div className={styles.items}>
                {products.map((p, idx) => {
                  return (
                    <div className={styles.productItem} key={idx}>
                      <div className={styles.wrapImg}>
                        <img src={p.picture_url} alt='' />
                      </div>
                      <div>
                        <h3>{p.title}</h3>
                        <div className={styles.label}>
                          Cantidad:
                          {p.quantity > 1 && (
                            <button
                              className='btn btn-default btn-sm'
                              onClick={handleDelItem}
                              value={p.id}
                            >
                              {' '}
                              -{' '}
                            </button>
                          )}
                          <span>{p.quantity}</span>
                          {p.quantity < 50 && (
                            <button
                              className='btn btn-default btn-sm'
                              onClick={handleAddItem}
                              value={p.id}
                            >
                              {' '}
                              +{' '}
                            </button>
                          )}
                        </div>
                        <div className={styles.label}>
                          Precio: <span>{p.unit_price} USD</span>
                        </div>
                        <div className={styles.label}>
                          Subtotal:{' '}
                          <span>{p.unit_price * Number(p.quantity)} USD</span>
                        </div>
                        <div>
                          <button
                            className='btn btn-sm btn-block btn-danger'
                            value={p.id}
                            onClick={handleDelete}
                          >
                            {' '}
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='d-grid gap-2'></div>
              <div className={styles.resume}>
                <p>
                  Total: <span>${totalToPay.toFixed(2)}</span>
                </p>

                <PayPalBtn />
              </div>
            </div>
          )}

          {quantity && (
            <button
              className={`btn btn-info ${styles.btnCart}`}
              onClick={openCart}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                className='bi bi-cart'
                viewBox='0 0 16 16'
              >
                <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
              </svg>
              <div className={styles.itemsCount}> {quantity} </div>
            </button>
          )}
        </div>
      )}
    </>
  );
}
