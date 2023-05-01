import CardProduct from './CardProduct/CardProduct';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import style from './CardProductContainer.module.css';
import { getShopId } from '../../../redux/shopActions';
import styles from './CardProductContainer.module.css';
import { getProductsByShopId } from '../../../redux/productActions';
import Paginado from './Paginado';

const CardProductContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // const value = useSelector(state => state.products.value)
  const products = useSelector((state) => state.product.product);
  const shopId = useSelector((state) => state.shops.shopId);
  // prueba paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [render, setRender] = useState(0);
  const [productsPerPage, setproductsPerPage] = useState(2);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  let currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  //

  useEffect(() => {
    dispatch(getProductsByShopId(shopId));
  }, [shopId]);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div
        className={`row row-cols-sm-1 row-cols-md-6 row-cols-lg-4 justify-content-center ${styles.cardsContainer}`}
      >
        {currentProducts?.map((prod, index) => {
          // cambie products.map
          return (
            <div key={index} className='col'>
              <CardProduct
                key={prod.id_product}
                id={prod.id_product}
                image={prod.image}
                name={prod.name}
                description={prod.description}
                price={prod.price}
              />
            </div>
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

export default CardProductContainer;
