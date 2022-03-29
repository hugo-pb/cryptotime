import React from "react";

import Icon from "../images/cryptocurrency.png";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      {/* <nav classNameName="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Avatar src={Icon} size="large" />
            <Typography.Title level={2} classNameName="logo">
              <Link to="/">CryptoTime</Link>
            </Typography.Title>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
                <li classNameName="nav-item">
                  <a classNameName="nav-link" href="./">
                    Home
                  </a>
                </li>
                <li classNameName="nav-item">
                  <a classNameName="nav-link" href="/cryptocurrencies">
                    Cryptocurrencies
                  </a>
                </li>
                <li classNameName="nav-item" icon={<MoneyCollectOutlined />}>
                  <a classNameName="nav-link" href="/exchanges">
                    Exchanges
                  </a>
                </li>
                <li classNameName="nav-item" icon={<BulbOutlined />}>
                  <a classNameName="nav-link" href="/news">
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>
    </nav> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a class="navbar-brand" href="./">
            <img
              src={Icon}
              alt="icon"
              width="30"
              heigh
                          className="d-inline-block align-text-top"
                          style={{marginRight:'1rem'}}
            />
         CryptoTime
          </a>
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
              <a classNameName="nav-link" href="./">
                Home
              </a>

              <a classNameName="nav-link" href="/cryptocurrencies">
                Cryptocurrencies
              </a>

              <a classNameName="nav-link" href="/exchanges">
                Exchanges
              </a>

              <a classNameName="nav-link" href="/news">
                News
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
