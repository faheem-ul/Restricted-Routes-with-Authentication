import { React, useState } from "react";
import axios from "axios";
import { setUserInLocalStorageonSignUp } from "../../utils/LocalStorage/LocalStorage";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [userEmail, setUsersEmail] = useState("");
  const [userPassword, setUsersPassword] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email: userEmail,
      password: userPassword,
      number: userNumber,
    };

    axios
      .post("http://localhost:3000/users", newUser)
      .then((res) => console.log("new user added", res))
      .catch((err) => console.log("error in adding new user", err));

    setUserInLocalStorageonSignUp(userEmail, userPassword, userNumber);
    navigate("/users");
  };

  const handleEmailChange = (e) => {
    setUsersEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUsersPassword(e.target.value);
  };

  const handleNumberChange = (e) => {
    setUserNumber(e.target.value);
  };
  return (
    <div className="signupDiv">
      <h1 className="signupMainHeading"> SignUp Page</h1>
      <form onSubmit={handleSubmit} className="signupForm">
        <input type="email" placeholder="email" onChange={handleEmailChange} />
        <input
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <input
          type="number"
          placeholder="contact Number"
          onChange={handleNumberChange}
        />
        <button className="signupSubmitbtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
