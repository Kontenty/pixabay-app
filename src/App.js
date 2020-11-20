import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Navbar from "./components/Navbar";
import Favs from "./components/Favs";

function Images({ images, isLoading, setTerm }) {
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

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("flowers");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&per_page=6`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Router>
          <Images
            isLoading={isLoading}
            images={images}
            setTerm={setTerm}
            path="/"
          />
          <Favs path="favs" />
        </Router>
      </div>
    </>
  );
}

export default App;
