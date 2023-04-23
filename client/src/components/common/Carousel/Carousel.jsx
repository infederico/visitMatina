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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia pharetra cursus. Cras nec est quam. Sed at orci nec dolor egestas faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tempor sapien. Donec eget nibh in tortor fermentum scelerisque. Aenean sodales aliquet ante, vel hendrerit nisi vestibulum eget. Nullam lacinia mauris a est sodales semper. Nam et lobortis velit. Duis nisi nisi, mattis nec libero eget, tincidunt iaculis felis. Phasellus auctor, turpis in tempus porta, elit justo facilisis nulla, et fringilla nisl elit sed arcu.
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/kcBQlmcNuJQ/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                    <div className={`d-none d-lg-block carousel-caption ${styles.customCaption} `}>
                        <h4>Lorem</h4>
                        Sed lacinia pharetra cursus. Cras nec est quam. Sed at orci nec dolor egestas faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tempor sapien. Donec eget nibh in tortor fermentum scelerisque
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.diarioextra.com/files/Dnews/images/detail/486531_ninodesapareceenrio.jpg" className="d-block w-100" alt="..."/>
                    <div className={`d-none d-lg-block  carousel-caption ${styles.customCaption}`}>
                        <h4>Aenean sodales aliquet ante</h4>
                        Vel hendrerit nisi vestibulum eget. Nullam lacinia mauris a est sodales semper. Nam et lobortis velit. Duis nisi nisi, mattis nec libero eget, tincidunt iaculis felis. Phasellus auctor, turpis in tempus porta, elit justo facilisis nulla, et fringilla nisl elit sed arcu.
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

        <div className="d-none d-sm-block d-xs-block d-lg-none mt-4 ">
            <h4>Lorem</h4>
            <p style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia pharetra cursus. Cras nec est quam. Sed at orci nec dolor egestas faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tempor sapien. Donec eget nibh in tortor fermentum scelerisque. Aenean sodales aliquet ante, vel hendrerit nisi vestibulum eget. Nullam lacinia mauris a est sodales semper. Nam et lobortis velit. Duis nisi nisi, mattis nec libero eget, tincidunt iaculis felis. Phasellus auctor, turpis in tempus porta, elit justo facilisis nulla, et fringilla nisl elit sed arcu.
            </p>
        </div>
        </>
    )
}

export default Carousel;