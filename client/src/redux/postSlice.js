import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    allAllPosts: [],
    allPosts: [],
    postDetail: {},
    resUpPost: "",
    resPostPost: "",
    resDel: "",
    current: 0,
  },
  reducers: {

    getAllAllPosts: (state, action) => {
      state.allAllPosts = action.payload;
    },
    getAllPosts: (state, action) => {
      state.allPosts = action.payload;
    },
    getPostDetail: (state, action) => {
      state.postDetail = action.payload;
    },
    clnPostDetail: (state, action) => {
      state.postDetail = {};
    },
    postPost: (state, action) => {
      state.resPostPost = action.payload;
    },
    upDtPost: (state, action) => {
      state.resUpPost = action.payload;
    },
    delPost: (state, action) => {
      state.resDel = action.payload;
    },
    currPage: (state, action) => {
      state.current = action.payload;
    },
    cleanUpPost: (state, action) => {
      state.resUpPost ="";
    },
    cleanPostPost: (state, action) => {
      state.resPostPost ="";
    },
    cleanDel: (state, action) => {
      state.resDel ="";
    }
  },
});

export const { getAllAllPosts, getAllPosts, getPostDetail,clnPostDetail, postPost, upDtPost, delPost, currPage, cleanUpPost, cleanPostPost, cleanDel} = postSlice.actions;
export default postSlice.reducer;
