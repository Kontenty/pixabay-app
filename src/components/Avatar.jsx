import React from "react";

const Avatar = ({ userUrl }) => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden">
      {userUrl ? (
        <img src={userUrl} alt="user_img" />
      ) : (
        <div className="w-10 h-10 bg-gray-400" />
      )}
    </div>
  );
};

export default Avatar;
