import style from './CardBlogDetail.module.css';
import { clnDetail } from '../../../redux/postActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import nl2br from 'react-nl2br';
import Footer from "../Footer/Footer"
import { arrayRedes } from "./arrayRedes";

const CardBlogDetail = (props) => {

  const dispatch = useDispatch();

  useEffect(() =>{
    return (()=> dispatch(clnDetail()));
  },[]);

    return (
      <div>
        <section>
        <div className={`${style.card} card mb-0`}>

            <div className={style.textConteiner}>

              <h1 className={`${style.title} card-title`}>{props.title}</h1>

            </div>
            
            
          <div className={style.divTextImg}>

            <div className={`${style.descri} card-text`}>{nl2br(props.content)}</div>
            <div className={style.textConteiner}>
              <img className={`${style.foto} card-img-top`} src={props.image} alt="..." />
              </div>

          </div>

        <div className={style.textConteiner}>

             <p className={`${style.footer} card-text`}>Creado por: {props.user}</p>
            <p className={`${style.footer} card-text`}>Email: {props.email}</p>
            <p className={`${style.footer} card-text`}>Fecha de creación: {props.date}</p> 
            
        </div>
        
        </div>
        
        </section>
        <section>
{/*         <div>
          <Reviews></Reviews>
        </div> */}
        </section>
         <div>
              <Footer socialmedia={arrayRedes}></Footer>
            </div>
        </div>
    );
  };
  
  export default CardBlogDetail;