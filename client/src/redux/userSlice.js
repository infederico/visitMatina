import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    getUserById: (state, action) => {
      return {
        ...state,
        user: {
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
          name: action.payload.name,
          image: action.payload.image,
          email: action.payload.email,
          admin: action.payload.admin,
          access: true,
        },
      }
    },
  },
})

export const { getUserById, postUser, gUSer } = userSlice.actions
export default userSlice.reducer
