import axios from "axios";
// API - unsplash, name - Image Gallery.
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
//https://api.unsplash.com/search
// query	Search terms.
// page	Page number to retrieve. (Optional; default: 1)
// per_page	Number of items per page. (Optional; default: 10)

// const AccessKey = "UOB7k7dbf0ho9w16EFpuYoAu4izBwqloeRx7yFlslV8";

// export const fetchPhotos = async (query, page, perPage) => {
//   const { data } = await axios.get(
//     `https://api.unsplash.com/photos/?client_id=${AccessKey}&query=${query}&page=${page}&per_page=${perPage}`
//   );

//   return data;
// };

const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "UOB7k7dbf0ho9w16EFpuYoAu4izBwqloeRx7yFlslV8";

export async function fetchPhotos(query, page = 0, perPage = 5) {
  const { data } = await axios(`${BASE_URL}`, {
    params: {
      client_id: API_KEY,
      query: query,
      page,
      per_page: perPage,
    },
  });
  return data.results;
}
