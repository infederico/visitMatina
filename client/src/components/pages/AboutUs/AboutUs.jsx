import Carousel from '../../common/Carousel/Carousel';
import Footer from '../../common/Footer/Footer';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <section >
        <Carousel />
      </section>
      <section className={styles.textContainer}>
        <hr className={styles.hr}/>
        <h2 className={styles.title}> Historia de Matina: </h2>
        <h5>Reseña Por Dr. Minor Arias Uva</h5>
        <p>
          Matina es el cantón número 5 de la provincia de Limón y cuenta con
          tres distritos: <b>Matina, Carrandi y Batán</b>. El cantón de Matina
          fue fundado el 4 de noviembre de 1862. Anterior a eso, este pueblo
          pertenecía a Cartago, específicamente al cantón de Paraíso. El
          territorio que hoy ocupa Matina, se encontraba habitado por el grupo
          indígena denominado Pococí, que se ubicaba entre los territorios
          Suerre y Tariaca. Estas tierras eran parte del gran Reino de Ara, hoy
          conocido como Talamanca, nombre que le pusiera uno los colonizadores
          que fundó en el año de 1610 la misión de Santiago de Talamanca. Los
          territorios del Reino de Ara eran liderados por diferentes reyes
          indígenas o jefes. Existía un rey de reyes (líder de todo el Reino),
          recordamos a Guaycorá, y a Pablo Presbere (Pa Plu Presberí) En 1637 el
          gobernador Gregorio de Sandoval estableció el Puerto de Matina. Su
          intención era fortalecer las primeras exportaciones de la provincia de
          Costa Rica.
        </p>
        <p>
          Para la atención de las haciendas cacaoteras los criollos españoles,
          desplazaron hasta Matina personas esclavizadas de origen africano
          (irónicamente muchos de estos esclavos era sus hijos o familiares,
          porque habían nacido de las esclavas que vivían en sus casas) En el
          siglo XVII en la época colonial, se establecieron haciendas cacaoteras
          en esta zona. Entre los años 1682 y 1691, existían unos 44 hacendados
          los cuales contaban con aproximadamente 92,700 árboles de cacao, y o
          revestía una gran importancia para la colonia. Los piratas también
          realizaban incursiones en la zona, y para detenerlos se construyó el
          “Fuerte de San Fernando“, el cual fue destruido con los primeros
          embates del enemigo.
        </p>
        <p>
          {' '}
          A pesar de la importancia del cacao en la época colonial, en Matina no
          queda ningún rastro de la época en la actualidad. (Amaya, 2017:6). Por
          lo menos no queda ningún vestigio físico o material de la presencia
          africana durante la etapa colonial, no obstante, en los registros
          históricos y en la génica de algunas familias se preserva ese pasado
          tan significativo. Es importante recordar que en la actualidad Matina
          tiene varios territorios indígenas de la etnia cabécar, que
          representan también un alto potencial turístico y cultural.
        </p>
        <hr className={styles.hr}/>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
