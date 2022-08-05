import type { AxiosResponse } from 'axios';
import { config } from 'process';
import customAxios from '.';
import { UserType } from '../store/user/reduser';

type OptionsType = {
  email: string;
  password: string;
};

type ChangePassType = {
  oldPassword: string;
  newPassword: string;
}
type UpdateUserType = {
  firstName?: string;
  email?: string;
  lastName?: string;
}

type AuthResponsetype = {
  user: UserType;
}

type ResponseType = {
  token: string;
  user: UserType;
};


export const signIn = (options: OptionsType): Promise<AxiosResponse<ResponseType>> => {
  return customAxios.post(
    '/auth/sign-in',
    options,
  );
};

export const changePass = (options: ChangePassType): Promise<AxiosResponse<ResponseType>> => {
  return customAxios.post(
    '/user/change-pass',
    options,
  );
};

export const updateUser = (options: UpdateUserType): Promise<AxiosResponse<ResponseType>> => {
  return customAxios.patch(
    '/user/update',
    options,
  );
};

export const signUp = (options: OptionsType): Promise<AxiosResponse<ResponseType>> => {
  return customAxios.post(
    '/auth/sign-up',
    options,
  );
};

export const getMe = (): Promise<AxiosResponse<AuthResponsetype>> => {
  return customAxios.get(
    '/auth/me'
  );
};