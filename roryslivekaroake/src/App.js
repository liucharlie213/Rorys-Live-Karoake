import React from "react"
import { useEffect } from "react"
import Nav from "./components/nav/Nav"
import Landing from "./components/landing/Landing"
// import Carousel from "./components/carousel/Carousel"
import Gallery from "./components/gallery/Gallery"
import Carousel from "./components/carousel/Carousel"
import Search from './components/search/Search.js'
import "./App.css"
import "./index.css"


function App() {
  return (
    <div className="fadeInUp">
      <Nav />
      <Landing />
      <Gallery />
      <Carousel />
      <Search />
    </div>
  );
}

export default App;
