import CardProduct from "./CardProduct/CardProduct";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import style from "./CardProductContainer.module.css"
import { getProducts } from "../../../redux/productsActions";

const CardProductContainer = () => {
    const dispatch = useDispatch()
    const value = useSelector(state => state.products.value)
    // const value = useSelector(state => state.products.shops)
    
    const location = useLocation()
    
    const memberId = () => {
        switch(location.pathname) {
            case "/artesaniasMarYLuna": //case shops
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
        dispatch(getProducts())
    },[memberId])

    const filteredProducts = value?.filter(prod => prod.storeid === memberId())
    
    return (
        <div>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-6">                
                {filteredProducts?.map(prod =>{ 
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