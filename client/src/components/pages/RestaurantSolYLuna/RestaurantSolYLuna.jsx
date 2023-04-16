import Redes from '../../common/redesSociales/redes/Redes';
import style from './RestaurantSolYLuna.module.css';
import CardShop from '../../common/shopsDos/cardShop/CardShop';


//importamos el array que simula los datos que llegan del back-componente redes sociales
import { arrayRedes } from './arrayRedes';

//importamos elementos que simula los datos que llegan del estado global
import { descriptions,name,imagen } from './descriptions';
import CardProductContainer from '../../common/CardProductContainer/CardProductContainer';
import CardProductContainer2 from '../../common/CardProductContainer2/CardProductContainer2';


export default function RestauranteSolYLuna() {
    
    let DB = require("./imagenes.json")
    DB = DB.response
    
    
    return(
        <div className={style.page}>
            
            <section className={style.titleSection}>
                <CardShop description={descriptions} name={name} image={imagen}/>    
            </section>
            
            <section className={style.Cajaredes}>
                 <Redes socialmedia={arrayRedes}/>{/*aca enviamos por props el array que importamos
                                                    simulando los datos que llegarian del back*/}
            </section>
            <h1>Restaurante Sol y Luna</h1>
            <div className={styles.gallery}>
                {DB.map(image => {
                    return(
                        <img src={image.img} alt="AGREGAR ALT" />
                    )
                })}
            </div>    
            <section className={style.menuSection}>
                <CardProductContainer2 /> {/* habilitar que reciba x props un array con los datos de esta pag*/}
            </section>
            <div className={style.contRedes}>
            <section className={style.ubicacionSection}>
                <h2 className={style.ubicacion}>Nuestra Ubicación</h2>
                <img className={style.map} src="https://i.blogs.es/ade34e/google-maps-portada-trafico/840_560.jpg" alt="mapa"/>
            </section>
            <section className={style.contactSection}>

                {/*este componente lo esta haciendo edu, luego lo reemplazamos*/}
                <h2 className={style.contact}>Contáctanos</h2>  
                <div className={style.contactInfo}>
                    <p className={style.contactInfo}>Teléfono: 123456789</p>    
                    <p className={style.contactInfo}>Correo: matina@gmail.com </p>
                    <p className={style.contactInfo}>Dirección: Calle 123 # 45 - 67</p>
                    <p className={style.contactInfo}>Horario: 8:00 am - 6:00 pm</p>
                </div>

            </section>
           


                </div>
       
           </div> 

        
                 
        
    )
}