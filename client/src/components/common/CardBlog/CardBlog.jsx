import styles from "./CardBlog.module.css";
import { Link } from "react-router-dom";

const CardBlog = (props) => {
  return (
    <section>
    <div className={`card mb-3`} style={{ width: "540px" }}>
      <div className={`row g-0`}>
        <div className={`col-md-4`}>
          <img src={props.image} className={`${styles.image} img-fluid rounded-start`} alt="..." />
        </div>
        <div className={`col-md-8`}>
          <div className={`card-body`}>
            <h5 className={`card-title`}>{props.title}</h5>
            <p className={`card-text`}>{props.summary}</p>
            <Link to ={`/detailBlog/${props.id}`}><button className={`btn btn-primary`}>
              Leer más ...
            </button></Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CardBlog;
