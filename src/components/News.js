import React, { useEffect, useState } from "react";
import { getNews } from "../services/newsService";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ category, query }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1); // reset page
    fetchNews(true);
  }, [category, query]);

  const fetchNews = async (reset = false) => {
    setLoading(true);

    const data = await getNews(category, query);

    if (reset) {
      setArticles(data);
    } else {
      setArticles((prev) => prev.concat(data));
    }

    setLoading(false);
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const data = await getNews(category, query);

    setArticles((prev) => prev.concat(data));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center my-4 text-capitalize fw-bold">
        {query
          ? `Search results for "${query}"`
          : `Top ${category} News`}
      </h2>

      {loading && articles.length === 0 && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Spinner />}
      >
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem article={article} />
            </div>
          ))}
        </div>
      </InfiniteScroll>

      {!loading && articles.length === 0 && (
        <h4 className="text-center mt-5">No news found 😔</h4>
      )}
    </div>
  );
};

export default News;