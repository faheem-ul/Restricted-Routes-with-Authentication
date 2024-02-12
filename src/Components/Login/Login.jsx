import React, { useEffect, useState, useContext } from "react";
import { setUserInLocalStorageonLogin } from "../../utils/LocalStorage/LocalStorage";
import UseGetUsers from "../../hooks/UseGetUsers";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import AuthedContext from "../../Context/Context";
import AuthedContextProvider from "../../Context/AuthedContext";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { users, loading } = UseGetUsers();
  const navigate = useNavigate();

  const { user } = useContext(AuthedContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // console.log(users);
    users.find((user) => {
      if (user.email === loginEmail && user.password === loginPassword) {
        setUserInLocalStorageonLogin(user);
        navigate("/users");
        toast.success(
          "Logged in successfully",
          console.log("toast success is working")
        ),
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
          };
      } else {
        toast.error(
          "Email or password is incorrect",
          console.log("toast error is working")
        ),
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
          };
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
      <ToastContainer />
    </div>
  );
}

export default Login;
