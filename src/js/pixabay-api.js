import axios from "axios";

const API_KEY = "51902075-56e09341b6a8d3328bcbea73a";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}