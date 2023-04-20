import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: "contact",
    initialState: {
        contacto: {
            name: "",
            email: "",
            message: "",
        },

    },
    reducers: {
        setContacto: (state, action) => {
            state.contacto = action.payload;
        },

    },
});

export const { setContacto } = contactSlice.actions;
export default contactSlice.reducer;