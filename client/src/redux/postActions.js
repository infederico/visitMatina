import axios from "axios";
import { getAllAllPosts, getAllPosts, getPostDetail, clnPostDetail, postPost, upDtPost, delPost, currPage, cleanUpPost, cleanPostPost, cleanDel} from "./postSlice";

export const getAllPostsSF = () => async (dispatch) => {
  try {
    const posts = await axios("/post/all");
    dispatch(getAllAllPosts(posts.data));
  } catch (error) {
    //window.alert(error.response.data.error)
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const posts = await axios("/post");
    dispatch(getAllPosts(posts.data));
  } catch (error) {
    //window.alert(error.response.data.error)
  }
};

export const getPostId = (id) => async (dispatch) => {
  try {
   const posts = await axios(`/post/${id}`);
    dispatch(getPostDetail(posts.data)); 
  } catch (error) {
    window.alert(error.response.data.error)
  }
};

export const clnDetail = () => {
  return (clnPostDetail());
}

export const addPost = (post) => async (dispatch) => {
  try {
   const posts = await axios.post(`/post`, post);
    return dispatch(postPost(posts.data.success)); 
  } catch (error) {
    return (error.response.data.error)
  }
};

export const updatePost = (post) => async (dispatch) => {
  try {
    console.log(post);
   const posts = await axios.put(`/post`, post);
    return dispatch(upDtPost(posts.data.success));
    
  } catch (error) {
    return (error.response.data.error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
   const posts = await axios.delete(`/post?id_post=${id}`);
    return dispatch(delPost(posts.data.success)); 
  } catch (error) {
    return (error.response.data.error)
  }
};

export const clnUpPost = () => {
  return (cleanUpPost());
}

export const clnPostPost = () => {
  return (cleanPostPost());
}

export const clnDel = () => {
  return (cleanDel());
}


export const cPage = (value) => {
  return (currPage(value));
}
