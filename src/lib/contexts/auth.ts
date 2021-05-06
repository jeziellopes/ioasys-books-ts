const ACCESS_TOKEN = 'access-token';
const NAME = 'name';
const FULL_NAME = 'fullname';
const EMAIL = 'email';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const getUserData = () => {
  return {
    name: localStorage.getItem(NAME),
    email: localStorage.getItem(EMAIL),
    fullname: localStorage.getItem(FULL_NAME),
  };
};

type StorageAuthData = {
  accessToken: string
  name: string
  fullname: string
  email: string
}

export const setAccessToken = ({ accessToken, name, fullname, email }: StorageAuthData) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(NAME, name);
  localStorage.setItem(FULL_NAME, fullname);
  localStorage.setItem(EMAIL, email);
};

export const removeStorage = () => {
  localStorage.clear();
};

export const isAuthenticated = () => getAccessToken() !== null;
