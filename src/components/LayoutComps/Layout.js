import React, { Component } from "react";

import Header from "./Header";


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
                        {this.props.children}
                    </div>
                </div>
                <style jsx>{
                    `
                    .layoutWrapper{
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                    }
                    .layoutBody {
                        flex: 1;
                     }
    
                    `
                }
                </style>
            </>
        );
    }
}

export default Layout;
