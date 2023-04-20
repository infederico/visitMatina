import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        value: [],
        show: true
    },
    reducers: {
        getAllProducts: (state, action) => {
            state.value =  action.payload
        }
    }
})

export const { getAllProducts } = productsSlice.actions;
export default productsSlice.reducer;