import CardGallery from "./CardGallery/CardGallery"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./CardGalleryContainer.module.css"
import { getProductsByShopId } from "../../../redux/productActions"

const CardGalleryContainer = () => {
    const dispatch = useDispatch()

    const shopId = useSelector(state => state.shops.shopId)
    const products = useSelector(state => state.product.product)
    
    
    useEffect(() => {
        dispatch(getProductsByShopId(shopId))
    },[shopId])
    
    return(
        <div className={styles.gallery}>
            {products && products?.map(prod => {
                return(
                    <CardGallery
                    key= {prod.id_product}
                    image= {prod.image}
                    shop= {prod.name}
                    />
                )
            })}
        </div>
    )
}
export default CardGalleryContainer;