import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export async function fetchTags() {
  const url = `${BASE_URL}/tags`;

  const response = await axios.get(url);
  return response.data;
}

export default {};
