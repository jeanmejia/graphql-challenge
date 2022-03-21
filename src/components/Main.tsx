import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar/Sidebar";
import SearchBar from "./TopNavigationBar/SearchBar";

const {Header, Sider, Content} = Layout;

const layoutStyle = {
    display: 'flex',
    height: '970px',
}

const headerStyle = {
    display: 'flex',
    alignItems : 'center'
}
const Main = () => {
  return (
    <Layout style={layoutStyle}>
      <Sider><Sidebar/></Sider>
      <Layout>
        <Header style={headerStyle}><SearchBar/></Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};

export default Main;
