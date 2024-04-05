import React from "react";
import signupImg from "../assets/signup.png";
import Template from "../Components/Template";

function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="Join the millions learning to code"
      desc1="Build Skills for today, tomorrow and beyond"
      desc2="Education to future proof your career"
      image={signupImg}
      formType="signUp"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
