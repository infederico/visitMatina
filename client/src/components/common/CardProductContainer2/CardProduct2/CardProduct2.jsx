import axios from "axios";
import style from "./CardProduct2.module.css"
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../redux/cartSlice";

const CardProduct2 = ({image, name, description, id, price, idModal}) => {

    const product = [{
                id: id,
                title: name,
                currency_id: 'MXN',
                picture_url: image,
                description: description,
                category: 'art',
                quantity: 1,
                unit_price: price,
                price: price,
                amount: {
                    value: price
                }
            }]
    
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addProduct(product[0]));
    }

    const handlePayment = () => {
        axios.post("http://localhost:3001/api/payments", product)
        .then(resp => {
            // console.log(resp.data.resp.body.sandbox_init_point)
                let payUrl = resp.data.resp.body.sandbox_init_point;
                window.location.href =  payUrl     
            } 
        )
    }

    return(
        /* Card */
        <div className={ style.customCard } >
            <div className={`card text-bg-dark card-container ${style.container}`} /* style={{width: "200%"}} */>
                <img src={image} className={`card-img ${style.image}` } alt={name}/>
                <div className={ `card-img-overlay ${style.customOverlay}` }>
                    <h4 className={`card-title ${style.text}`}>{name}</h4>
                    <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target={`#${idModal}`}> + Detalles</button> 
                </div>
            </div>

        { /* modal */ }
        <div className="modal fade" id={`${idModal}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{name}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {description}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" onClick={ handleAddToCart }> A&ntilde;adir al carrito</button>
                    { /* <button type="button" className="btn btn-success" onClick={ handlePayment }>Comprar</button> */ }
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CardProduct2;