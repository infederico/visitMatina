
import Redes from '../../../common/redesSociales/redes/Redes';
import style from './ArtesaniasMarYLuna.module.css';
import CardShop from '../../../common/shopsDos/cardShop/CardShop';
import Reviews from '../../../common/Reviews/Reviews';
import Footer from '../../../common/Footer/Footer';


//importamos el array que simula los datos que llegan del back-componente redes sociales
import { arrayRedes } from '../arrayRedes'

//importamos elementos que simula los datos que llegan del estado global
import { description, name, image } from './descriptions'

import CardProductContainer from '../../../common/CardProductContainer/CardProductContainer'
import ShopContact from '../../Contact/ShopContact'

export default function ArtesaniasMarYLuna() {
  return (
    <div className={style.page}>
      <section className={style.titleSection}>
        <CardShop description={description} name={name} image={image} />
      </section>

      <section className={style.Cajaredes}>
        <Redes socialmedia={arrayRedes} />
        {/*aca enviamos por props el array que importamos
                                                    simulando los datos que llegarian del back*/}
      </section>
      <section className={style.productSection}>
        <CardProductContainer />
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