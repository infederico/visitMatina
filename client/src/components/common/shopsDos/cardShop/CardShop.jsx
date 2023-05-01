import style from './CardShop.module.css';
import nl2br from 'react-nl2br';

const CardShop = ({ name, description, image}) => {
    return (
      <div>
        <div className={style.imgAndTitleContainer}>
          <img className={`${style.foto} ax animate__fadeInLeft`} src={image} alt={name} />
          <h5 className={`${style.nombre} `}>{name}</h5>
        <a className={style.svg} href="#textShop"><img src="https://icongr.am/fontawesome/angle-down.svg?size=80&amp;color=fff5cc" alt="flecha"/></a>
        </div>
        {name !== "Paquetes" && <div className={`${style.card} card pb-3`}>
          <div id="textShop" className="card-body" >
            <hr className={style.hr}/>
            <p   className={`${style.descri} card-text `} >{nl2br(description)}</p>
            <hr className={style.hr} />
          </div>
        </div>}
      </div>
        
    );
  };
  
  export default CardShop;
  