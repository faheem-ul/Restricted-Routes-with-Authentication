import axios from "axios";
import React, { useState } from "react";
import "./AddUser.css";

function AddUser() {
  const [newUserName, setNewuserName] = useState("");
  const [newUserEmail, setNewuserEmail] = useState("");
  const [newUserPhone, setNewuserPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: newUserName,
      email: newUserEmail,
      number: newUserPhone,
    };

    axios
      .post("http://localhost:3000/users", newUser)
      .then((response) => {
        console.log("new user added:", response);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }

  function handleNameChange(e) {
    setNewuserName(e.target.value);
  }
  function handleEmailChange(e) {
    setNewuserEmail(e.target.value);
  }
  function handlePhoneChange(e) {
    setNewuserPhone(e.target.value);
  }

  return (
    <div className="adduser">
      <h1 className="mainheading">
        A new user can been added bu submitting the form, which can be viewed in
        the console section.
      </h1>
      <form className="userforms" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of new user"
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Email of new user"
          onChange={handleEmailChange}
        />
        <input
          type="number"
          placeholder="Contact number of new user"
          onChange={handlePhoneChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
