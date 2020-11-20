import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Favs from "./components/Favs";
import Images from "./components/Images";

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
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <div className="container mx-auto">
          <Route exact path="/">
            <Images isLoading={isLoading} images={images} setTerm={setTerm} />
          </Route>
          <Route path="/favourite">
            <Favs />
          </Route>
        </div>
      </Router>
    </>
  );
}

export default App;
