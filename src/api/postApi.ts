import axios from 'axios';

export const postsApi = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});

export default postsApi;
