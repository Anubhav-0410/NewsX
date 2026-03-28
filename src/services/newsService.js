import axios from "axios";

const API_KEY = "pub_fefa96ffa3e14d73bf91a125dd02a707";

export const getNews = async (category = "business", query = "") => {
  try {
    let url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&category=${category}&language=en`;

    // ✅ Add search query
    if (query) {
      url += `&q=${query}`;
    }

    const response = await axios.get(url);
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};



