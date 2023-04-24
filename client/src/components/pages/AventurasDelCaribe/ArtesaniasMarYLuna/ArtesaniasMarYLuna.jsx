
import Redes from '../../../common/redesSociales/redes/Redes';
import style from './ArtesaniasMarYLuna.module.css';
import CardShop from '../../../common/shopsDos/cardShop/CardShop';
import Reviews from '../../../common/Reviews/Reviews';
import Footer from '../../../common/Footer/Footer';


//importamos el array que simula los datos que llegan del back-componente redes sociales
import { arrayRedes } from '../arrayRedes'

//importamos elementos que simula los datos que llegan del estado global
import { description, name, image } from './descriptions'

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getShops, getShopId, getShopData } from '../../../../redux/shopActions';
import { resetShopId, resetShopData } from '../../../../redux/shopSlice';

import CardProductContainer from '../../../common/CardProductContainer/CardProductContainer';
import ShopContact from '../../Contact/ShopContact';

export default function ArtesaniasMarYLuna() {

  const shopId = useSelector(state => state.shops.shopId);
  const shopData = useSelector(state => state.shops.shopData);
  const dispatch = useDispatch();
  const location = useLocation();

    useEffect( () => {
      dispatch(getShopId(location.pathname));
      dispatch(getShopData(location.pathname));
      return () => {
        dispatch(resetShopId(0));
        dispatch(resetShopData({}));
      };
    }, []);

  return (
    <div className={style.page}>
      <section className={style.titleSection}>
        <CardShop description={shopData.summary} name={shopData.name} image={shopData.image} />
      </section>

      <section className={style.Cajaredes}>
        <Redes socialmedia={arrayRedes} />
        {/*aca enviamos por props el array que importamos
                                                    simulando los datos que llegarian del back*/}
      </section>
      <section className={style.cardProductContainerContainer}>
        <CardProductContainer />
      </section>
            <section>
                <div className='container'>
                    <h4>Nuestros clientes</h4>
                    <span>conoce la opinión de nuestros clientes</span>
                </div>
                { shopId && <Reviews shopId={shopId}/> }
            </section>
      {/* <section>
        <Reviews />
      </section> */}      
      
        <section className={style.contactSection}>
          <ShopContact />
        </section>
        <section>
          <Footer socialmedia={arrayRedes}/>
        </section>
    </div>
  )
}