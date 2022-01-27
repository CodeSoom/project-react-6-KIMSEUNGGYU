const BASE_URL = 'http://localhost:5000';

export async function fetchTags() {
  const url = `${BASE_URL}/tags`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default {};
