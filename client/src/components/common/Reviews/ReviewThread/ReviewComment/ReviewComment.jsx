import styles from './ReviewComment.module.css';

const ReviewComment = (props) => {

    const { name, email, comment, createdAt } = props
    const date = formatDate(createdAt)

    function formatDate (dateString) {
        const date = new Date(dateString)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear().toString().slice(-2)
        return `${day}/${month}/${year}`
    };

    return (
        <div className={styles.comment}>
            <span>{`${date} - ${name} comentó:`}</span> 
            <p>{comment}</p>
            <br />

        </div>
    );
};

export default ReviewComment;