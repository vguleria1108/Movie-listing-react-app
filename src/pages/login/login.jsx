import React, { useEffect } from "react";
import Layout from "../../components/LayoutComps/Layout";
import {
  check_login,
  login_user,
  showNotification,
} from "../../utils/common.util";
import { useHistory } from "react-router-dom";
import "./login.css";

export default function Login(props) {
  const history = useHistory();

  useEffect(() => {
    //check if user is logged in

    if (check_login()) {
      showNotification("success", "You are already logged in");
      history.push("/dashboard");
    }
  }, []);

  const loginUser = (e) => {
    e.preventDefault();
    login_user({ user_token: "dummy_token" });
    showNotification("success", "Logged in successfully");
    history.push("/dashboard");
  };

  return (
    <>
      <Layout>
        <div className="loginWrapper">
          <div>
            <div className="formHolder">
              <h1>Log In</h1>
              <form onSubmit={(e) => loginUser(e)}>
                <input
                  id="email"
                  name="email"
                  placeholder="Username or Email"
                  required="true"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required="true"
                />
                <input type="submit" value="Log In" />
                Don't have an account?{" "}
                <a onClick={() => history.push("/register")}>Sign Up</a>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
