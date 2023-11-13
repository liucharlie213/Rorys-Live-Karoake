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
      // Check if the screen width is less than a certain value, e.g., 768px for tablets
      if (window.innerWidth < 768) {
        setDisplayCount(2); // Show 2 songs on smaller screens
      } else {
        setDisplayCount(3); // Show 3 songs on larger screens
      }
    };
  
    // Call the function initially and also add the event listener
    handleResize();
    window.addEventListener('resize', handleResize);
  
    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  


  // ...

return (
  <section id="carousel">
  <div className="carousel__container">
    <span id="blank__space">blankspace</span>
    <p className="carousel__quote">PICK A FAN FAVOURITE...</p>
    {/* <p className="carousel__title"><span className="carousel__span">Popular Songs</span></p> */}
    <div className="carousel">
      <button onClick={previousSong} className="carousel__buttons">
        <img src={ prevArrow } /> 
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
          <p>Loading...</p> // Show a loading message or some placeholder
        )}
      </div>
      <button onClick={nextSong} className="carousel__buttons">
        <img src={ nextArrow } /> 
      </button>
    </div>
    
  </div>
  </section>
);


}

export default Carousel

