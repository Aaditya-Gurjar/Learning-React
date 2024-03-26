import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Home";

function MainHeader() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MainHeader;
