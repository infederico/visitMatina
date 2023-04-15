import CardProduct from "./CardProduct/CardProduct";
// import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import style from "./CardProductContainer.module.css"

const CardProductContainer = () => {
    const dispatch = useDispatch()
    
    
    const BD = require('./res_back.json');
    const products = BD.response;

    const location = useLocation()
    
    const memberId = () => {
        switch(location.pathname) {
            case "/AventurasDelCaribe":
                return 1;
            case "/FincalaParcela":
                return 2;
            default:
                return 1
        }
    }
    useEffect(() => {
       memberId()
   //  dispatch(getProductsByStore(memberId))
    },[])

    const filteredProducts = products.filter(prod => prod.storeid === memberId())
    
    return (
        <div className={style.cards_container}>
            
            {filteredProducts.map(prod =>{ 
                return(
                    <div >
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