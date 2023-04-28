const CardGallery = (props) => {
    return(
        <img src={props.image} alt={`Fotos de ${props.name}`}/>
    )
}

export default CardGallery;