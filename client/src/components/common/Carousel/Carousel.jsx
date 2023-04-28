import styles from './Carousel.module.css';

const Carousel = () =>{

    return(

        <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">


            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://fondosmil.com/fondo/74416.jpg" className="d-block w-100" alt="..."/>
                    <div className={`d-none d-lg-block  carousel-caption ${styles.customCaption}`}>
                        <h4>Hola mundo</h4>
                        <p>Somos un grupo de emprendedores turísticos que nos aliamos para presentarte una cara de Matina que no has visto: Una tierra verde, abundante, productiva y con una belleza escénica impresionante.</p>                     
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/kcBQlmcNuJQ/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                    <div className={`d-none d-lg-block carousel-caption ${styles.customCaption} `}>
                        <h4>Lorem</h4>
                        <p>Como familias buscamos aportar al desarrollo local promoviendo un turismo responsable y sostenible, valorando y respetando la cultura, la historia y la biodiversidad.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.diarioextra.com/files/Dnews/images/detail/486531_ninodesapareceenrio.jpg" className="d-block w-100" alt="..."/>
                    <div className={`d-none d-lg-block  carousel-caption ${styles.customCaption}`}>
                        <h4>Aenean sodales aliquet ante</h4>
                        <p>Si buscas una experiencia auténtica, personalizada y sostenible en el cantón de Matina, ¡estamos listos para recibirte! Contáctanos y permítenos diseñar una experiencia inolvidable que se adapte a tus intereses y necesidades. ¡Te esperamos en nuestra hermosa región!</p>                    
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