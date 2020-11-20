import React from "react";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";

export default function Images({ images, isLoading, setTerm }) {
  return (
    <>
      <ImageSearch onSearch={setTerm} />
      {isLoading ? (
        <h1 className="text=6xl text-center mx-auto mt-32">Loading</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.length > 0 &&
            images.map((image) => <ImageCard key={image.id} img={image} />)}
        </div>
      )}
    </>
  );
}
