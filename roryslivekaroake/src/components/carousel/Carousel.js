import React, { useState, useEffect } from "react";
import Papa from 'papaparse';
import prevArrow from "../../assets/photos/prev arrow.png"
import nextArrow from "../../assets/photos/next arrow.png"
import './carousel.css'


const Carousel = () => {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % songs.length);
  };

  const previousSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + songs.length) % songs.length);
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
  <section id="carousel">
  <div className="carousel__container">
    <span id="blank__space">blankspace</span>
    <p className="carousel__quote">PICK A FAN FAVOURITE...</p>
    {/* <p className="carousel__title"><span className="carousel__span">Popular Songs</span></p> */}
    <div className="carousel">
      
      <div className="song__info">
        {songs.length > 0 ? ( 
          <div className="song__carousel">
          {songs
            .slice(currentIndex, currentIndex + 3) // Get a slice of 3 songs
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
      
    </div>
    
  </div>
  </section>
);


}

export default Carousel




// const Carousel = () => {
//   const [songs, setSongs] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const nextSong = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
//   };

//   const previousSong = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
//   };


//   useEffect(() => {
//     Papa.parse("/Popular.csv", {
//       download: true,
//       header: true,
//       complete: (result) => {
//         setSongs(result.data);
//       } ,
//       error: (error) => {
//         console.error("Error while parsing CSV file:", error.message);
//       }
//     });
//   }, []);


//   // ...

// return (
//   <section id="carousel">
//   <div className="carousel__container">
//     <span id="blank__space">blankspace</span>
//     <p className="carousel__quote">PICK A FAN FAVOURITE...</p>
//     {/* <p className="carousel__title"><span className="carousel__span">Popular Songs</span></p> */}
//     <div className="carousel">
//       <button onClick={previousSong} className="carousel__buttons">
//         <img src={ prevArrow } /> 
//       </button>
//       <div className="song__info">
//         {songs.length > 0 ? ( // Add this check
//           <>
//             <img src={songs[currentIndex].Cover} id="song__cover"/>
//             <div className="song__text">
//               <p id="song__title">{songs[currentIndex].Title}</p>
//               <p id="song__artist">{songs[currentIndex].Artist}</p>
//             </div>
            
//           </>
//         ) : (
//           <p>Loading...</p> // Show a loading message or some placeholder
//         )}
//       </div>
//       <button onClick={nextSong} className="carousel__buttons">
//         <img src={ nextArrow } /> 
//       </button>
//     </div>
    
//   </div>
//   </section>
// );


// }

// export default Carousel


