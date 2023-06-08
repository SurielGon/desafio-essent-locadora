'use client';
import { ILoginAuthorized } from '@/interfaces/login';
import { createSlice } from '@reduxjs/toolkit';

const loggedUser =
  typeof window !== 'undefined'
    ? window.localStorage.getItem('loggedUser')
    : null;
const initialState: ILoginAuthorized =
  loggedUser && loggedUser !== 'undefined'
    ? JSON.parse(loggedUser)
    : {
        user: undefined,
        acessToken: undefined
      };

export const userSlice = createSlice({
  name: 'loggedUser',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const payload = action.payload;
      if (payload) {
        state.user = action.payload?.user;
        state.acessToken = action.payload?.acessToken;
        localStorage.setItem('loggedUser', JSON.stringify(action.payload));
      } else {
        state.user = undefined;
        state.acessToken = undefined;
        localStorage.removeItem('loggedUser');
      }
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
