import React, { Component } from "react";

import Header from "./Header";
import { Layout as antLayout, Menu } from "antd";
import {
    GithubOutlined,
    LinkedinOutlined,
    FileSearchOutlined,
} from "@ant-design/icons";
import { check_login } from "../../utils/common.util";
const { Sider, Content } = antLayout;

export class Layout extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div className="layoutWrapper">
                    <div >
                        <Header />

                    </div>
                    <div className="layoutBody" >
                        {check_login() ? <div className="sliderWrapper">
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
                                    <Menu.Item key="1" icon={<GithubOutlined />}>
                                        Github
                                    </Menu.Item>
                                    <Menu.Item key="2" icon={<LinkedinOutlined />}>
                                        LinkedIn
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                        </div>
                            : ""}<Content>{this.props.children}</Content>

                    </div>
                </div>

            </>
        );
    }
}

export default Layout;
