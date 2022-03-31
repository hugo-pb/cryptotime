import React from "react";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "cryptocurrency",
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <div className="container ">
      <div className="row">
        {cryptoNews.value.map((news, key) => (
          <div className="col-md-4 col-lg-2" key={key}>
            {" "}
            <div className="card">
              <div className="card-body">
                <a href={news.url} targe="_blank" rel="noreferrer">
                  <h5 className="card-title">{news.name}</h5>
                </a>

                <p className="card-text"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
