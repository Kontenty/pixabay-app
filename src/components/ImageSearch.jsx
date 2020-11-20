import React, { useState } from "react";

const ImageSearch = ({ onSearch }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-b2 border-teal-500 py-2">
          <input
            type="text"
            className="apperance-none bg-ransparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Search image"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 border-teal-500 hover:bg-teal-700 hover:border-teal-700 text-sm border-4 text-white rounded px-2"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
