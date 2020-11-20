import React from "react";
import marguerite from "../assets/images/marguerite.jpg";
import sunrise from "../assets/images/sunrise.jpg";

const Favs = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img src={marguerite} alt="marguerite" className="w-full" />
      </div>
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img src={sunrise} alt="sunrise" />
      </div>
    </div>
  );
};

export default Favs;
