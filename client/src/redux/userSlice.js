import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
    admin: false,
  },
  reducers: {
    getUserById: (state, action) => {
      if (action.payload.admin === true) {
        state.admin = true
      }
      state.user = action.payload
    },
    postUser: (state, action) => {
      return { ...state, admin: action.payload.admin }
    },
  },
})

export const { getUserById, postUser } = userSlice.actions
export default userSlice.reducer
