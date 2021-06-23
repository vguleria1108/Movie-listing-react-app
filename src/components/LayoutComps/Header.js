import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { check_login, logout_user } from "../../utils/common.util"
import {
    FileSearchOutlined,
} from "@ant-design/icons";

const Header = props => {
    const history = useHistory();
    return (
        <>
            <div className="navbar-container">
                <div className="right-container">
                    <div
                        className="brand-logo"
                    >
                        <Link to={process.env.PUBLIC_URL}>
                            <div className="logo">
                                <FileSearchOutlined />
                                <span>Movie Search</span>
                            </div>
                        </Link>
                    </div>
                </div>
                {!check_login() ?
                    <div className="loggedOutStateOpt" style={{ display: 'flex' }}>
                        <div className="loginBtn primaryBtn" onClick={() => history.push(process.env.PUBLIC_URL + '/login')}>
                            Log In
                        </div>
                    </div> : <div className="primaryBtn" onClick={() => { logout_user(); history.push("/login") }}>Log Out</div>}

            </div>
        </>
    );
};

export default Header;
