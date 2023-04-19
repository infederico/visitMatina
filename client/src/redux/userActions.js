import axios from 'axios'
import { getAllUsers } from './userSlice'

export const getUsers = async () => {
  const users = await axios('http://localhost:3001/api/users')
  return (dispatch) => {
    dispatch(getAllUsers(users.data))
  }
}
