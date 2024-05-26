import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Optimize from "./pages/Optimize";
import { Layout, Menu } from "antd";

import "./App.less";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/settings">Settings</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/optimize">Optimize</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/optimize" element={<Optimize />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
