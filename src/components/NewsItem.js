import React from "react";

const NewsItem = ({ article }) => {
  return (
    <div className="card my-3 shadow-sm h-100 position-relative">
      <img
      src={article.image_url}
      className="card-img-top rounded-top"
      alt="news"
      style={{ height: "200px", objectFit: "cover" }}
      onError={(e) => {
      e.target.onerror = null;
      e.target.src =
      "https://dummyimage.com/300x200/cccccc/000000&text=No+Image";
  }}
/>
      {article.source_id && (
        <span className="badge bg-danger position-absolute top-0 end-0 m-2 px-3 py-2">
            {article.source_id}
        </span>
      )}
      <div className="card my-3 shadow h-100 border-0">
        <h5 className="card-title">
          {article.title ? article.title.slice(0, 60) : "No Title"}
        </h5>

        <p className="card-text">
          {article.description
            ? article.description.slice(0, 100)
            : "No description available."}
        </p>
        <a
          href={article.link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mt-auto w-100"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;