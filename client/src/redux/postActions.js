import axios from "axios";
import { getAllPosts, getPostDetail, postPost, upDtPost, delPost} from "./postSlice";

export const getPosts = () => async (dispatch) => {
  try {
    const posts = await axios("/post");
    dispatch(getAllPosts(posts.data));console.log(posts.data)
  } catch (error) {
    window.alert(error.posts.data)
  }
};

export const getPostId = (id) => async (dispatch) => {
  try {
   const posts = await axios(`/post/${id}`);
    dispatch(getPostDetail(posts.data)); 
  } catch (error) {
    window.alert(error.posts.data)
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
   const posts = await axios.post(`/post`, post);
    dispatch(postPost(posts.data)); 
  } catch (error) {
    window.alert(error.posts.data)
  }
};

export const updatePost = (post) => async (dispatch) => {
  try {
   const posts = await axios.put(`/post`, post);
    dispatch(upDtPost(posts.data)); 
  } catch (error) {
    window.alert(error.posts.data)
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
   const posts = await axios.delete(`/post?id_post=${id}`);
    dispatch(delPost(posts.data)); 
  } catch (error) {
    window.alert(error.posts.data)
  }
};
