import type { AxiosResponse } from 'axios';
import customAxios from '.';
import type { BookType } from '../store/book/reduser';

type GenreType = {
    id: string;
    name: string;
};

type GenresResponseType = {
    genres: GenreType[];
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
