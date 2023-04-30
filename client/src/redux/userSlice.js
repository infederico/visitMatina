import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    users: [],
    upDtRes: '',
  },
  reducers: {
    getUserByEmail: (state, action) => {
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
      };
    },
    postUser: (state, action) => {
      return { ...state };
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
      };
    },
    logOutUser: (state, action) => {
      return {
        ...state,
        user: {},
      };
    },
    allUsers: (state, action) => {
      state.users = action.payload;
    },
    updtUser: (state, action) => {
      state.upDtRes = action.payload;
      if (state.upDtRes !== '') {
        //window.alert(action.payload); 
      }
    },
    cleanUpdt: (state, action) => {
      state.upDtRes = '';
    },
  },
});

export const {
  getUserByEmail,
  postUser,
  gUSer,
  logOutUser,
  allUsers,
  updtUser,
  cleanUpdt,
} = userSlice.actions;
export default userSlice.reducer;
