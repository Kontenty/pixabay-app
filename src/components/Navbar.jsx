import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <div className=" flex px-8 py-2 bg-blue-900 text-white">
      <h1 className="text-4xl text-center text-white">Pixabay images</h1>
      <div className="flex items-center ml-10">
        <Link className="ml-4" to="/">
          image search
        </Link>
        <Link className="ml-4" to="favs">
          liked images
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
