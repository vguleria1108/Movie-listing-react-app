import React, { Component } from "react";

import Header from "./Header";
import { Layout as antLayout } from "antd";
import { check_login } from "../../utils/common.util";
import SideDrawer from "./SideDrawer";
const { Content } = antLayout;

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
                            <SideDrawer />
                        </div>
                            : ""}<Content>{this.props.children}</Content>

                    </div>
                </div>

            </>
        );
    }
}

export default Layout;
