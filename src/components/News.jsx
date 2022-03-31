import React from "react";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";
import'../styles/news.css'
const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "cryptocurrency",
    count: simplified ? 6 : 15,
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
          <div className="col-md-6 col-lg-4" key={key}>
            {" "}
            <div
              className="card"
              style={{
                marginTop: "3px",
                minHeight: "21rem",
                maxHeight: "30rem",
                display: "flex",
                alignContent: "center",
                justifyContent: "baseline",
              }}
            >
              <div className="card-body">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <h5 className="card-title">{news.name}</h5>
                  <img src={news?.image?.thumbnail?.contentUrl} alt="news" />
                  <p className="card-text" style={{}}>
                    {news.description}
                  </p>

                  <img
                    src={news.provider[0]?.image?.thumbnail?.contentUrl}
                    alt="news provider"
                    className="logo"
                  />
                  <p>
                    <small>
                      {moment(news.datePublished).startOf("ss").fromNow()}
                    </small>
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
