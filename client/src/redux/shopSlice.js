import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
  name: 'shops',
  initialState: {
    shops: [],
  },
  reducers: {
    getAllShops: (state, action) => {
      state.shops = action.payload
    },
  },
})

export const { getAllShops } = shopSlice.actions
export default shopSlice.reducer
