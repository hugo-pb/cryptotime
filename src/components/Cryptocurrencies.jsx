import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import "../styles/cryptocurrencies.css";
import { useGetCryptosQuery } from "../services/CryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 5 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, search]);

  if (isFetching) return(<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>);
  return (
    <div className="container">
      {!simplified && (
        <div className="searchCrypto">
          <input
            type="search"
            placeholder="Search for crypto"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      <div className="row">
        {cryptos?.map((currency) => (
          <div className="col-md-4 col-lg-2" key={currency.id}>
            <div className="card">
              <div className="card-body">
                <img
                  src={currency.iconUrl}
                  className="card-img-top"
                  alt="crypto"
                ></img>{" "}
                <h5 class="card-title">{`${currency.rank}. ${currency.name}`}</h5>
                <p class="card-text">Price :{millify(currency.price)}</p>
                <p class="card-text">
                  Market Cap :{millify(currency.marketCap)}
                </p>
                <p class="card-text">
                  Daily Change :{millify(currency.change)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cryptocurrencies;
