//import styles from './ReviewThread.module.css';

const ReviewComment = (props) => {

    const { name, email, comment } = props;

    return (
        <>
            <div className="mb-3">
                <label className="form-label">{`Autor: ${name}`}</label>
                <br />
                <label className="form-label">{`Contacto: ${email}`}</label>
                <br />
                <label className="form-label">{comment}</label>
                <br />
            </div>
        </>
    );
};

export default ReviewComment;