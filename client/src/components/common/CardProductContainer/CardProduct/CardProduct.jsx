import style from "./CardProduct.module.css"

const CardProduct = (props) => {
    return(
        <div className={style.container_product}>
                <img  className={style.product_image} src= {props.image} alt={props.name} />
                <h4 className={style.name}>{props.name}</h4>
                <p className={style.product_description}>{props.description}</p>
                <p className={style.product_price}>${props.price}</p>
        </div>
    )
}

export default CardProduct