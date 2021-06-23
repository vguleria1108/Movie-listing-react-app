import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/LayoutComps/Layout";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import {
  check_login,
  showNotification,
  validateUserName,
} from "../../utils/common.util";
import "./register.css";

export default function Register(props) {
  const history = useHistory();

  const [charLengthValid, setCharLengthValid] = useState(false);
  const [specialCharValid, setSpecialCharValid] = useState(false);
  const [uppercaseValid, setUpperCaseValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);
  const [password, setPassword] = useState(false);

  useEffect(() => {
    //check if user is logged in
    if (check_login()) {
      showNotification("success", "You are already logged in");
      history.push("/dashboard");
    }
  }, []);

  const handleUserRegister = (e) => {
    e.preventDefault();
    if (!validateUserName(e?.target?.username?.value)) {
      showNotification(
        "error",
        "Username can contain only small letters and underscores."
      );
      return;
    }
    if (password === e?.target?.c_password?.value) {
      if (getPassStrength() !== "Strong") {
        showNotification("error", "Please choose a strong password");
      } else {
        showNotification("success", "Registeration successfull, please login");
        history.push("/login");
      }
    } else
      showNotification("error", "Password and confirm password should be same");
  };

  const validatePassword = (e) => {
    setPassword(e?.target?.value);
    checkPasswordLength(e?.target?.value);
    checkSpecialCharacters(e?.target?.value);
    checkUppercase(e?.target?.value);
    checkNumber(e?.target?.value);
  };

  //Function to check length of password
  const checkPasswordLength = (password) => {
    if (password.length >= 8) {
      setCharLengthValid(true);
    } else {
      setCharLengthValid(false);
    }
  };

  //Function to check for special characters
  const checkSpecialCharacters = (password) => {
    const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    if (pattern.test(password)) {
      setSpecialCharValid(true);
    } else {
      setSpecialCharValid(false);
    }
  };

  //Function to check for an uppercase character
  const checkUppercase = (password) => {
    const pattern = /[A-Z]/;
    if (pattern.test(password)) {
      setUpperCaseValid(true);
    } else {
      setUpperCaseValid(false);
    }
  };

  //Function to check for a number
  const checkNumber = (password) => {
    const pattern = /[0-9]/;
    if (pattern.test(password)) {
      setNumberValid(true);
    } else {
      setNumberValid(false);
    }
  };

  //Function to get password strength
  const getPassStrength = () => {
    let val = charLengthValid + specialCharValid + uppercaseValid + numberValid;
    switch (val) {
      case 3:
        return "Better";
      case 4:
        return "Strong";
      case 0:
      case 1:
      case 2:
        return "Weak";
    }
  };

  const passwordValidation = () => {
    return password &&
      password.length > 0 &&
      (!charLengthValid ||
        !specialCharValid ||
        !uppercaseValid ||
        !numberValid) ? (
      <div className="validation">
        Your password strength is: <strong>{getPassStrength()}</strong>
        <div className="validator">
          {charLengthValid ? (
            <CheckCircleOutlined className="success" />
          ) : (
            <CloseCircleOutlined className="error" />
          )}
          <span className="validation-item">More than 8 characters</span>
        </div>
        <div className="validator">
          {specialCharValid ? (
            <CheckCircleOutlined className="success" />
          ) : (
            <CloseCircleOutlined className="error" />
          )}
          <span className="validation-item">Special character</span>
        </div>
        <div className="validator">
          {uppercaseValid ? (
            <CheckCircleOutlined className="success" />
          ) : (
            <CloseCircleOutlined className="error" />
          )}
          <span className="validation-item">Upper-case</span>
        </div>
        <div className="validator">
          {numberValid ? (
            <CheckCircleOutlined className="success" />
          ) : (
            <CloseCircleOutlined className="error" />
          )}
          <span className="validation-item">Number</span>
        </div>
      </div>
    ) : (
      ""
    );
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
                  onChange={validatePassword}
                />
                {passwordValidation()}
                <input
                  type="password"
                  id="c_password"
                  name="c_password"
                  required="true"
                  placeholder="Confirm Password"
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
