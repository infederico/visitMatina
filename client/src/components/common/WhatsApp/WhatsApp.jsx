import { useSelector } from "react-redux"
import whatsapp from '../../../assets/images/whatsapp/whatsapp.png'
import styles from './WhatsApp.module.css'

const WhatsApp = () => {
    const shopData = useSelector((state) => state.shops.shopData);
    return(
        <div className={styles.container}>
            <a className={styles.link} href={`https://wa.me/${shopData.whatsapp}/?text=Hola!%20Estoy%20interesadx%20en%20`}>
                <img  className={styles.img}  src={whatsapp} alt="logo whatsapp" />
            </a>
        </div>
    )
}

export default WhatsApp;