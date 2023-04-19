import axios from 'axios'
import { getAllUsers } from './userSlice'

export const getUsers = () => {
  return async (dispatch) => {
    const users = await axios('http://localhost:3001/api/users/')
    console.log(users)
    dispatch(getAllUsers(users.data))
  }
}
