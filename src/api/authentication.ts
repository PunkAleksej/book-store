import type { AxiosResponse } from 'axios';
import customAxios from '.';

type OptionsType = {
  email: string;
  password: string;
};

type SomeModelType = {
  token: string;
  user: string;
};

export const signIn = (options: OptionsType): Promise<AxiosResponse<SomeModelType>> => {
  return customAxios.post(
    '/auth/sign-in',
    options,
  );
};
