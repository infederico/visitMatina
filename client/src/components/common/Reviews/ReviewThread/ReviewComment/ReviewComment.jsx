//import styles from './ReviewThread.module.css';

const ReviewComment = (props) => {

    const { reviewId, commentId, name, email, comment } = props;


    return (
        <>
            <span>{`Comentario nro: ${commentId}`}</span>
            <br />
            <span>{`Autor: ${name}`}</span>
            <br />
            <span>{`Contacto: ${email}`}</span>
            <br />
            <span>{comment}</span>
            <br />
            <br />
        </>
    );
};

export default ReviewComment;