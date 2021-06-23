import React, { useState, useEffect } from "react";
import Layout from "../../components/LayoutComps/Layout";
import "./login.css";

export default function Login(props) {
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <div className="loginWrapper">
          <div>
            <div className="formHolder">
              <h1>Log In</h1>
              <form>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <input type="submit" value="Log In" />
                Don't have an account? <a>Sign Up</a>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
