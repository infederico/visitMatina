import axios from "axios";
import { getAllPosts, getPostDetail } from "./postSlice";

export const getPosts = () => async (dispatch) => {
  const posts = await axios("http://localhost:3001/api/post");
    dispatch(getAllPosts(posts.data));
};

export const getPostId = (id) => async (dispatch) => {
  const posts = await axios(`http://localhost:3001/api/post/${id}`);
    dispatch(getPostDetail(posts.data));
};