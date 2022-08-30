/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type GenreType = {
    id: string;
    name: string;
};

export type AuthorType = {
    id: string;
    name: string;
};

export type RatingType = {
    id: string;
    bookRating: string;
};

export type BookType = {
    id: string;
    name: string;
    description: string;
    price: string;
    paperPrice: string;
    cover: string;
    genres: GenreType[];
    author: AuthorType;
    rating: RatingType[];
    middleRating: string;
};

export type LoadGenresAndBooksType = {
  genres: GenreType[];
  books: BookType[];
};

export type FilterType = {
  selectGenres: number[];
  priceFrom: string;
  priceTo: string;
  sortBy: 'price' | 'author' | 'middleRating' | 'releasedAt' | 'name';
};

export type FilterToUpdateType = {
  selectGenres?: number[];
  priceFrom?: string;
  priceTo?: string;
  sortBy?: 'price' | 'author' | 'middleRating' | 'releasedAt' | 'name';
};

export type BookStateType = {
  books: BookType[];
  filter: FilterType;
  genres: GenreType[];
};

const initialState: BookStateType = {
  books: [],
  filter: {
    selectGenres: [],
    priceFrom: '0',
    priceTo: '10000',
    sortBy: 'middleRating',
  },
  genres: [],
};

const bookReduser = createSlice({
  name: 'bookReduser',
  initialState,
  reducers: {
    loadBooks: (state, action: PayloadAction<BookType[] | []>) => {
      state.books = action.payload;
    },
    loadGenresAndBooks: (state, action: PayloadAction<LoadGenresAndBooksType>) => {
      state.genres = action.payload.genres;
      state.books = action.payload.books;
    },
    loadGenres: (state, action: PayloadAction<GenreType[] | []>) => {
      state.genres = action.payload;
    },
    changeFilter: (state, action: PayloadAction<FilterToUpdateType>) => {
      if (action.payload.selectGenres && state.filter) {
        state.filter.selectGenres = action.payload.selectGenres;
      }
      if (action.payload.priceTo && state.filter) {
        state.filter.priceTo = action.payload.priceTo;
      }
      if (action.payload.priceFrom && state.filter) {
        state.filter.priceFrom = action.payload.priceFrom;
      }
      if (action.payload.sortBy && state.filter) {
        state.filter.sortBy = action.payload.sortBy;
      }
    },
  },
});

export const booksActions = bookReduser.actions;

export default bookReduser.reducer;
