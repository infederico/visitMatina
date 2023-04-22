import axios from 'axios'
import { getUserById, postUser, gUSer, logOutUser } from './userSlice'

export const getUser = (user) => {
  return async (dispatch) => {
    const users = await axios(
      `/users/?email=${user.email}&password=${user.password}`
    )
    return dispatch(getUserById(users.data))
  }
}

export const addUser = (user) => {
  return async (dispatch) => {
    let post = await axios.post('/users/', user)
    return dispatch(postUser(post))
  }
}

export const authGoogle = (user) => {
  return async (dispatch) => {
    let googlePost = await axios.post('/users/', user)
    return dispatch(gUSer(googlePost.data[0]))
  }
}

export const logOut = () => {
  return async (dispatch) => {
    return dispatch(logOutUser())
  }
}
