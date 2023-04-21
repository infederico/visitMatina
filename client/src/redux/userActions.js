import axios from 'axios'
import { getUserById, postUser } from './userSlice'

export const getUser = (user) => {
  console.log(user)
  return async (dispatch) => {
    const users = await axios(
      `/users/?email=${user.email}&password=user.password${user.password}`
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
