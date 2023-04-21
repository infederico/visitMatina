import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    allPosts: [],
    postDetail: {},
    current:0
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
    currPage: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { getAllPosts, getPostDetail, postPost, upDtPost, delPost, currPage } = postSlice.actions;
export default postSlice.reducer;
