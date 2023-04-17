import CardProduct from "./CardProduct/CardProduct";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import style from "./CardProductContainer.module.css"

const CardProductContainer = () => {
    // const dispatch = useDispatch()
    
    
    const BD = require('./res_back.json');
    const products = BD.response;

    const location = useLocation()
    
    const memberId = () => {
        switch(location.pathname) {
            case "/artesaniasMarYLuna":
                return 1;
            case "/fincaLaParcela":
                return 2;
            case "/fincaMandira":
                return 3;
            default:
                return 
        }
    }
    useEffect(() => {
       memberId()
   //  dispatch(getProductsByStore(memberId))
    },[memberId])

    const filteredProducts = products.filter(prod => prod.storeid === memberId())
    
    return (
        <div>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-6">                
                {filteredProducts.map(prod =>{ 
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
        </div>
    )
}

export default CardProductContainer;