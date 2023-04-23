import { Link } from 'react-router-dom';
import style from './Shop.module.css';

const Shop =({image,name,description})=>{
    return(
        <div className={style.card}>
            <img className={style.image} src={image} alt={name}/>
            <section className={style.section}>
                <Link className={style.link}><h3 className={style.title}>{name}</h3></Link> 
                <p className={style.description}>{description}</p>
            </section>
        </div>
    )

}
export default Shop;