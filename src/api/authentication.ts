import type { AxiosResponse } from 'axios';
import customAxios from '.';
import type { UserType } from '../store/user/reduser';

type OptionsType = {
  email: string;
  password: string;
};

type ChangePassType = {
  oldPassword: string;
  newPassword: string;
};
type UpdateUserType = {
  firstName?: string;
  email?: string;
  lastName?: string;
};

type AuthResponseType = {
  user: UserType;
};
type UpdatePhotoType ={
  photo: string;
};
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

export const updatePhoto = (options: UpdatePhotoType): Promise<AxiosResponse<ResponseType>> => {
  return customAxios.patch(
    '/user/update-photo',
    options,
  );
};

export const signUp = (options: OptionsType): Promise<AxiosResponse<ResponseType>> => {
  return customAxios.post(
    '/auth/sign-up',
    options,
  );
};

export const getMe = (): Promise<AxiosResponse<AuthResponseType>> => {
  return customAxios.get(
    '/auth/me',
  );
};
