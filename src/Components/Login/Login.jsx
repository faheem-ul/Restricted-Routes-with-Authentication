import React, { useEffect, useState } from "react";
import { setUserInLocalStorageonLogin } from "../../utils/LocalStorage/LocalStorage";
import UseGetUsers from "../../hooks/UseGetUsers";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { users, loading } = UseGetUsers();
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // console.log(users);
    users.find((user) => {
      if (user.email === loginEmail && user.password === loginPassword) {
        setUserInLocalStorageonLogin(user);
        navigate("/users");
      }
    });
  };

  const hanndleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };

  const hanndleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  return (
    <div className="loginDiv">
      <h1 className="loginHeading">Login Page</h1>

      <form onSubmit={handleLoginSubmit} className="loginForm">
        <input type="text" placeholder="email" onChange={hanndleLoginEmail} />
        <input
          type="password"
          placeholder="password"
          onChange={hanndleLoginPassword}
        />
        <button type="submit" className="loginSubmitBtn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
