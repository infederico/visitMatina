import CardProductContainer from '../../common/CardProductContainer/CardProductContainer'
import Redes from '../../common/redesSociales/redes/Redes'
import style from './FincaMandira.module.css'
import CardShop from '../../common/shopsDos/cardShop/CardShop'
import Reviews from '../../common/Reviews/Reviews';


//importamos el array que simula los datos que llegan del back-componente redes sociales
import { arrayRedes } from './arrayRedes'

//importamos elementos que simula los datos que llegan del estado global
import { descriptions, name, imagen } from './descriptions'
import ShopContact from '../Contact/ShopContact'

export default function FincaMandira() {
  return (
    <div className={style.page}>
      <section className={style.titleSection} style={{ backgroundColor: '#ccc' }}>
        <div className="container">
          <CardShop description={descriptions} name={name} image={imagen} />
        </div>
      </section>

      <CardProductContainer />

      <section>
        <Reviews />
      </section>

      <div className={style.contRedes}>
        <section className={style.Cajaredes}>
          <Redes socialmedia={arrayRedes} />
          {/*aca enviamos por props el array que importamos
                                                    simulando los datos que llegarian del back*/}
        </section>
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
