const CardGallery = (props) => {
    return(
        <img src={props.image} alt={`Fotos de ${props.shop}`}/>
    )
}

export default CardGallery