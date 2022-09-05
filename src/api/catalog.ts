import type { AxiosResponse } from 'axios';
import customAxios from '.';
import type { BookType, FilterType } from '../store/book/reduser';
import type { UserType } from '../store/user/reduser';

type GenreType = {
    id: string;
    name: string;
};

type GenresResponseType = {
    genres: GenreType[];
    books: BookType[];
    user: UserType;
};

type CreateRatingType = {
  bookId: string;
  bookRating: string;
};

type AddInCartType = {
  bookId: string;
  booksQuantity: string;
};

type CreateRatingResponceType = {
  rating: {
    Book: BookType;
    User: UserType;
  };
};

type BookIdType = {
  id: string;
};

type AddToFavoriteType = {
  bookId: string;
};

type GetBooksByIdType = {
  bookId: string;
};
type AddToCartResponseType = {
  user: UserType;
};

export const getGenres = (): Promise<AxiosResponse<GenresResponseType>> => {
  return customAxios.get(
    '/catalog/getGenres',
  );
};

export const getBooksById = (options: GetBooksByIdType): Promise<AxiosResponse<BookType[]>> => {
  return customAxios.post(
    '/catalog/cart-books',
    options,
  );
};

export const getBook = (params: BookIdType): Promise<AxiosResponse<BookType>> => {
  return customAxios.get(
    '/catalog/getBook', { params },
  );
};

export const getFilteredBooks =
(params: FilterType): Promise<AxiosResponse<BookType[]>> => {
  return customAxios.get(
    '/catalog/filter', { params },
  );
};

export const createRating =
(options: CreateRatingType): Promise<AxiosResponse<CreateRatingResponceType>> => {
  return customAxios.post(
    '/catalog/rating',
    options,
  );
};

export const addToCart =
(options: AddInCartType): Promise<AxiosResponse<AddToCartResponseType>> => {
  return customAxios.post(
    '/catalog/cart',
    options,
  );
};

export const addToFavorite =
(options: AddToFavoriteType): Promise<AxiosResponse<AddToCartResponseType>> => {
  return customAxios.post(
    '/catalog/favorite',
    options,
  );
};
