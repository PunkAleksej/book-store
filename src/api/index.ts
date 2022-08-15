import axios from 'axios';

const PORT = 'http://localhost:4000';

const customAxios = axios.create({
  baseURL: PORT,
});

customAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      ...config.headers,
      authorization: `Bearear ${token}`,
    };
  }
  return config;
});

export default customAxios;
