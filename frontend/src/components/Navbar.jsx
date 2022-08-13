import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import icon from "../assets/cryptocurrency.png"

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} className="logo" />
      </div>
      <Menu style={{ backgroundColor: "transparent", color: "#F2E5D7" }}>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/" style={{ color: "#F2E5D7" }}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies" style={{ color: "#F2E5D7" }}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges" style={{ color: "#F2E5D7" }}>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news" style={{ color: "#F2E5D7" }}>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar