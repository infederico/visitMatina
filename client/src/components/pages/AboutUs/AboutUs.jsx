import Carousel from '../../common/Carousel/Carousel';
import Footer from '../../common/Footer/Footer';
import styles from './AboutUs.module.css'


export default function AboutUs() {
    return(
        <div>    
            <section className={styles.carouselContainer}>
                <Carousel />
            </section>
            <section className={styles.textContainer}>
                
            </section>
            <section>
                <Footer/>
            </section>

        </div>
    )
}