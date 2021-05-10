import { UserDataType } from 'interfaces/storage';

const ACCESS_TOKEN = 'access-token';
const REFRESH_TOKEN = 'refresh-token';
const NAME = 'name';
const FULL_NAME = 'fullname';
const EMAIL = 'email';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const getUserData = (): UserDataType => ({
  name: localStorage.getItem(NAME),
  email: localStorage.getItem(EMAIL),
  fullname: localStorage.getItem(FULL_NAME),
});

type StorageAuthData = {
  accessToken: string;
  refreshToken: string;
  name: string;
  fullname: string;
  email: string;
};

export const setAccessToken = ({
  accessToken,
  refreshToken,
  name,
  fullname,
  email,
}: StorageAuthData) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
  localStorage.setItem(NAME, name);
  localStorage.setItem(FULL_NAME, fullname);
  localStorage.setItem(EMAIL, email);
};

export const removeStorage = () => {
  localStorage.clear();
};

export const isAuthenticated = () => getAccessToken() !== null;
