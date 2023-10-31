import React from "react"
import { useEffect } from "react"
import Nav from "./components/nav/Nav"
import Landing from "./components/landing/Landing"
// import Carousel from "./components/carousel/Carousel"
import Gallery from "./components/gallery/Gallery"
import Search from './components/search/Search.js';
// import "./App.css"
import "./index.css"


function App() {
  // useEffect(() => {
  //   document.addEventListener("DOMContentLoaded", function() {
  //     const textElements = document.querySelectorAll(".floating-text");
  //     textElements.forEach(function(element) {
  //       element.classList.add("animate");
  //     });
  //   });
  // });
  return (
    <>
      <Nav />
      <Landing />
      <Gallery />
      <Search />
    </>
  );
}

export default App;
