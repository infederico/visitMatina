import style from './CardBlogDetail.module.css';
import ReviewForm from '../../common/Reviews/ReviewForm/ReviewForm';

const CardBlogDetail = (props) => {
    return (
      <div>
        <div className={`${style.card} card mb-3`}>
            <h5 className={`${style.nombre} card-title`}>{props.name}</h5>
          <div className={`card-body`}>
            <img className={`${style.foto} card-img-top`} src={props.image} alt="..." />
            <p className={`${style.descri} card-text`}>{props.content}</p>
  
              <p className={`${style.descri} card-text`}>Fecha de creación: {props.date}</p>

          </div>
        </div>
        <div>
          <ReviewForm></ReviewForm>
        </div>
        </div>
    );
  };
  
  export default CardBlogDetail;