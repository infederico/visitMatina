import Logo from '../../../assets/images/matina_logo.png';
import Redes from '../../common/redesSociales/redes/Redes';
import styles from './Footer.module.css';

const Footer = ({ socialmedia }) => {
  return (
    <div className={`container-fluid`}>
      <div className={`row p-5 justify-content-center ${styles.container}`}>
        <div className='col-xs-12  col-md-6 col-lg-4'>
          <img src={Logo} alt='' className={styles.logo} />
        </div>

        <div className='col-xs-12  col-md-6 col-lg-4'>
          <section className={styles.ubicacionSection}>
            <h5 className={styles.ubicacion}>Matina, Costa Rica</h5>
            <img
              className={styles.map}
              src='https://codigo-postal.org/data/cr/images/cp-canton/limon-matina.webp'
              alt='mapa'
            />
          </section>
        </div>
        <div className='col-xs-12  col-md-6 col-lg-4 '>
          <h5>Seguinos en:</h5>
          <Redes socialmedia={socialmedia} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
