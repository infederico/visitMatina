import style from './CardBlogDetail.module.css';

const CardBlogDetail = (props) => {
    return (
        <div className={`${style.card} card mb-3`}>
            <h5 className={`${style.nombre} card-title`}>{props.name}</h5>
          <div className="card-body">
            <img className={`${style.foto} card-img-top`} src={props.image} alt="..." />
            <p className={`${style.descri} card-text`}>{props.content}</p>
            <p className="card-text">
              <small className="text-body-secondary">
              <p className={`${style.descri} card-text`}>{props.date}</p>
              </small>
            </p>
          </div>
        </div>
    );
  };
  
  export default CardBlogDetail;