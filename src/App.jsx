import React from "react";

import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const linkstyle = {
    color: "red",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px",
  };
  return (
    <div className="nav">
      <Router>
        <Link to="/home" style={linkstyle}>
          Home Page
        </Link>
        <Link to="/users" style={linkstyle}>
          Users
        </Link>
        <Link to="/adduser" style={linkstyle}>
          Add User
        </Link>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
