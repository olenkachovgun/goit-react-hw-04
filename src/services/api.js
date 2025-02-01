import axios from "axios";
// API - unsplash, name - Image Gallery.
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// query	Search terms.
// page	Page number to retrieve. (Optional; default: 1)
// per_page	Number of items per page. (Optional; default: 10)

const AccessKey = "cyPll6ZxBHIDrkoVGvLzafUhp-zbVQp7VKiEaMLKtwA";

export const fetchPhotos = async (query, page, perPage) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=${AccessKey}&query=${query}&page=${page}&per_page=${perPage}`
  );
  return response.data;
};
// export const fetchArticlesById = async () => {
//   const response = await axios.get(
//     "http://hn.algolia.com/api/v1/search?query=react"
//   );
//   return response.data;
// };
