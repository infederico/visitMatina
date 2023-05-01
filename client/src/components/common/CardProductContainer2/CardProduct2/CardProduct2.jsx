import axios from "axios";
import style from "./CardProduct2.module.css"
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../redux/cartSlice";
import { useState } from "react";
const CardProduct2 = ({image, name, description, id, price}) => {

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
  };

    const handlePayment = () => {
        axios.post("http://localhost:3001/api/payments", product)
        .then(resp => {
            // console.log(resp.data.resp.body.sandbox_init_point)
                let payUrl = resp.data.resp.body.sandbox_init_point;
                window.location.href =  payUrl     
            } 
        )
    }
    const [showDescription, setShowDescription] = useState(false);
    const shopId = useSelector(state => state.shops.shopId);    

  return (
    /* Card */
    <div className={style.customCard}>
      <div
        className={`card text-bg-dark card-container ${style.container}`}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() =>
          setShowDescription(false)
        } /* style={{width: "200%"}} */
      >
        <img src={image} className={`card-img ${style.image}`} alt={name} />
        <div className={`card-img-overlay ${style.customOverlay}`}>
          <h4 className={`card-title ${style.text}`}>{name}</h4>
          {/* <h4 className={`${style.text} ${showDescription ? style.showDescription : ""}`}>{description}</h4> */}

          {showDescription ? (
            <p className={`${style.text} ${style.show}`}>{description}</p>
          ) : (
            <p className={`${style.text} ${style.hide}`} style={{ opacity: 0 }}>
              {description}
            </p>
          )}
          <button
            type='button'
            className='btn btn-success'
            onClick={handleAddToCart}
          >
            {' '}
            A&ntilde;adir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct2;
