import React, { useState, useEffect } from "react";
import Papa from 'papaparse';
import prevArrow from "../../assets/photos/prev arrow.png"
import nextArrow from "../../assets/photos/next arrow.png"
import './carousel.css'

const Carousel = () => {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const previousSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };


  useEffect(() => {
    Papa.parse("/Popular.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setSongs(result.data);
      } ,
      error: (error) => {
        console.error("Error while parsing CSV file:", error.message);
      }
    });
  }, []);


  // ...

return (
  <div className="carousel__container">
    <h1><span className="carousel__span">Popular Songs</span></h1>
    <div className="carousel">
      <button onClick={previousSong} className="carousel__buttons">
        <img src={ prevArrow } /> 
      </button>
      <div className="song__info">
        {songs.length > 0 ? ( // Add this check
          <>
            <p id="song__title">{songs[currentIndex].Title}</p>
            <p id="song__artist">{songs[currentIndex].Artist}</p>
          </>
        ) : (
          <p>Loading...</p> // Show a loading message or some placeholder
        )}
      </div>
      <button onClick={nextSong} className="carousel__buttons">
        <img src={ nextArrow } /> 
      </button>
    </div>
    
  </div>
);

// ...

}

export default Carousel


