import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload
    },
  },
})

export const { getAllUsers } = userSlice.actions
export default userSlice.reducer
