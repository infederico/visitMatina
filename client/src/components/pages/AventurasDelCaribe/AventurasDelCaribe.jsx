import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { getShops, getShopId, getShopData } from '../../../redux/shopActions';
import { resetShopId, resetShopData } from '../../../redux/shopSlice';
import CardProductContainer2 from '../../common/CardProductContainer2/CardProductContainer2';
import CardShop from '../../common/shopsDos/cardShop/CardShop';
import Reviews from '../../common/Reviews/Reviews';
import Redes from '../../common/redesSociales/redes/Redes';
import Footer from '../../common/Footer/Footer';
import WhatsApp from '../../common/WhatsApp/WhatsApp';

//importamos el array que simula los datos que llegan del back-componente redes sociales
import { arrayRedes } from './arrayRedes';

//importamos elementos que simula los datos que llegan del estado global
//import { description, name, image } from './descriptions'

import style from './AventurasDelCaribe.module.css';
import ShopContact from '../Contact/ShopContact';

export default function AventurasDelCaribe() {
  /*  const shopId = useSelector(state => state.shops.shopId);

  // hooks
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect( () => {
    dispatch(getShopId(location.pathname));
    return () => {
      dispatch(resetShopId(0));
    }
  }, []);

  useEffect(() => {
  }, []) */
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
  const topRef = useRef(null);

  function handleClick() {
    window.scrollTo({ top: topRef.current?.offsetTop, behavior: 'smooth' });
  }
  return (
    <div className={style.page}>
      <section className={style.titleSection}>
        <CardShop
          description={shopData.summary}
          name={shopData.name}
          image={shopData.image}
        />
      </section>

      <div className={style.cardProductContainerContainer}>
        <div>
          <CardProductContainer2 />
        </div>
      </div>
      <div className={style.container}>
        <Link to='/artesaniasMarYLuna' ref={topRef} onClick={handleClick}>
          <h2 className={style.encabezado}>
            Visita nuestra tienda de artesanías
          </h2>
          <img
            alt=''
            className={style.item}
            src='https://res.cloudinary.com/dfnw2l08x/image/upload/c_fill,g_auto,h_250,r_0,w_970/b_rgb:000000,e_gradient_fade,y_-0.5/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Artesanias%20Mar-y-Luna,w_0.5,y_0.18/v1682283540/ArtesaniasMarYLuna_paofg8.jpg'
          />
          <img
            alt=''
            className={style.item}
            src='https://res.cloudinary.com/dfnw2l08x/image/upload/c_fill,g_auto,h_250,r_0,w_970/b_rgb:000000,e_gradient_fade,y_-0.5/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Artesanias%20Mar-y-Luna,w_0.5,y_0.18/v1682283540/ArtesaniasMarYLuna_paofg8.jpg'
          />
          <img
            alt=''
            className={style.item}
            src='https://res.cloudinary.com/dfnw2l08x/image/upload/c_fill,g_auto,h_250,r_0,w_970/b_rgb:000000,e_gradient_fade,y_-0.5/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Artesanias%20Mar-y-Luna,w_0.5,y_0.18/v1682283540/ArtesaniasMarYLuna_paofg8.jpg'
          />
        </Link>
      </div>
      <section>{shopId && <Reviews shopId={shopId} />}</section>

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
