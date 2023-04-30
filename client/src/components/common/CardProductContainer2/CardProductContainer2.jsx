import CardProduct2 from './CardProduct2/CardProduct2';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CardProductContainer2.module.css';

import { getProductsByShopId } from '../../../redux/productActions';
import { getShopId } from '../../../redux/shopActions';
import { useLocation } from 'react-router-dom';

const CardProductContainer2 = () => {
  const products = useSelector((state) => state.product.product);
  const shopId = useSelector((state) => state.shops.shopId);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopId(location.pathname));
    dispatch(getProductsByShopId(shopId));
    console.log(products);
  }, [shopId]);

  return (
    <div>
      <div className={styles.wrapCards}>
        {products.map((paq) => {
          return (
            <CardProduct2
              key={paq.id_product}
              id={paq.id_product}
              name={paq.name}
              price={paq.price}
              image={paq.image}
              description={paq.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardProductContainer2;
