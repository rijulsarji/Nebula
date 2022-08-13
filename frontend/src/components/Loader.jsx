import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";
const antIcon = (
  <LoadingOutlined
    style={{
      color: 'red',
      position: 'absolute',
      left: '50%',
      fontSize: '28px'
    }}
    spin
  />
);

const Loader = () => <Spin indicator={antIcon} />;

export default Loader;
