import axios from 'axios';

const PORT = 'http://localhost:4000';

const customAxios = axios.create({
  baseURL: PORT,
});

export default customAxios;
