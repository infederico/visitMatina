import axios from 'axios';
import {
  getAllApprovedReviews,
  setBackendError,
  postNewReview,
  postNewReviewComment,
  deleteR,
  cleanUpdateReview,
} from './reviewsSlice';

export const getAllApprovedReviewsByShopId = (shopId) => (dispatch) => {
  axios(`/reviews/shop/${shopId}`)
    .then((response) => response.data.result)
    .then((approvedReviews) => dispatch(getAllApprovedReviews(approvedReviews)))
    .catch((err) => dispatch(setBackendError(err.message)));
};

export const postReview = (newReview) => (dispatch) => {
  axios
    .post(`/reviews`, newReview)
    .then((response) => dispatch(postNewReview(response.data.success)))
    .catch((err) => dispatch(setBackendError(err.message)));
};

export const postReviewComment = (newComment) => (dispatch) => {
  axios
    .post(`/reviews/comment`, newComment)
    .then((response) => dispatch(postNewReviewComment(response.data.success)))
    .catch((err) => dispatch(setBackendError(err.message)));
};

export const deleteReview = (input) => {
  return async (dispatch) => {
    try {
      const product = await axios.delete(`/reviews/${input}`);
      return dispatch(deleteR(product.data.success));
    } catch (error) {
      return (error.response.data.error);
    }
  };
};

export const clnResUpdtReview = () => {
  return(cleanUpdateReview());
};
