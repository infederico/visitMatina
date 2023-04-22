import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getShops, getShopId } from '../../../redux/shopActions';
import { resetShopId } from '../../../redux/shopSlice';

import CardShop from '../../common/shopsDos/cardShop/CardShop';
import CardActivities from '../../common/CardActivities/CardActivities';
import Reviews from '../../common/Reviews/Reviews';
import Redes from '../../common/redesSociales/redes/Redes';
import Footer from '../../common/Footer/Footer';

//importamos el array que simula los datos que llegan del back-componente redes sociales
import { arrayRedes } from './arrayRedes'

//importamos elementos que simula los datos que llegan del estado global
import { description, name, image } from './descriptions'

import style from './AventurasDelCaribe.module.css'
import ShopContact from '../Contact/ShopContact'

export default function AventurasDelCaribe() {

  const shopId = useSelector(state => state.shops.shopId);

  const [aventuras, setAventuras] = useState([])

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
    setAventuras(require('./mock_aventuras.json').response)
  }, [])

  return (
    <>
      <div >
        <section className={style.titleSection}>
          <CardShop description={description} name={name} image={image} />
        </section>

      </div>
            <div className="row">
            {
                aventuras?.map((aventura) => {
                    return (
                        <CardActivities
                            key={aventura.idProduct}
                            image={aventura.image}
                            name={aventura.name}
                            description={aventura.description}
                            price={aventura.price}
                        />
                    )
                })
            }
            </div>
            <div className={style.containerReviews}>
              <section>
                  <div className='container'>
                      <div className={style.title}>
                          <h2 className='text-center'>Nuestros clientes</h2>
                          {/* <span>conoce la opinión de nuestros clientes</span> */}
                      </div>
                  </div>

              </section>

    
              { shopId && <Reviews shopId={shopId}/> }
              <section className={style.contactSection}>
                <ShopContact />
              </section>
              <section>
                <Footer socialmedia={arrayRedes}/>
              </section>
            </div>
                  
        </>
    );
};