import style from './CardShop.module.css';

const CardShop = ({ name, description, image}) => {
    return (
      <div>
        <div className={style.imgAndTitleContainer}>
          <img className={`${style.foto} ax animate__fadeInLeft`} src={image} alt={name} />
          <h5 className={`${style.nombre} `}>{name}</h5>
        <a className={style.svg} href="#si2"><img src="https://icongr.am/fontawesome/angle-down.svg?size=80&amp;color=fff5cc" alt="flecha"/></a>
        </div>
        {name !== "Paquetes" && <div className={`${style.card} card pb-3`}>
          <div  className="card-body" >
            <p  id="si2" className={`${style.descri} card-text `} >{description}</p>
          </div>
        </div>}
      </div>
        
    );
  };
  
  export default CardShop;
  