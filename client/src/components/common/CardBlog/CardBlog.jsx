import styles from "./CardBlog.module.css";
import { Link } from "react-router-dom";
import {useState} from "react"

const CardBlog = (props) => {
  const [showDescription, setShowDescription] = useState(false);

  return (

      <div className={ styles.customCard } >
          <div className={`card text-bg-dark card-container ${styles.container}`} 
          onMouseEnter={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)} /* style={{width: "200%"}} */>
              <img src={props.image} className={`card-img ${styles.image}` } alt={props.title}/>
              <div className={ `card-img-overlay ${styles.customOverlay}` }>
                  <h4 className={`card-title ${styles.text}`}>{props.title}</h4>
                  {/* <h4 className={`${style.text} ${showDescription ? style.showDescription : ""}`}>{description}</h4> */}

                  {showDescription? <p className={`${styles.text} ${styles.show}`}>{props.summary}</p> 
                  :<p className={`${styles.text} ${styles.hide}`} style={{ opacity:0 }}>{props.summary}</p>}
                  <Link to ={`/detailBlog/${props.id}`}><button type="button" className={`btn btn-success ${styles.button}`}>
                    <p className="m-0">Leer más ...</p>
                  </button></Link>
                  {/* {shopId === 2
                  ?<button type="button" className="btn btn-success" onClick={ handleAddToCart }> A&ntilde;adir al carrito</button>
                  :<a href="#contact"><button type="button" className="btn btn-success">Consulta</button></a>   } */}
              </div>
          </div>
      </div>

      
/*     <div className={`${styles.divCard} card mb-3`} style={{ width: "540px" }}>
      <div className={`row g-0`}>
        <div className={`col-md-4`}>
          <img src={props.image} className={`${styles.image} img-fluid rounded-start`} alt="..." />
        </div>
        <div className={`col-md-8`}>
          <div className={`card-body`}>
            <h5 className={`card-title`}>{props.title}</h5>
            <p className={`card-text`}>{props.summary}</p>
            <Link to ={`/detailBlog/${props.id}`}><button className={`${styles.button} btn btn-primary`}>
              Leer más ...
            </button></Link>
          </div>
        </div>
      </div>
    </div> */

  );
};

export default CardBlog;
