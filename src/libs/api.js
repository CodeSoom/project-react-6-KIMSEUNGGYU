import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;
const BASE_URL = REACT_APP_SERVER_URL;

export async function fetchTags() {
  const url = `${BASE_URL}/tags`;

  const response = await axios.get(url);
  return response.data;
}

export async function fetchPosts() {
  const url = `${BASE_URL}/posts`;

  const response = await axios.get(url);
  return response.data;
}
