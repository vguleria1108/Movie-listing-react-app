import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import "./index.css"
import 'antd/dist/antd.css'
import Register from "./pages/register/register";
import { check_login } from "./utils/common.util";


function App() {
    return (
        <Switch>
            <Route path={`${process.env.PUBLIC_URL}/dashboard`} exact component={Dashboard} />
            <Route path={`${process.env.PUBLIC_URL}/login`} exact component={Login} />
            <Route path={`${process.env.PUBLIC_URL}/register`} exact component={Register} />
            <Route render={() => {
                return (
                    check_login() ?
                        <Redirect to="/dashboard" /> :
                        <Redirect to="/login" />
                )
            }} />
        </Switch>
    );
}

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
