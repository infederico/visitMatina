
//import styles from './ReviewThread.module.css';

const ReviewComment = (props) => {

    const { name, email, comment, createdAt } = props;
    const date = formatDate(createdAt);

    function formatDate (dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().slice(-2);
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <div className="mb-3">
                <label className="form-label">{`${name}  -`}</label>
                <label className="form-label">{`-  ${date}`}</label>
                <br />
                <p className="form-label">{comment}</p>
                <br />
            </div>
        </>
    );
};

export default ReviewComment;