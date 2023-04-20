import style from './CardBlogDetail.module.css';
import Reviews from '../../common/Reviews/Reviews';

const CardBlogDetail = (props) => {
    return (
      <section>
        <section>
        <div className={`${style.card} card mb-3`}>
            <h5 className={`${style.nombre} card-title`}>{props.title}</h5>
          <div className={`card-body`}>
            <img className={`${style.foto} card-img-top`} src={props.image} alt="..." />
            <p className={`${style.descri} card-text`}>{props.content}</p>
  
              <p className={`${style.descri} card-text`}>Fecha de creación: {props.date}</p>

          </div>
        </div>
        </section>
        <section>
        <div>
          <Reviews></Reviews>
        </div>
        </section>
        </section>
    );
  };
  
  export default CardBlogDetail;