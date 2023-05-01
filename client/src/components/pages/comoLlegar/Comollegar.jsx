import style from './Comollegar.module.css';
import Footer from '../..//common/Footer/Footer';
import {
  sanjosematina1,
  sanjosematina2,
  puertoviejomatina,
} from './descripciones';
import { useState } from 'react';
import mapa from './imgMaps/mapa.png';
import mapa2 from './imgMaps/mapa2.png';
import { arrayRedes } from './arrayRedes';


const Comollegar = () => {
  const [descripciones, setDescripciones] = useState(sanjosematina1);

  const handleclick = () => {
    if (descripciones === sanjosematina1) {
      setDescripciones(sanjosematina2);
    }
    if (descripciones === sanjosematina2) {
      setDescripciones(sanjosematina1);
    }
  };

  return (
    <div className={style.pagina}>
      <div className={style.cajacentro}>
        <p className={style.titulo1}>San Jose - Matina</p>
        <div className={style.cajafoto}>
          <p>{descripciones}</p>
          <div className={style.continua} onClick={handleclick}>
            continua...
          </div>
        </div>
        <div className={style.cajatexto}>
          <img className={style.foto} src={mapa} alt='' />
        </div>
      </div>
      <div className={style.cajacentro}>
        <p className={style.titulo1}>Puerto Viejo - Matina</p>
        <div className={style.cajafoto}>
          <p>{puertoviejomatina}</p>
          {/* <div className={style.continua} onClick={handleclick} >continua...</div> */}
        </div>
        <div className={style.cajatexto}>
          <img className={style.foto} src={mapa2} alt='' />
        </div>
      </div>
      
      <Footer socialmedia={arrayRedes} />
    </div>
  );
};

export default Comollegar;
