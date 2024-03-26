import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/support");
  }
  return (
    <div>
      THis is about page
      <br />
      <button onClick={clickHandler}>Move to support Page</button>
    </div>
  );
}

export default About;
