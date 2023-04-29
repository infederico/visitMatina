import styles from './Carousel.module.css';

const Carousel = () =>{

    return(

        <>
        <div id="carouselExampleFade" className={`carousel slide carousel-fade h-50 ${styles.container}`}>


            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682718864/carousel5_brudp0.jpg" className={`d-block w-100 ${styles.img}`} alt="..."/>
                    <div className={`d-none d-lg-block  carousel-caption ${styles.customCaption}`}>
                        {/* <h4 className={styles.title}>¡Hola a todos!</h4> */}
                        <p className={styles.body}>Somos un grupo de emprendedores turísticos que nos aliamos para presentarte una cara de Matina que no has visto: Una tierra verde, abundante, productiva y con una belleza escénica impresionante.</p>                     
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682718080/carousel2_vn2laz.jpg" className={`d-block w-100 ${styles.img}`} alt="..."/>
                    <div className={`d-none d-lg-block carousel-caption ${styles.customCaption} `}>
                        <p className={styles.body}>Como familias buscamos aportar al desarrollo local promoviendo un turismo responsable y sostenible, valorando y respetando la cultura, la historia y la biodiversidad.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682717908/carousel1_ctvqae.jpg" className={`d-block w-100 ${styles.img}`} alt="..."/>
                    <div className={`d-none d-lg-block  carousel-caption ${styles.customCaption}`}>
                        <p className={styles.body}>Si buscas una experiencia auténtica, personalizada y sostenible en el cantón de Matina, ¡estamos listos para recibirte! Contáctanos y permítenos diseñar una experiencia inolvidable que se adapte a tus intereses y necesidades. ¡Te esperamos en nuestra hermosa región!</p>                    
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>


        </>
    )
}

export default Carousel;