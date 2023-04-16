const Carousel = () =>{
    return(
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://sfo2.digitaloceanspaces.com/elpaiscr/2021/06/Matina-de-Limon..jpeg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/kcBQlmcNuJQ/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.diarioextra.com/files/Dnews/images/detail/486531_ninodesapareceenrio.jpg" className="d-block w-100" alt="..."/>
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
    )
}

export default Carousel;