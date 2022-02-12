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

export async function fetchSeries() {
  const url = `${BASE_URL}/series`;

  const response = await axios.get(url);
  return response.data;
}

export async function fetchPost(postId) {
  const url = `${BASE_URL}/posts?id=${postId}`;

  const response = await axios.get(url);
  return Array.isArray(response.data) ? response.data[0] : response.data;
}
