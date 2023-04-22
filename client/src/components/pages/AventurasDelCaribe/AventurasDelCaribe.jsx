import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { getShopId } from '../../../redux/shopActions';
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

  // const shops = useSelector(state => state.shops.shops);
  const shopId = useSelector(state => state.shops.shopId);

  // const [ shopId, setShopId ] = useState(0);

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

  // useEffect( () => {
  //   dispatch(getShops());
  //   const shopFiltered = shops.filter(shop => shop.path === location.pathname);
  //   if (shopFiltered.at(0)) setShopId(shopFiltered[0]['id_shop']);
  // }, []);

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

            <section>
                <div className='container'>
                    <div className={style.title}>
                        <h3>Nuestros clientes</h3>
                        <span>conoce la opinión de nuestros clientes</span>
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
                  
        </>
    );
};