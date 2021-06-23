import React, { useState, useEffect } from "react";
import Layout from "../../components/LayoutComps/Layout";
import { Layout as antLayout, Menu } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import "./dashboard.css";
const { Sider } = antLayout;
export default function Dashboard(props) {
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          className="sliderLayout"
        >
          <div className="logo">
            <FileSearchOutlined />
            <span>Movie Search</span>
          </div>
          <Menu
            className="menuWrapper"
            theme="dark"
            mode="inline"
            selectable={false}
          >
            <Menu.Item key="1" icon={<GithubOutlined />}>
              Github
            </Menu.Item>
            <Menu.Item key="2" icon={<LinkedinOutlined />}>
              LinkedIn
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    </>
  );
}
