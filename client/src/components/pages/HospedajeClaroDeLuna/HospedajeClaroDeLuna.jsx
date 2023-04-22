import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getShops, getShopId } from '../../../redux/shopActions';
import { resetShopId } from '../../../redux/shopSlice';

import Redes from '../../common/redesSociales/redes/Redes';
import style from './HospedajeClaroDeLuna.module.css';
import CardShop from '../../common/shopsDos/cardShop/CardShop';
import Reviews from '../../common/Reviews/Reviews';


//importamos el array que simula los datos que llegan del back-componente redes sociales
import { arrayRedes } from './arrayRedes'

//importamos elementos que simula los datos que llegan del estado global
import { descriptions, name, imagen } from './descriptions'
import ShopContact from '../Contact/ShopContact'

export default function HospedajeClaroDeLuna() {

  const shopId = useSelector(state => state.shops.shopId);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect( () => {
      dispatch(getShopId(location.pathname));
      return () => {
          dispatch(resetShopId(0));
      };
  }, []);


  let BD = require('./imagenes.json')
  BD = BD.response

  return (
    <div className={style.page}>
      <section className={style.titleSection}>
        <CardShop description={descriptions} name={name} image={imagen} />
      </section>

      {/* se mapean las imagenes de la galeria */}
      <div className={style.gallery}>
        {BD.map((image) => {
          return <img src={image.img} alt='AGREGAR ALT' />
        })}
      </div>

      <section>
        <div className='container'>
          <h4>Nuestros clientes</h4>
          <span>conoce la opinión de nuestros clientes</span>
        </div>
        { shopId && <Reviews shopId={shopId}/> }
      </section>

      <section className={style.Cajaredes}>
        <Redes socialmedia={arrayRedes} />
        {/*aca enviamos por props el array que importamos
                                                    simulando los datos que llegarian del back*/}
      </section>
      <div className={style.contRedes}>
        <section className={style.ubicacionSection}>
          <h2 className={style.ubicacion}>Nuestra Ubicación</h2>
          <img
            className={style.map}
            src='https://i.blogs.es/ade34e/google-maps-portada-trafico/840_560.jpg'
            alt='mapa'
          />
        </section>
        <section className={style.contactSection}>
          <ShopContact />
        </section>
      </div>
    </div>
  )
}
