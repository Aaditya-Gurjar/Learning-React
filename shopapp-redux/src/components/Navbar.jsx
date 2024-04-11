import React from "react";
// import Logo from "./logo.png";
import { BsCartCheckFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" flex flex-row justify-between">
      <NavLink to="/">
        <div>
          <img src="/logo.png" width={130} alt="" />
        </div>
      </NavLink>
      <div>
        <NavLink to="/">
          <p>HOME</p>
        </NavLink>

        <NavLink to="/cart">
          <div>
            <BsCartCheckFill />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
