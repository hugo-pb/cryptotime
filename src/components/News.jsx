import React, {useState} from "react";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";
import "../styles/news.css";
import { Select,  } from "antd";
import { useGetCryptosQuery } from "../services/CryptoApi";
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
     const { data  } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
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
      {!simplified && (
        <div className="col-6">
          <Select
            showSearch
            placeholder="select a crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase() >0)
            }
          >
            <option value="Cryptocurrency">cryptocurrency</option>
            {data?.data?.coins.map((coin) => (
              <option value={coin.name}>{coin.name}</option>
            ))}
          </Select>
        </div>
      )}
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
