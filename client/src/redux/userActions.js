import axios from 'axios';
import {
  getUserByEmail,
  postUser,
  gUSer,
  logOutUser,
  allUsers,
  updtUser,
  cleanUpdt,
} from './userSlice';

export const getUser = (user) => {
  return async (dispatch) => {
    try {
      const users = await axios(
        `/users/?email=${user.email}&password=${user.password}`
      );
      return dispatch(getUserByEmail(users.data));
    } catch (error) {
      alert('Error al obtener usuario:', error.message);
    }
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    try {
      let post = await axios.post('/users/', user);
      if (post) {
        alert('Registro exitoso.');
      }
      return dispatch(postUser(post));
    } catch (error) {
      alert(error.message);
    }
  };
};

export const authGoogle = (user) => {
  return async (dispatch) => {
    let googlePost = await axios.post('/users/', user);
    return dispatch(gUSer(googlePost.data[0]));
  };
};

export const logOut = () => {
  return async (dispatch) => {
    return dispatch(logOutUser());
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    let get = await axios('/users/');
    return dispatch(allUsers(get.data));
  };
};

export const updateUsers = (inputs) => {
  return async (dispatch) => {
    let put = await axios.put(`/users`, inputs); // crear otra ruta por body
    console.log(put.data);
    return dispatch(updtUser(put.data));
    
  };
};

export const clnUpDt = () => {
  return cleanUpdt();
};
