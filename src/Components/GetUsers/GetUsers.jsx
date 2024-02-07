import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GetUsers.css";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    try {
      const response = await axios.get("http://localhost:3000/users");
      console.log("Users fetched successfully:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div>
        <h3>Loading ....</h3>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mainheadingUsers">Users from the server are ...</h1>
      <ul className="users">
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/userdetails/${index}`}>{user.name} </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetUsers;
