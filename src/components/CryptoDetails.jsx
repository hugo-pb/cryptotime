import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/CryptoApi";


import { Select } from "antd";
import LineChart from "./lineChart";

const CryptoDetails = () => {
  const [timePeriod, setTimeperiod] = useState("5y");
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: cryptoHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  if (isFetching) return "loading";

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <h1>{cryptoDetails.name}</h1>
          <Select
            defaultValue="1y"
            className="select-timeperiod"
            placeholder="Select Timeperiod"
            onChange={(value) =>
              setTimeperiod(value)
            }
          >
            {time.map((date) => (
              <option key={date}>{date}</option>
            ))}
          </Select>
          <LineChart
            cryptoHistory={cryptoHistory}
            currentPrice={millify(cryptoDetails.price)}
            coinName={cryptoDetails.name}
          />
          {HTMLReactParser(cryptoDetails.description)}
        </div>
        <div className="col">
          <h2>{cryptoDetails.name} Links</h2>
          {cryptoDetails.links.map((link) => (
            <div className="col" key={link.id}>
              <h5>{link.type}</h5>{" "}
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
