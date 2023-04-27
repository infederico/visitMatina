import CardProduct from "./CardProduct/CardProduct";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import style from "./CardProductContainer.module.css"
import { getShopId } from '../../../redux/shopActions'
import styles from './CardProductContainer.module.css'
import { getProductsByShopId } from "../../../redux/productActions";

const CardProductContainer = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    // const value = useSelector(state => state.products.value)
    const product = useSelector(state => state.product.product)
    const shopId = useSelector(state => state.shops.shopId);


    useEffect(() => {
        dispatch(getProductsByShopId(shopId))
    },[shopId])


    
    return (
            <div className={`row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 justify-content-center ${styles.cardsContainer}`}>                
                {product?.map(prod =>{ 
                    return(
                        <div className="col">
                            <CardProduct 
                                key= {prod.id}
                                image= {prod.image}
                                name= {prod.name}
                                description= {prod.description}
                                price= {prod.price}
                            />
                        </div>
                    )
                })}
            </div>
    )
}

export default CardProductContainer;