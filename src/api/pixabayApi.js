import axios from "axios";

const BASE_URL = "https://pixabay.com/api";

const API_KEY = "20839696-a971fa945b676bf9ea56a302e";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
});

axiosInstance.defaults.params = {};
axiosInstance.defaults.params["key"] = API_KEY;

const fetchImages = ({ currentPage = 1, searchQuery = "" }) => {
  return axiosInstance
    .get(
      `/?q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

const apiObj = { fetchImages };
export default apiObj;
