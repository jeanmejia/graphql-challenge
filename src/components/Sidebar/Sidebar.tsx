import { Menu } from "antd";
import React from "react";

const Sidebar = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">Ravn Logo </Menu.Item>
      <Menu.Item key="2">DASHBOARD</Menu.Item>
      <Menu.Item key="3">MY TASK</Menu.Item>
    </Menu>
  );
};
export default Sidebar;
