import React from 'react';
import HTMLReactParser from "html-react-parser";
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const Cryptodetails = () => {

  const { coinId } = useParams() //takes id in url and lets us use it as a variable



  return (
    <div>Cryptodetails {coinId} </div>
  )
}

export default Cryptodetails