import style from './CardShop.module.css';

const CardShop = ({ name, description, image}) => {
    return (
      <div>
        <div className={`${style.card} card mb-3`}>
        <img className={`${style.foto} card-img-top`} src={image} alt={name} />
          <div className="card-body">
            <h5 className={`${style.nombre} card-title`}>{name}</h5>
            <p className={`${style.descri} card-text`}>{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
        </div>
    );
  };
  
  export default CardShop;
  