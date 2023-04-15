
import Redes from '../../common/redesSociales/redes/Redes';
import style from './HospedajeClaroDeLuna.module.css';
import { descriptions } from './descriptions';

//importamos el array que simula los datos que llegan del back
import { arrayRedes } from './arrayRedes';


export default function HospedajeClaroDeLuna() {

    
    return(
        <div className={style.page}>
            {/*aca va el componente para renderizar a tarjeta de las tiendas, sigo trabajando en el*/}
            <section className={style.titleSection}>
                <h1 className={style.title}>Hospedaje Claro de Luna</h1>    
            </section>
            <section className={style.imageSection}>
                <img className={style.image} src="https://hotelcaminorealsangil.com.co/wp-content/uploads/2018/07/hoteles-sangil2.jpg" alt="claro de luna"/>
            </section>
            <section className={style.descriptionSection}>
                <p className={style.description}>{descriptions}</p> 
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

                {/*el redes ya quedo funcional*/}

                <Redes socialmedia={arrayRedes}/>{/*aca enviamos por props el array que importamos
                                                    simulando los datos que llegarian del back*/}
            </section>
            


        </div>
       
           </div> 

        
                 
        
    )
}

