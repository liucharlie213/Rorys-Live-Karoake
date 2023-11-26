import React, { useState, useEffect } from "react";
import Papa from 'papaparse';
import prevArrow from "../../assets/photos/prev arrow.png"
import nextArrow from "../../assets/photos/next arrow.png"
import './carousel.css'


const Carousel = () => {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);
  
  const nextSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex + displayCount) % songs.length);
  };

  const previousSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex - displayCount + songs.length) % songs.length);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(2); 
      } else {
        setDisplayCount(3); 
      }
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  


  // ...

return (
  <section id="carousel">
  <div className="carousel__container">
    <span id="blank__space">blankspace</span>
    <p className="carousel__quote">PICK A FAN FAVOURITE...</p>
    <div className="carousel">
      <button onClick={previousSong} className="carousel__buttons" alt=" ">
        <img src={ prevArrow } alt=" "/> 
      </button>
      <div className="song__info">
        {songs.length > 0 ? ( 
          <div className="song__carousel">
          {songs
            .slice(currentIndex, currentIndex + displayCount) // Get a slice of 3 songs
            .map((song, index) => (
              <div key={index} className="song__entry">
                <img src={song.Cover} alt={song.Title} id="song__cover"/>
                <div className="song__text">
                  <p id="song__title">{song.Title}</p>
                  <p id="song__artist">{song.Artist}</p>
                </div>
              </div>
          ))}
        </div>
        ) : (
          <p>Loading...</p> 
        )}
      </div>
      <button onClick={nextSong} className="carousel__buttons">
        <img src={ nextArrow } alt=" " /> 
      </button>
    </div>
    
  </div>
  </section>
);


}

export default Carousel

