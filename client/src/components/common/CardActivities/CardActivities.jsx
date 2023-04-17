const CardActivities = (props) => {

    let { name, image, description, price } = props;

    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="card" style={{width: "18rem"}}>
                    <img src={image} className="card-img-top" alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">{`${price} - Reserva tu lugar!`}</a>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default CardActivities;