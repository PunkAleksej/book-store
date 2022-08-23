/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type Genre = {
    id: string;
    name: string;
};
export type Author = {
    id: string;
    name: string;
};
export type Rating = {
    id: string;
    bookRating: string;
};
export type Book = {
    id: string;
    name: string;
    description: string;
    price: string;
    paperPrice: string;
    cover: string;
    genres: Genre[];
    author: Author;
    rating: Rating[];
};
export type BookStateType = {
};
const initialState: BookStateType = {
  books: [],
  filter:[]
};

const bookReduser = createSlice({
  name: 'bookReduser',
  initialState,
  reducers: {
    // addUser: (state, action: PayloadAction<UserType | null>) => {
    //   state.user = action.payload;
    // },
    // updateUser: (state, action: PayloadAction<UserToUpdateType>) => {
    //   if (action.payload.email && state.user) {
    //     state.user.email = action.payload.email;
    //   }
    //   if (action.payload.firstName && state.user) {
    //     state.user.firstName = action.payload.firstName;
    //   }
    //   if (action.payload.photo && state.user) {
    //     state.user.photo = action.payload.photo;
    //   }
    // },
  },
});

export const booksActions = bookReduser.actions;

export default bookReduser.reducer;
