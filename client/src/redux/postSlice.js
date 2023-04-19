import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    allPosts: [],
    postDetail: {}
  },
  reducers: {
    getAllPosts: (state, action) => {
      state.allPosts = action.payload;
    },
    getPostDetail: (state, action) => {
      state.postDetail = action.payload;
    },
  },
});

export const { getAllPosts, getPostDetail } = postSlice.actions;
export default postSlice.reducer;
