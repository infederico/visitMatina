import axios from "axios";
import { getAllApprovedReviews, addBackendError, postNewReview } from "./reviewsSlice";

export const getAllApprovedReviewsByShopId = (shopId) => (dispatch) => {
    axios(`/reviews/shop/${shopId}`)
    .then(response => response.data.result)
    .then(approvedReviews => dispatch(getAllApprovedReviews(approvedReviews)))
    .catch(err => dispatch(addBackendError(err.message)));
};

export const postReview = (newReview) => (dispatch) => {
    axios.post(`/reviews`, newReview)
    .then(response => dispatch(postNewReview(response)))
    .catch(err => dispatch(addBackendError(err.message)));
};
