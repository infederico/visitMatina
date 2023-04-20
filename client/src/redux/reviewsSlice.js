import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    value: [],
    showCommentPanel: false,
    selectedReview: undefined,
    backendError: '',
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
  },
});

export const { getAllApprovedReviews, setShowCommentPanel, setSelectedReview, addBackendError } = reviewsSlice.actions;
export default reviewsSlice.reducer;