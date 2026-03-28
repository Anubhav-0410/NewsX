import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getNews = async (category = "business", query = "") => {
  try {
    let url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&category=${category}&language=en`;

    if (query) {
      url += `&q=${encodeURIComponent(query)}`;
    }
    const response = await axios.get(url);
    return response.data?.results || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};