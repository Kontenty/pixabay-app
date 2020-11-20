import React from "react";

const Favs = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img
          src="./marguerite-51e2dc464b_640.jpg"
          alt="img"
          className="w-full"
        />
      </div>
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img src="./sunrise-57e0d4474d_640.jpg" alt="img" className="w-full" />
      </div>
    </div>
  );
};

export default Favs;
