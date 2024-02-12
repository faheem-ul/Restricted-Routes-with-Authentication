import { React, useState, useContext } from "react";
import axios from "axios";
import { setUserInLocalStorageonSignUp } from "../../utils/LocalStorage/LocalStorage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";
import AuthedContext from "../../Context/Context";
import AuthedContextProvider from "../../Context/AuthedContext";

function SignUp() {
  const [userEmail, setUsersEmail] = useState("");
  const [userPassword, setUsersPassword] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const navigate = useNavigate();

  const { user } = useContext(AuthedContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email: userEmail,
      password: userPassword,
      number: userNumber,
    };

    axios
      .post("http://localhost:3000/users", newUser)
      .then((res) => {
        setUserInLocalStorageonSignUp(userEmail, userPassword, userNumber);
        // toast.success("Signup successful!", {
        //   position: toast.POSITION.TOP_CENTER,
        //   autoClose: 3000,
        // })

        console.log("new user added", res);
        navigate("/users");
      })

      .catch((err) => console.log("error in adding new user", err));
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
      <ToastContainer />
    </div>
  );
}

export default SignUp;
