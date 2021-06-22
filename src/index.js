import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import Dashboard from "./pages/home/home";
import Login from "./pages/login/login";

import 'antd/dist/antd.css'
import Register from "./pages/register/register";


function App() {
    return (
        <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Dashboard} />
            <Route path={`${process.env.PUBLIC_URL}/login`} exact component={Login} />
            <Route path={`${process.env.PUBLIC_URL}/register`} exact component={Register} />
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
