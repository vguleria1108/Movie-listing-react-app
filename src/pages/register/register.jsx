import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/LayoutComps/Layout";
import { check_login, showNotification } from "../../utils/common.util";
import "./register.css";

export default function Register(props) {
  const history = useHistory();

  useEffect(() => {
    if (check_login()) {
      showNotification("success", "You are already logged in");
      history.push("/dashboard");
    }
  }, []);

  const handleUserRegister = (e) => {
    e.preventDefault();
    showNotification("success", "Registeration successfull, please login");
    history.push("/login");
  };

  return (
    <>
      <Layout>
        <div className="registerWrapper">
          <div>
            <div className="formHolder">
              <h1>Create Account</h1>
              <form onSubmit={handleUserRegister}>
                <input
                  type="text"
                  id="name"
                  name="email"
                  required="true"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  id="username"
                  name="username"
                  required="true"
                  placeholder="User Name"
                />
                <input
                  type="email"
                  required="true"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  required="true"
                  placeholder="Password"
                />
                <input type="submit" value="Create Account" />
                Already have an account?{" "}
                <a onClick={() => history.push("/login")}> Log In</a>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
