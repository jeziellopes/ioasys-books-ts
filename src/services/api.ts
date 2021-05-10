import axios from 'axios';
import { isAuthenticated, getAccessToken } from 'lib/contexts/auth';
import { baseURL, REFRESH_TOKEN } from 'constants/endpoints';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (initialConfig) => {
  const config = initialConfig;
  if (isAuthenticated()) {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      try {
        const {
          data: { accessToken },
        } = await axios.post(
          REFRESH_TOKEN,
          {
            accessToken: localStorage.getItem('access-token'),
            refreshToken: localStorage.getItem('refresh-token'),
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        localStorage.setItem('access-token', accessToken);
        return api(originalRequest);
      } catch (e) {
        localStorage.clear();
      }
    }
    return Promise.reject(error);
  },
);

export default api;
