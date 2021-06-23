import React from "react";
import { Layout as antLayout, Menu } from "antd";

import {
    GithubOutlined,
    LinkedinOutlined,
    FileSearchOutlined,
} from "@ant-design/icons";

const { Sider } = antLayout;

const SideDrawer = props => {
    return (

        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{
                height: "100vh",
                position: "sticky",
                top: 0,
                left: 0
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
                <Menu.Item onClick={() => window.open("https://github.com/vguleria1108", '_blank').focus()} key="1" icon={<GithubOutlined />}>
                    Github
                </Menu.Item>
                <Menu.Item key="2" onClick={() => window.open("https://www.linkedin.com/in/vikrant-guleria-1a6098107/", '_blank').focus()} icon={<LinkedinOutlined />}>
                    LinkedIn
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default SideDrawer;
