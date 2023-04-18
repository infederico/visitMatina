import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    value: [],
    showCommentPanel: false,
    selectedReview: undefined,
  },
  reducers: {
    getReviewsById: (state, action) => {
      //state.value = action.payload;
      state.value = require('../components/common/Reviews/mock_res_back.json').response;
    },
    setShowCommentPanel: (state, action) => {
      state.showCommentPanel = action.payload;
    },
    setSelectedReview: (state, action) => {
      state.selectedReview = action.payload;
    },
  },
});

export const { getReviewsById, setShowCommentPanel, setSelectedReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;