import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setShowCommentPanel, cleanSuccessMessageComment, setBackendError } from '../../../../redux/reviewsSlice';
import { postReviewComment } from '../../../../redux/reviewsActions';

import validation from './validation';

import ReviewComment from './ReviewComment/ReviewComment';

import styles from './ReviewThread.module.css';

const ReviewThread = () => {

    // global states
    const reviews = useSelector(state => state.reviews.value);
    const selectedReview = useSelector(state => state.reviews.selectedReview);
    const successMessageComment = useSelector(state => state.reviews.successMessageComment);
    const backendError = useSelector(state => state.reviews.backendError);
    //const loggedUser = useSelector(state => state.user); // aca tomo del estado global la data del user que esta loggeado
    const loggedUser = {
        id_user: 2,
        image: '',
        name: 'Ivan Federico',
        email: 'inf@gmail.com',
        password: 'ash55'
    };

    // local states
    const [ newComment, setNewComment ] = useState({
        user_id: loggedUser.id_user,
        parent_id: selectedReview,
        description: "",
        approved: true
    });
    const [ commentsToRender, setCommentsToRender ] = useState([]);
    const [ submitted, setSubmitted ] = useState(false);
    const [ errors, setErrors ] = useState({});
    const [ incompleteFormAlert, setIncompleteFormAlert ] = useState(false);

    // hooks  
    const dispatch =  useDispatch();

    useEffect( () => {
        let filteredByReviewId = reviews.filter( (review) => review.review_id === selectedReview);
        let comments = filteredByReviewId.at(0).respuestas;
        setCommentsToRender(comments);
    }, [reviews, selectedReview, successMessageComment]);

    useEffect( () => {
        setNewComment({
            ...newComment,
            parent_id: selectedReview
        });
    }, [selectedReview]);
 
    // handlers 
    const handleClick = () => {
        dispatch(setShowCommentPanel(false));
    };

    const handleInputChange = (event) => {
        let { name, value } = event.target;
        setNewComment({
            ...newComment,
            [name]: value
        });
        if (submitted) {
            let err = validation({
                ...newComment,
                [name]: value
            });
            setErrors(err); 
        };
        if (successMessageComment) {
            dispatch(cleanSuccessMessageComment());
        }
        if (backendError) {
            dispatch(setBackendError(false));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //set submitted state true to allow errors rendering after first submit attemp
        setSubmitted(true);
        dispatch(cleanSuccessMessageComment);
        dispatch(setBackendError(false));
        setIncompleteFormAlert(false);

        // pass to validation f()  - errors will be logged on errors local state
        let err = validation(newComment);
        setErrors(err); 

        if ((Object.keys(err).length) !== 0) {
            setIncompleteFormAlert(true);
            return;
        };
        // if there is no errors on the process of validation
        if (Object.keys(err).length === 0) {
            dispatch(postReviewComment(newComment));

            // agrego al array renderizado el nuevo comment para que el user vea el comnetario que acaba de postear
            //let updatedComments = [...commentsToRender, newComment ];
            //setCommentsToRender(updatedComments);

            //clean local state after sending all data
            setNewComment({
                user_id: loggedUser.id_user,
                parent_id: selectedReview,
                description: "",
                approved: true
            });
            // clean error log local state
            setErrors({});
            //reset the local state once the new user was created successfully to permit a good user experience and dont show errors until first submit attemp in the next user load
            setSubmitted(false);
            return;
        }

       

        setNewComment({
            user_id: loggedUser.id_user,
            parent_id: selectedReview,
            description: "",
            approved: true
        });
    };

    return (
        <>
            <hr />
            <button onClick={handleClick}>  x  </button>
            <span>{`     Hilo de la reseña nro: ${selectedReview}`}</span>
            <br />
            <br />
            {
                commentsToRender.map( (comment) => {
                    //if (comment.approved) {
                        return <ReviewComment
                            key={comment.review_id}
                            commentId={comment.review_id}
                            name={comment.user.name}
                            email={comment.user.email}
                            comment={comment.description}
                        />
                   // }
                })
            }
            <br />
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Déjanos tu comentario...</label>
                    <textarea
                        name="description"
                        className="form-control"
                        rows="3"
                        placeholder="Aquí nos puedes escribir tu comentario sobre la reseña seleccionada"
                        onChange={handleInputChange}
                        value={newComment.description}
                    ></textarea>
                    {errors.description2 && <span className={styles.errors} >{errors.description2}</span>}
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" type="submit"><span>Enviar</span></button>
                </div>
                { incompleteFormAlert && <div class="alert alert-warning" role="alert">Por favor escribe un comentario</div> }
                { successMessageComment && <div class="alert alert-success" role="alert">Tu comentario se ha registrado con éxito</div> }
                { backendError && <div class="alert alert-warning" role="alert">{`No se ha registrado tu comentario. Server Error ${backendError}`}</div> }
            </form>
            <hr />
        </>
    );
};

export default ReviewThread;