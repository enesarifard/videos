import axios from 'axios';
const KEY = 'AIzaSyC47z-1qSx6r41_GDxA_TaJX9M86hWRFu8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
