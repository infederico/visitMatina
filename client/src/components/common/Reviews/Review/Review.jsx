import styles from './Review.module.css';

const Review = (props) => {

    const { name, date, rating, description } = props;

    return (
        <div className={styles.reviewCard}>
            <div>
                <p>{name}</p>
                <p>{date}</p>
            </div>
            <div>
                <p>{rating}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;