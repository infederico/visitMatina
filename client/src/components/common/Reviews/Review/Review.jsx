import styles from './Review.module.css';

const Review = (props) => {

    const { name, date, rating, description, image } = props;

    return (
        <>
            <div clasName="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{date}</h6>
                    <p>{`${rating} estrellas `}</p>
                    <p className="card-text">{description}</p>
                </div>
            </div>

        </>
    );
};

export default Review;