import React from "react";
import millify from "millify";
import { Typography,  Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/CryptoApi";
import '../styles/homepage.css'
import {Cryptocurrencies, News} from '../components'


const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(5);
  const globalStats = data?.data?.stats;

  if (isFetching)
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  return (
    <div className="container Homepage">
      <Title level={2} className="heading" style={{ textAlign: "center" }}>
        Global Crypto Stats
      </Title>

      <div className="row">
        <div className="col-md-6">
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </div>
        <div className="col-md-6">
          <Statistic
            title="Total Exchange"
            value={millify(globalStats.totalExchanges)}
          />
        </div>
        <div className="col-md-6">
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </div>
        <div className="col-md-6">
          <Statistic
            title="Total 24H Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </div>
        <div className="col-md-6">
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </div>
      </div>

      <div className="titles">
        <h2>Top 5 Cryptocurrencies in the world</h2>

        <Link to="/cryptocurrencies">Show more</Link>
      </div>
      <hr />
      <Cryptocurrencies  simplified/>
      <div className="titles">
        <h2>Latest Crypto News</h2>

        <Link to="/news">Show more</Link>
      </div>
      <hr />
      <News simplified />
    </div>
  );
};
export default Homepage;
