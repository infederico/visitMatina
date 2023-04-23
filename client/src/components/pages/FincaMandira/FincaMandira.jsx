import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { getShops, getShopId } from '../../../redux/shopActions';
import { resetShopId } from '../../../redux/shopSlice';
import { getProductsByShopId } from '../../../redux/productActions';

import CardProductContainer from '../../common/CardProductContainer/CardProductContainer'
import Redes from '../../common/redesSociales/redes/Redes'
import style from './FincaMandira.module.css'
import CardShop from '../../common/shopsDos/cardShop/CardShop'
import Reviews from '../../common/Reviews/Reviews';
import Footer from '../../common/Footer/Footer';



//importamos el array que simula los datos que llegan del back-componente redes sociales
import { arrayRedes } from './arrayRedes'

//importamos elementos que simula los datos que llegan del estado global
import { descriptions, name, imagen } from './descriptions'
import ShopContact from '../Contact/ShopContact'

export default function FincaMandira() {

  const shopId = useSelector(state => state.shops.shopId);

  // const shops = useSelector(state => state.shops.shops);

  // const [ shopId, setShopId ] = useState(0);

  // hooks
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect( () => {
    dispatch(getShopId(location.pathname));
    return () => {
      dispatch(resetShopId(0));
    }
  }, []);



  // useEffect( () => {
  //   dispatch(getShops(location.pathname));
  // }, []);
  // useEffect( () => {
  //   const shopFiltered = shops.filter(shop => shop.path === location.pathname);
  //   if (shopFiltered.at(0)) setShopId(shopFiltered[0]['id_shop']);
  // }, [shops]);

  return (
    <div className={style.page}>
      <section className={style.titleSection}>
        <div>
          <CardShop description={descriptions} name={name} image={imagen} />
        </div>
      </section>
      <section className={style.Cajaredes}>
        <Redes socialmedia={arrayRedes} />
        {/*aca enviamos por props el array que importamos
                                                    simulando los datos que llegarian del back*/}
      </section>
      <div className={style.cardProductContainerContainer}>
        < div >
          <CardProductContainer />
        </div>
      </div>
      <section>
        <div className='container'>
          <h4>Nuestros clientes</h4>
          <span>conoce la opinión de nuestros clientes</span>
        </div>
        { shopId && <Reviews shopId={shopId}/> }
      </section>
      
      <section className={style.contactSection}>
        <ShopContact />
      </section>
      <section>
        <Footer socialmedia={arrayRedes}/>
      </section>
    </div>
  )
}
