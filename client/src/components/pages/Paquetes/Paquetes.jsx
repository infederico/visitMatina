import styles from "./Paquetes.module.css"

import CardProductContainer2 from "../../common/CardProductContainer2/CardProductContainer2";
import Footer from '../../common/Footer/Footer';
import { Dispatch,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopData } from "../../../redux/shopActions";
import { useLocation } from "react-router-dom";

import CardShop from "../../common/shopsDos/cardShop/CardShop";

export default function Paquetes() {
    const shopData = useSelector(state => state.shops.shopData);

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect( () => {
        dispatch(getShopData(location.pathname));
      }, []);
  
    return(
        <div className={styles.container}>  
            <section className={styles.titleSection}>
                { <CardShop/> && <CardShop description={shopData.summary} name={shopData.name} image={shopData.image} style={{}}/>}
            </section>
            <section className={styles.cardTitleContainer}>
                <hr className={styles.hr}/>
                <h4 className={styles.cardTitle}>Disfrutá de momentos inolvidables junto a tus seres queridos con nuestras opciones a medida</h4>
                <hr className={styles.hr}/>
            </section>
            <section className={styles.cardContainer}>
                <CardProductContainer2/>  
            </section>
            <section>
                <Footer/>     
            </section>     
        </div>
    )
}