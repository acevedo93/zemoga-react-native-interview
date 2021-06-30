import axios from 'axios';

export const booksApi = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/posts`,
});

export default booksApi;
