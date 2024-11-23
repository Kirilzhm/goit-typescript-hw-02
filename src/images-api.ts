import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const fetchImagesWithQuery = async (query: string, page: number = 1, per_page: number = 12) => {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query: query, 
        page: page,  
        per_page: per_page,  
        client_id: "FCG8aeIYSEdDfzuTglDM3n2ScF3KepGOulqsB2OAZkc"  
      }
    });
    return response.data.results as {
        id: string;
        urls: { small: string; regular: string };
        alt_description: string;
    };  
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default fetchImagesWithQuery;
