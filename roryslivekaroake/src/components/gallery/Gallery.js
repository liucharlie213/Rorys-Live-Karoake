import React, { useState} from "react"
import image1 from "../../assets/photos/RorysLK image1.png"
import image2 from "../../assets/photos/RorysLK image2.png"
import image3 from "../../assets/photos/RorysLK image3.png"
import image4 from "../../assets/photos/RorysLK image4.png"
import image5 from "../../assets/photos/RorysLK image5.png"
import prevArrow from "../../assets/photos/prev arrow.png"
import nextArrow from "../../assets/photos/next arrow.png"
import "./gallery.css"

const Gallery = () => {

  const photos = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhotoPhone = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const previousPhotoPhone = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };
  

  return (
    <div className="gallery">
        {/* <p className="gallery__title">Gallery</p> */}
        <div className="computer__gallery">
          <div className="gallery__photos">
            <img src={image1} className="gallery__photo" alt=""></img>
            <img src={image2} className="gallery__photo" alt=""></img>
            <img src={image3} className="gallery__photo" alt=""></img> 
          </div>
        </div>

        <div className="phone__gallery">
          <div className="gallery__photo">
            <img src={photos[currentIndex]} alt="" id="phone__image"></img>
          </div>
          <div className="gallery__buttons">
              <button onClick={previousPhotoPhone} className="gallery__button">
                <img src={ prevArrow } alt="" /> 
              </button>
              <button onClick={nextPhotoPhone} className="gallery__button">
                <img src={ nextArrow } alt=""/> 
              </button>
            </div>
        </div>
        
      

    </div>

  )
}

export default Gallery