import CardProduct2 from './CardProduct2/CardProduct2';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CardProductContainer2.module.css';

import { getProductsByShopId } from '../../../redux/productActions';
import { getShopId } from '../../../redux/shopActions';
import { useLocation } from 'react-router-dom';
import Paginado from './Paginado';

const CardProductContainer2 = () => {
  const products = useSelector((state) => state.product.product);
  const shopId = useSelector((state) => state.shops.shopId);

  const location = useLocation();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [render, setRender] = useState(0);
  const [productsPerPage, setproductsPerPage] = useState(2);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  let currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    dispatch(getShopId(location.pathname));
    dispatch(getProductsByShopId(shopId));
  }, [shopId]);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapCards}>
        {currentProducts &&
          currentProducts.map((paq) => {
            return (
              <CardProduct2
                key={paq.id}
                id={paq.id}
                name={paq.name}
                price={paq.price}
                image={paq.image}
                description={paq.description}
              />
            );
          })}
      </div>
      <Paginado
        productsPerPage={productsPerPage}
        products={products.length}
        paginado={paginado}
        setcurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
export default CardProductContainer2;
