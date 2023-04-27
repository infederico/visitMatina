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
      if(state.resUpPost.success !== undefined){
        window.alert(state.resUpPost.success);
      }
      
      state.resUpPost ="";
    },
    cleanPostPost: (state, action) => {
      if(state.resPostPost.success !== undefined){
        window.alert(state.resPostPost.success);
      }
      
      state.resPostPost ="";
    },
    cleanDel: (state, action) => {
      if(state.resDel.success !== undefined){
        window.alert(state.resDel.success);
      }
      
      state.resDel ="";
    }
  },
});

export const { getAllAllPosts, getAllPosts, getPostDetail,clnPostDetail, postPost, upDtPost, delPost, currPage, cleanUpPost, cleanPostPost, cleanDel} = postSlice.actions;
export default postSlice.reducer;
