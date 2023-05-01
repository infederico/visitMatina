import Redes from '../../../common/redesSociales/redes/Redes';
import style from './ArtesaniasMarYLuna.module.css';
import CardShop from '../../../common/shopsDos/cardShop/CardShop';
import Reviews from '../../../common/Reviews/Reviews';
import Footer from '../../../common/Footer/Footer';
import WhatsApp from '../../../common/WhatsApp/WhatsApp';

//importamos el array que simula los datos que llegan del back-componente redes sociales
import { arrayRedes } from '../arrayRedes';

//importamos elementos que simula los datos que llegan del estado global
import { description, name, image } from './descriptions';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  getShops,
  getShopId,
  getShopData,
} from '../../../../redux/shopActions';
import { resetShopId, resetShopData } from '../../../../redux/shopSlice';

import CardProductContainer2 from '../../../common/CardProductContainer2/CardProductContainer2';
import ShopContact from '../../Contact/ShopContact';

export default function ArtesaniasMarYLuna() {
  const shopId = useSelector((state) => state.shops.shopId);
  const shopData = useSelector((state) => state.shops.shopData);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
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
        <CardShop
          description={shopData.summary}
          name={shopData.name}
          image={shopData.image}
        />
      </section>

      <section className={style.cardProductContainerContainer}>
        <CardProductContainer2 />
      </section>
      <section>{shopId && <Reviews shopId={shopId} />}</section>
      {/* <section>
        <Reviews />
      </section> */}

      <section className={style.contactSection}>
        <ShopContact />
      </section>
      <section>
        <Footer />
      </section>
      {shopData?.whatsapp && (
        <div>
          <WhatsApp />
        </div>
      )}
    </div>
  );
}
