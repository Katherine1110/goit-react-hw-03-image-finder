import axios from "axios";

const BASE_URL = "https://pixabay.com/api";

const API_KEY = "20839696-a971fa945b676bf9ea56a302e";

const fetchImages = ({ currentPage = 1, searchQuery = "" }) => {
  return axios
    .get(
      `${BASE_URL}/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};
// console.log(fetchImages());
export default { fetchImages };
