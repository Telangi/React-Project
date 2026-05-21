import React, {useState,useContext}from "react";

import {Link,useNavigate} from "react-router-dom";

import {AuthContext} from "../../Context/AuthContext";

import AuthLayout from "../../Components/Layouts/AuthLayout/AuthLayout";

import "./Login.scss";

const Login = () => {

  const navigate =
    useNavigate();

  const { login } =
    useContext(AuthContext);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const success = login(
      email,
      password
    );

    if (success) {

      alert(
        "Login Successful!"
      );

      navigate("/home");

    } else {

      setError(
        "Invalid Email or Password"
      );
    }
  };

  return (

    <AuthLayout>

      <div className="login-page">

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <h1>Movie World</h1>

          <p className="subtitle">
            Unlimited Movies, TV Shows & Trailers
          </p>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>

          <Link to="/signup">
            Don't have an account?
            Signup
          </Link>

        </form>

      </div>

    </AuthLayout>
  );
};

export default Login;