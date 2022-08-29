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

type GetfilterType = {
  selectGenres: string;
  priceFrom: string;
  priceTo: string;
  sortBy: 'Price' | 'Author' | 'Rating' | 'Date' | 'Name';
};

export const getGenres = (): Promise<AxiosResponse<GenresResponseType>> => {
  return customAxios.get(
    '/catalog/getGenres',
  );
};

export const getBooks = (): Promise<AxiosResponse<BookType[]>> => {
  return customAxios.post(
    '/catalog/filterBooks',
  );
};

export const getFilteredBooks =
(params: FilterType): Promise<AxiosResponse<BookType[]>> => {
  return customAxios.get(
    '/catalog/filter', { params },
  );
};
