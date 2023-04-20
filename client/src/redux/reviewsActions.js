import axios from "axios";
import { getAllApprovedReviews, addBackendError } from "./reviewsSlice";

export const getAllApprovedReviewsByShopId = (shopId) => (dispatch) => {
    axios(`http://localhost:3001/reviews/approved/${shopId}`)
    .then(response => response.data)
    .then(approvedReviews => dispatch(getAllApprovedReviews(approvedReviews)))
    .catch(err => dispatch(addBackendError(err.message)));
};