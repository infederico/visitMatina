import style from "./CardProduct.module.css"

const CardProduct = (props) => {
    return(

        <div className={`card h-100 ${style.container_product}`}>
            <img  src= {props.image} alt={props.name} className="card-img-top"/>
            <div className="card-body">
                <h5 className={`card-title ${style.product_name}`}>{props.name}</h5>
                <p className={`card-text ${style.product_descriptionn}`}>{props.description}</p>
                <p className={`card-text ${style.product_price}`} >${props.price}</p>
                <a href="#" className={`btn btn-primary ${style.product_button}`}>Consultar</a>
            </div>
        </div>   

        // <div className={style.container_product}>
        //     <img  className={style.product_image} src= {props.image} alt={props.name} />
        //     <h4 className={style.name}>{props.name}</h4>
        //     <p className={style.product_description}>{props.description}</p>
        //     <p className={style.product_price}>${props.price}</p>
        // </div>
    )
}



export default CardProduct