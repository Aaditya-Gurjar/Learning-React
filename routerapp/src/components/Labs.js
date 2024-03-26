import React from "react";
import { useNavigate } from "react-router-dom";

function Labs() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/about");
  }
  return (
    <div>
      Labs Page <br />
      <button onClick={clickHandler}>Move to About Page</button>
    </div>
  );
}

export default Labs;
