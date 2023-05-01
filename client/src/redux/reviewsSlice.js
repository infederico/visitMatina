import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    value: [],
    showCommentPanel: false,
    selectedReview: undefined,
    backendError: '',
    successMessageReview: false,
    successMessageComment: false,
    resUpdtReview: "",
  },
  reducers: {
    getAllApprovedReviews: (state, action) => {
      state.value = action.payload;
    },
    setShowCommentPanel: (state, action) => {
      state.showCommentPanel = action.payload;
    },
    setSelectedReview: (state, action) => {
      state.selectedReview = action.payload;
    },
    setBackendError: (state, action) => {
      state.backendError = action.payload;
    },
    postNewReview: (state, action) => {
      state.successMessageReview = action.payload;
    },
    cleanSuccessMessageReview: (state, action) => {
      state.successMessageReview = false;
    },
    postNewReviewComment: (state, action) => {
      state.successMessageComment = action.payload;
    },
    cleanSuccessMessageComment: (state, action) => {
      state.successMessageComment = false;
    },
    deleteR: (state, action) => {
      state.resUpdtReview = action.payload;
    },
    cleanUpdateReview: (state, action) => {
      
      if(state.resUpdtReview !== ""){
        //window.alert(state.resUpdtReview)
      }
      state.resUpdtReview = "";
    },
    },
});

export const {
  getAllApprovedReviews,
  setShowCommentPanel,
  setSelectedReview,
  setBackendError,
  postNewReview,
  cleanSuccessMessageReview,
  postNewReviewComment,
  cleanSuccessMessageComment,
  deleteR,
  cleanUpdateReview,
} = reviewsSlice.actions;
export default reviewsSlice.reducer;
