import Logo from '../../../assets/images/matina_logo.png';
import Redes from '../../common/redesSociales/redes/Redes';
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <div className={styles.containerFooter}>
            <section className={styles.containerIn}>
                <div className={styles.containerLogo}>
                    <div className={styles.logo}></div>
                    <div className={styles.bandera}></div>
                </div>
                <div className={styles.containerRedes}>
                    <p className={styles.tituloredes}>Siguenos en redes sociales</p>
                    <Redes />
                </div>
                <div className={styles.containerInfo}>
                    <div className={styles.datos}>
                    <p className={styles.titulo}>Visit Matina® 2023</p>
                    <p className={styles.subtitulo}>Todos los derechos reservados</p>
                    <p className={styles.telefonotitulo}>Telefonos:</p>
                    <p className={styles.numeros}>+57301539000 - +573015262253</p>
                    <p className={styles.direccion}>Direccion: av Libertadores 4-35</p>
                    <p className={styles.correo}>Correo:visitmatina@gmail.com</p>
                    <p className={styles.horario}>horario de atencion: 8:00am - 5:00pm</p>
                    <p className={styles.matina}>Matina, Limon, Costa Rica</p>
                    </div>
                </div>
                <div className={styles.containerMapa}>
                    <p className={styles.desarrollo}>
                        <p className={styles.titulodesarrollo}>Esta pagina web fue creada por:</p> 
                        <a className={styles.link} href="https://www.linkedin.com/in/lisandro-areco" target="_blank" rel="noreferrer">Lisandro Areco </a>
                        <a className={styles.link} href="https://www.linkedin.com/in/victorsierracode" target="_blank" rel="noreferrer">Victor Sierra</a>
                        <a className={styles.link} href="https://www.linkedin.com/in/joseeduardoramirezhernandez" target="_blank" rel="noreferrer">Jose Eduardo ramirez</a>
                        <a className={styles.link} href="https://www.linkedin.com/in/noe-alonso-34437869" target="_blank" rel="noreferrer">Noe Alonso</a>
                        <a className={styles.link} href="https://www.linkedin.com/in/leonel-castaneda" target="_blank" rel="noreferrer">Leonel Castañeda</a>
                        <a className={styles.link} href="https://www.linkedin.com/in/ivan-federico-dev/" target="_blank" rel="noreferrer">Ivan Federico</a> 
                    </p>
                </div>
            </section>
        </div>

        
    
  );
};

export default Footer;
