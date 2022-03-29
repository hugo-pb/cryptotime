import React from "react";
import { Button, Menu, Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,

} from "@ant-design/icons";
import Icon from "../images/cryptocurrency.png";
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Avatar src={Icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoTime</Link>
        </Typography.Title>
        <Button className="menu-control-container"></Button>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="./">Home</Link>
        </li>
        <li className="nav-item" icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </li>
        <li className="nav-item" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </li>
        <li className="nav-item" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
