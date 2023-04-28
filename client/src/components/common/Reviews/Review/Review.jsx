import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { setShowCommentPanel, setSelectedReview, cleanSuccessMessageComment, setBackendError, cleanSuccessMessageReview } from '../../../../redux/reviewsSlice';

import stars0 from '../../../../assets/images/review-stars/0stars.png';
import stars1 from '../../../../assets/images/review-stars/1stars.png';
import stars2 from '../../../../assets/images/review-stars/2stars.png';
import stars3 from '../../../../assets/images/review-stars/3stars.png';
import stars4 from '../../../../assets/images/review-stars/4stars.png';
import stars5 from '../../../../assets/images/review-stars/5stars.png';
import iconWriteComment from '../../../../assets/images/comments-icons/comment.png';
import iconReadComments from '../../../../assets/images/comments-icons/read-comments.png';

import styles from './Review.module.css';

const Review = (props) => {

    const { reviewId, name, date, rating, description, image } = props

    const selectedReview = useSelector(state => state.reviews.selectedReview)
    const showCommentPanel = useSelector(state => state.reviews.showCommentPanel)

    // hooks 
    const dispatch = useDispatch()

    // handlers
    const handleWriteComment = () => {
        dispatch(setShowCommentPanel(true))
        dispatch(setSelectedReview(reviewId))
        dispatch(cleanSuccessMessageComment())
        dispatch(cleanSuccessMessageReview())
        dispatch(setBackendError(false))
    };

    return (
        <>
            <div className={styles.reviewCards} onClick={handleWriteComment} >

                <div className={styles.cardHeader}>
                    <div className={styles.photo}>
                        <img src={image} alt={name} className={styles.photoAvatar} />
                    </div>
                    <div className={styles.userData}>
                        <div><span>{date}</span></div>
                        <div><h6>{name}</h6></div>
                        <div className={styles.starWrapper}>
                            {
                                (rating === 0 || rating === 0.5) && <img src={stars0} alt='0stars' />
                            }
                            {
                                (rating === 1 || rating === 1.5) && <img src={stars1} alt='1stars' />
                            }
                            {
                                (rating === 2 || rating === 2.5) && <img src={stars2} alt='2stars' />
                            }
                            {
                                (rating === 3 || rating === 3.5) && <img src={stars3} alt='3stars' />
                            }
                            {
                                (rating === 4 || rating === 4.5) && <img src={stars4} alt='4stars' />
                            }
                            {
                                rating === 5 && <img src={stars5} alt='5stars' />
                            }
                        </div>   
                    </div>   
                </div>
                    
                <div className={styles.cardBody}>
                    <p className={styles.description}>{description}</p>
                </div>
        
                { !(selectedReview === reviewId) &&    
                    <div className={styles.cardFooter} >
                        <img src={iconReadComments} alt='read-comments' onClick={handleWriteComment} className={styles.cardIcon} />
                        <label onClick={handleWriteComment} className={styles.cardIcon}>Leer hilo</label>
                        <img src={iconWriteComment} alt='write-comment' onClick={handleWriteComment} className={styles.cardIcon} />  
                        <label onClick={handleWriteComment} className={styles.cardIcon}>Comentar</label> 
                    </div>
                }
            </div>
        </>
    );
};

export default Review;