import type { AxiosResponse } from 'axios';
import customAxios from '.';

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
