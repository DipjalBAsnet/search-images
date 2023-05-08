import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID trWD8u_mzCTQsOOx9L3N7XUvi7aMG2861Y6W-tVe6VI",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default SearchImages;
