import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setShowCommentPanel, cleanSuccessMessageComment, setBackendError } from '../../../../redux/reviewsSlice';
import { postReviewComment, getAllApprovedReviewsByShopId } from '../../../../redux/reviewsActions';

import useLocalStorage from '../../../localStorage/useLocalStorage'
import validation from './validation';

import ReviewComment from './ReviewComment/ReviewComment';

import styles from './ReviewThread.module.css';

const ReviewThread = (props) => {

    // global states
    const reviews = useSelector(state => state.reviews.value);
    const selectedReview = useSelector(state => state.reviews.selectedReview);
    const successMessageComment = useSelector(state => state.reviews.successMessageComment);
    const backendError = useSelector(state => state.reviews.backendError);
    const loggedUser = useSelector(state => state.user.user); // aca tomo del estado global la data del user que esta loggeado

    // local states
    const [ newComment, setNewComment ] = useState({
        user_id: loggedUser.id_user,
        parent_id: selectedReview,
        description: "",
        approved: true
    });
    const [commentLocalStorage, setCommentLocalStorage] = useLocalStorage(
        'commentLocalStorage',
        ''
    );
    const [ commentsToRender, setCommentsToRender ] = useState([]);
    const [ submitted, setSubmitted ] = useState(false);
    const [ errors, setErrors ] = useState({});
    const [ incompleteFormAlert, setIncompleteFormAlert ] = useState(false);

    // hooks  
    const dispatch =  useDispatch();
    const navigate = useNavigate();

    useEffect( () => {
        let filteredByReviewId = reviews.filter( (review) => review.review_id === selectedReview)
        let comments = []
        let moreRecentFirst = []
        if (filteredByReviewId.at(0).active) {
            comments = filteredByReviewId.at(0).respuestas
            moreRecentFirst = [...comments].reverse()
        }
        setCommentsToRender(moreRecentFirst)
    }, [reviews, selectedReview, successMessageComment]);

    useEffect( () => {
        setNewComment({
            ...newComment,
            parent_id: selectedReview
        });
    }, [selectedReview]);

    useEffect(() => {
        if (successMessageComment) {
          dispatch(getAllApprovedReviewsByShopId(props.shopId))
        }
    }, [successMessageComment])

    useEffect(() => {

        setNewComment((prevState) => ({
          ...prevState,
          description: commentLocalStorage.description,
        }))

        return () => {
            setTimeout( () => {
              setCommentLocalStorage({
                ...commentLocalStorage,
                description: '',
              });
              //console.log('holi soy el time out');
            }, 15 * 60 * 1000);
          }

      }, [])
 
    // handlers 
    const handleClose = () => {
        dispatch(setShowCommentPanel(false));
    };

    const handleInputChange = (event) => {
        if (!loggedUser.access) {
            window.alert('Debes estar registrado e iniciar sesión para poder postear una reseña');
            navigate('/login');
        };
        setIncompleteFormAlert(false);

        let { name, value } = event.target;

        setNewComment({
            ...newComment,
            [name]: value
        });
        setCommentLocalStorage({
            ...commentLocalStorage,
            [name]: value,
        })

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
        dispatch(cleanSuccessMessageComment());
        dispatch(setBackendError(false));
        setIncompleteFormAlert(false);
        //set submitted state true to allow errors rendering after first submit attemp
        setSubmitted(true);
        

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
            setIncompleteFormAlert(false);
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
            setCommentLocalStorage({
                user_id: loggedUser.id_user,
                parent_id: selectedReview,
                description: "",
                approved: true
            });
            return;
        }
        setNewComment({
            user_id: loggedUser.id_user,
            parent_id: selectedReview,
            description: "",
            approved: true
        });
    };

    // helpers
    let author = reviews.filter(review => review.review_id === selectedReview).at(0).user.name;
    let active = reviews.filter(review => review.review_id === selectedReview).at(0).active;
    return (
        <div className={styles.threadContainer}>
            { active &&
            <div className={styles.commentForm}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">{`Comenta la reseña de ${author}`}</label>
                        <textarea
                            name="description"
                            className="form-control"
                            rows="3"
                            placeholder="Tu comentario..."
                            onChange={handleInputChange}
                            value={newComment.description}
                        ></textarea>
                        {errors.description2 && <span className={styles.errors} >{errors.description2}</span>}
                        { incompleteFormAlert && <div className="alert alert-warning d-flex align-items-center" role="alert" style={{ height: "12px" }}>Por favor escribe un comentario</div> }
                        { successMessageComment && <div className="alert alert-success d-flex align-items-center" role="alert" style={{ height: "12px" }}>Tu comentario se ha registrado con éxito</div> }
                        { backendError && <div className="alert alert-warning d-flex align-items-center" role="alert" style={{ height: "12px" }}>{`No se ha registrado tu comentario. Server Error ${backendError}`}</div> }
                    </div>
                    <div>
                        <button  className={styles.submitButton} type="submit">Enviar</button>
                    </div>
                </form>
            </div>
            }

            <div className={styles.commentPanel}>
                {
                    commentsToRender.length > 0 ?
                    commentsToRender.map( (comment) => {
                        if (comment.approved) {
                            return <ReviewComment
                                key={comment.review_id}
                                commentId={comment.review_id}
                                parent_id={comment.parent_id}
                                name={comment.user.name}
                                email={comment.user.email}
                                createdAt={comment.createdAt}
                                comment={comment.description}
                            />
                        };
                    })
                    :
                    <p>Sé el primero en comentar esta reseña...</p>
                }
            </div>

            <div className={styles.closeButton}>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
            </div>
        </div>
    );
};

export default ReviewThread;