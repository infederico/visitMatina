// eslint-disable-next-line
import Logo from '../../../assets/images/matina_logo.png';
import Redes from '../../common/redesSociales/redes/Redes';
import styles from './Footer.module.css';
import logo from '../../../assets/images/logo-municipalidad-matina.png'

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <section className={styles.containerIn}>
        <div className={styles.containerLogo}>
          {/* <span>con el apoyo de</span> */}
          <div className={styles.logo}><img src={logo} alt="" />
          <p className={styles.matina}>Matina, Limón</p>
          <p className={styles.matina}>Costa Rica</p>
          </div>
          {/* <div className={styles.bandera}></div> */}
        </div>
        <div className={styles.containerRedes}>
          <p className={styles.tituloredes}>Síguenos en redes sociales</p>
          <Redes />
        </div>
        <div className={styles.containerInfo}>
          <div className={styles.datos}>
            <p className={styles.correo}>visitmatina@gmail.com</p>
            <p className={styles.titulo}>© 2023 Visit Matina</p>
            {/* <p className={styles.subtitulo}>Todos los derechos reservados</p> */}
            {/* <p className={styles.telefonotitulo}>Telefonos:</p>
                    <p className={styles.numeros}>+57301539000 - +573015262253</p> */}
            {/* <p className={styles.horario}>horario de atencion: 8:00am - 5:00pm</p>
                    <p className={styles.direccion}>Direccion: av Libertadores 4-35</p> */}
          </div>
        </div>
        <div className={styles.containerMapa}>
          <div className={styles.desarrollo}>
            <p className={styles.titulodesarrollo}>web creada por: </p>
            <a
              className={styles.link}
              href='https://www.linkedin.com/in/joseeduardoramirezhernandez'
              target='_blank'
              rel='noreferrer'
            >
              Eduardo Ramírez
            </a>
            <a
              className={styles.link}
              href='https://www.linkedin.com/in/ivan-federico-dev/'
              target='_blank'
              rel='noreferrer'
            >
              Iván Federico
            </a>
            <a
              className={styles.link}
              href='https://www.linkedin.com/in/leonel-castaneda'
              target='_blank'
              rel='noreferrer'
            >
              Leonel Castañeda
            </a>
            <a
              className={styles.link}
              href='https://www.linkedin.com/in/lisandro-areco'
              target='_blank'
              rel='noreferrer'
            >
              Lisandro Areco{' '}
            </a>
            <a
              className={styles.link}
              href='https://www.linkedin.com/in/victorsierracode'
              target='_blank'
              rel='noreferrer'
            >
              Victor Sierra
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
