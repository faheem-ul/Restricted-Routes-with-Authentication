import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const handleSignupBtn = () => {
    // console.log("signup button clicked");
    navigate("/signup");
  };

  const handleLoginButton = () => {
    // console.log("login button clicked");
    navigate("/login");
  };

  return (
    <div className="homeDiv">
      <h1 className="mainHeading">Welcome to Our Website</h1>
      <h2 className="sub-mainHeading">This is home page.</h2>
      <p className="homePara">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        non, doloremque quod nesciunt quidem perspiciatis similique atque
        eveniet optio necessitatibus libero quisquam totam explicabo incidunt
        deserunt autem unde. Perspiciatis, fugiat?
      </p>

      <h3>If already has an account:</h3>
      <button className="HomeLoginBtn" onClick={handleLoginButton}>
        Login
      </button>

      <h3>New User:</h3>
      <button className="HomeSignupBtn" onClick={handleSignupBtn}>
        Sign Up
      </button>
    </div>
  );
}

export default Home;
