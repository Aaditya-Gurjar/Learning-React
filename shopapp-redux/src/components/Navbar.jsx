import React from "react";
import { useSelector } from "react-redux";
import { BsCartCheckFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className=" flex  justify-between items-center h-20 max-w-6xl mx-auto ">
        <NavLink to="/">
          <div className=" ml-5">
            <img src="/logo.png" width={130} alt="" />
          </div>
        </NavLink>
        <div className=" flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>HOME</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <BsCartCheckFill className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-green-600 text-xs w-5 h-5 rounded-full  flex justify-center items-center text-center text-white animate-bounce ">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
