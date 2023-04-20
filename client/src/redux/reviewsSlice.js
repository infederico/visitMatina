import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    value: [],
    showCommentPanel: false,
    selectedReview: undefined,
    backendError: '',
    successMessage: false
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
    addBackendError: (state, action) => {
      state.backendError = action.payload;
    },
    postNewReview: (state, action) => {
      state.successMessage = true;
    },
    cleanSuccessMessage: (state, action) => {
      state.successMessage = false;
    },
  },
});

export const { getAllApprovedReviews, setShowCommentPanel, setSelectedReview, addBackendError, postNewReview, cleanSuccessMessage } = reviewsSlice.actions;
export default reviewsSlice.reducer;