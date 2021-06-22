import React, { useState, useEffect } from "react";
import "./register.css";

export default function Register(props) {
  useEffect(() => {}, []);
  return (
    <>
      <div className="registerWrapper">
        <div>
          <div className="formHolder">
            <h1>Create Account</h1>
            <form>
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
              Already have an account? <a> Log In</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
