import axios from "axios";
import { getAllReviews, addBackendError } from "./reviewsSlice";

export const getReviews = (adminId) => (dispatch) => {
    axios(`http://localhost:3001/reviews/${adminId}`)
    .then(response => response.data.filter(review => review.approved))
    .then(reviews => dispatch(getAllReviews(reviews)))
    .catch(err => dispatch(addBackendError(err.message)))
};