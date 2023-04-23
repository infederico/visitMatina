import style from "./CardProduct2.module.css"

const CardProduct2 = ({image, name, description, id, idModal}) => {
    return(
        /* Card */
        <div className={ style.customCard } >
            <div className={`card text-bg-dark card-container ${style.container}`} /* style={{width: "200%"}} */>
                <img src={image} className={`card-img ${style.image}` } alt={name}/>
                <div className={ `card-img-overlay ${style.customOverlay}` }>
                    <h4 className={`card-title ${style.text}`}>{name}</h4>
                    <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target={`#${idModal}`}> + Detalles</button> 
                </div>
            </div>

        { /* modal */ }
        <div className="modal fade" id={`${idModal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{name}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {description}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CardProduct2;