import axios from 'axios';

// const API_KEY = '19751428-a086778a88a94bf1701ad414c';
// const BASE_URL = 'https://pixabay.com/api';

const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=19751428-a086778a88a94bf1701ad414c&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default apiService;

// const apiService = (query, currentPage) => {
//   return axios
//     .get(
//       `${BASE_URL}?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
//     )
//     .then(response => response.data.hits);
// };
