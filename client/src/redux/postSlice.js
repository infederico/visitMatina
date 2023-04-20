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
    postPost: (state, action) => {
      return {...state}
    },
    upDtPost: (state, action) => {
      return {...state}
    },
    delPost: (state, action) => {
      return {...state}
    },
  },
});

export const { getAllPosts, getPostDetail, postPost, upDtPost, delPost } = postSlice.actions;
export default postSlice.reducer;
