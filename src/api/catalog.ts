import type { AxiosResponse } from 'axios';
import customAxios from '.';
type Genre = {
    id: string;
    name: string;
}
type GenresResponse = {
    genres: Genre[];
}
export const getGenres = (): Promise<AxiosResponse<GenresResponse>> => {
  return customAxios.get(
    '/catalog/getGenres'
  );
};