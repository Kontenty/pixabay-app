import React from "react";
import Avatar from "./Avatar";

const ImageCard = ({ img }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img src={img.webformatURL} alt="img" className="w-full" />
      <div className="px-6 py-4">
        <div className="flex items-center font-bold text-purple-500 text-xl mb-2">
          <span className="pr-2">Photo by {img.user}</span>
          <Avatar userUrl={img.userImageURL} />
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {img.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {img.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {img.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {img.tags.split(", ").map((tag, index) => (
          <span
            key={`${tag}_${index}`}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
