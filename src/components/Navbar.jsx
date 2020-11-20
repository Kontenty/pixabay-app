import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex px-8 py-2 bg-blue-900 text-white">
      <h1 className="text-4xl text-center text-white">Pixabay images</h1>
      <div className="flex items-center ml-10">
        <NavLink className="ml-4" to="/">
          image search
        </NavLink>
        <NavLink className="ml-4" to="/favourite">
          liked images
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
