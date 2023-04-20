import axios from "axios";
import { getAllApprovedReviews, addBackendError, postNewReview } from "./reviewsSlice";

export const getAllApprovedReviewsByShopId = (shopId) => (dispatch) => {
    axios(`http://localhost:3001/api/reviews/shop/${shopId}`)
    .then(response => response.data.result)
    .then(approvedReviews => dispatch(getAllApprovedReviews(approvedReviews)))
    .catch(err => dispatch(addBackendError(err.message)));
};

export const postReview = (newReview) => (dispatch) => {
    axios.post(`http://localhost:3001/api/reviews`, newReview)
    .then(response => dispatch(postNewReview(response)))
    .catch(err => dispatch(addBackendError(err.message)));
};
