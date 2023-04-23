import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    users:[],
  },
  reducers: {
    getUserById: (state, action) => {
      return {
        ...state,
        user: {
          id_user: action.payload.id_user,
          name: action.payload.name,
          image: action.payload.image,
          email: action.payload.email,
          admin: action.payload.admin,
          access: true,
        },
      }
    },
    postUser: (state, action) => {
      return { ...state }
    },
    gUSer: (state, action) => {
      return {
        ...state,
        user: {
          id_user: action.payload.id_user,
          name: action.payload.name,
          image: action.payload.image,
          email: action.payload.email,
          admin: action.payload.admin,
          access: true,
        },
      }
    },
    logOutUser: (state, action) => {
      return {
        ...state,
        user: {},
      }
    },
    allUsers: (state, action) => {
      state.users = action.payload
      
    },
    updtUser: (state, action) => {
      return { ...state }
    },
  },
})

export const { getUserById, postUser, gUSer, logOutUser, allUsers, updtUser } = userSlice.actions
export default userSlice.reducer
