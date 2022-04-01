import React from "react";
import { Link } from "react-router-dom";
import Icon from "../images/cryptocurrency.png";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
     
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="./">
            <img
              src={Icon}
              alt="icon"
              width="30"
              className="d-inline-block align-text-top"
              style={{ marginRight: "1rem" }}
            />
            CryptoTime
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="./">
                Home
              </Link>

              <Link className="nav-link" to="/cryptocurrencies">
                Cryptocurrencies
              </Link>

              <Link className="nav-link" to="/exchanges">
                Exchanges
              </Link>

              <Link className="nav-link" to="/news">
                News
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
