import React from "react"
import Nav from "./components/nav/Nav"
import Landing from "./components/landing/Landing"
// import Carousel from "./components/carousel/Carousel"
import Gallery from "./components/gallery/Gallery"
import Search from "./components/search/Search"
// import "./App.css"
import "./index.css"


function App() {
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
