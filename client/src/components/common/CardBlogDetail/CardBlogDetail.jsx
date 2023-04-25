import style from './CardBlogDetail.module.css';
import Reviews from '../../common/Reviews/Reviews';
import { clnDetail } from '../../../redux/postActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import nl2br from 'react-nl2br';

const CardBlogDetail = (props) => {

  const dispatch = useDispatch();

  useEffect(() =>{
    return (()=> dispatch(clnDetail()));
  },[]);


    return (
      <section>
        <section>
        <div className={`${style.card} card mb-3`}>
            <h5 className={`${style.nombre} card-title`}>{props.title}</h5>
          <div className={`card-body`}>
            <img className={`${style.foto} card-img-top`} src={props.image} alt="..." />
            <div className={`${style.descri} card-text`}>{nl2br(props.content)}</div>
            <p className={`${style.descri} card-text`}>Creado por: {props.user}</p>
            <p className={`${style.descri} card-text`}>Email: {props.email}</p>
            <p className={`${style.descri} card-text`}>Fecha de creación: {props.date}</p>

          </div>
        </div>
        </section>
        <section>
{/*         <div>
          <Reviews></Reviews>
        </div> */}
        </section>
        </section>
    );
  };
  
  export default CardBlogDetail;