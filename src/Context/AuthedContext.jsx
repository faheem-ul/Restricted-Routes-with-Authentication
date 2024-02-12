import AuthedContext from "./Context";
import { React, useState, useEffect } from "react";

const AuthedContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const LoginStringuser = localStorage.getItem("LoginUser");
    // console.log("stringUser", Stringuser);
    const SignupStringuser = localStorage.getItem("SignUpUser");
    // console.log("SignupStringuser", SignupStringuser);
    const LoginuserfromStorage = JSON.parse(LoginStringuser);
    // console.log("Loginuser from Storage", LoginuserfromStorage);
    const SignupuserfromStorage = JSON.parse(SignupStringuser);
    // console.log("Signupuser from Storage", SignupuserfromStorage);

    if (LoginuserfromStorage || SignupuserfromStorage) {
      setUser(LoginuserfromStorage || SignupuserfromStorage);
      console.log(user);
    } else {
      setUser(null);
    }
  }, []);

  return (
    <AuthedContext.Provider value={{ user }}>{children}</AuthedContext.Provider>
  );
};

export default AuthedContextProvider;
