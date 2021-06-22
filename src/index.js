import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import './index.css';
import Dashboard from "./pages/home";

import 'antd/dist/antd.css'


function App() {
    return (
        <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Dashboard} />
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
