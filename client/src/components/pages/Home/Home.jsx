import styles from './Home.module.css'

import Carousel from '../../common/Carousel/Carousel'

export default function Home() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.centered}>
          <div className={styles.content}>
            <h1>Bienvenido</h1>
            <h3>¡Da un vistazo por lo que te ofrecemos!</h3>
          </div>
        </div>
      </div>

      <iframe
        src='https://player.cloudinary.com/embed/?public_id=10000000_933032457273458_3142346642377468477_n_1_x6xujo&cloud_name=dfnw2l08x&player[muted]=true&player[autoplay]=true&player[loop]=true'
        width='640'
        height='360'
        allow='autoplay fullscreen encrypted-media picture-in-picture'
        allowfullscreen
        // frameborder='0'
        title='visit_matina_reel'
      ></iframe>
    </>
  )
}
