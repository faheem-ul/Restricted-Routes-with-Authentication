import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function UseGetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      // console.log("users fetched successfully", response.data);
      setUsers(response.data);
    } catch (error) {
      console.log("error in fetching users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchUsers();
  }, []);

  if (loading) {
    return { loading };
  }

  return { users };
}

export default UseGetUsers;
