export const base = process.env.REACT_APP_API_BASE_PATH;

const version = 'v1';
const authPrefix = 'auth';

export const baseURL = `${base}/${version}/`;
export const REFRESH_TOKEN = `${baseURL}/${authPrefix}/refresh-token`;
export const SIGN_IN = `${baseURL}/auth/sign-in`;
export const BOOKS = `${baseURL}/books`;
