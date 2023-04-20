import CardProduct from "./CardProduct/CardProduct";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import style from "./CardProductContainer.module.css"
import { getProducts } from "../../../redux/productsActions";
import { getShops } from '../../../redux/shopActions'

const CardProductContainer = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const value = useSelector(state => state.products.value)
    
    // const shops = useSelector(state=> state.shops.shops)

    // const [shopId, setShopId] = useState(0)
  
    // useEffect(() => {
    //   dispatch(getShops())
    // },[])
    // useEffect(() => {
    //   let shopFiltered = shops.filter(shop => shop.path === location.pathname)
    //   console.log(shopFiltered);
    //   setShopId(shopFiltered[0]["id_shop"])
    // },[shops])


    // esto se borraria
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