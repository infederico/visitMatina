import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setShowCommentPanel } from '../../../../redux/reviewsSlice';

import ReviewComment from './ReviewComment/ReviewComment';

import styles from './ReviewThread.module.css';

const ReviewThread = (props) => {

    const { reviewId } = props

    const [ newComment, setNewComment ] = useState({
        name: "",
        email: "",
        comment: "",
        approved: true
    });

    const reviews = useSelector(state => state.reviews.value);

    const commentsToRender = reviews[reviewId-1].comments;

    const dispatch =  useDispatch();

    useEffect( () => {
     
    }, []);

    // handlers 
    const handleClick = () => {
        dispatch(setShowCommentPanel(false));
    };

    const handleInputChange = (event) => {

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('nuevo comentario posteado');
    };

    return (
        <>
            <hr />
            <button onClick={handleClick}>  x  </button>
            <span>{`     holi soy el hilo del review ${reviewId}`}</span>
            <br />
            <br />
            {
                commentsToRender.map( (comment) => {
                    if (comment.approved) {
                        return <ReviewComment
                            key={comment.commentId}
                            commentId={comment.commentId}
                            name={comment.name}
                            email={comment.email}
                            comment={comment.comment}
                        />
                    }
                })
            }
            <br />
            <form onSubmit={handleSubmit}>
                <span>Deja tu comentario...</span>
                <br />
                <br />

                <div className="mb-3">
                    <input className="form-control" name='name' type="text" placeholder="Nombre" aria-label="default input example" onChange={handleInputChange} value={newComment.name} />
                </div> 
              
                <div className="mb-3">
                    <textarea type="textarea" name="comment" className="form-control" rows="4" placeholder="Comenta" onChange={handleInputChange}  value={newComment.comment}></textarea>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" type="submit"><span>Enviar</span></button>
                </div>
            </form>
            <hr />
        </>
    );
};

export default ReviewThread;