import React from "react";
import Template from "../Components/Template";
import loginImg from "../assets/login.png";

function Login({setIsLoggedIn}) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build Skills for today, tomorrow and beyond"
      desc2="Education to future proof your career"
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
