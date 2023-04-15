import style from "./CardProduct.module.css"

const CardProduct = (props) => {
    return(

        <div className="card h-100" style={{width: "18rem"}}>
            <img  src= {props.image} alt={props.name} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p classname="card-text">{props.description}</p>
                <p className="card-text">${props.price}</p>
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