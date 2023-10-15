import React from "react"
import image1 from "../../assets/photos/RorysLK image1.png"
import image2 from "../../assets/photos/RorysLK image2.png"
import image3 from "../../assets/photos/RorysLK image3.png"
import "./gallery.css"

const Gallery = () => {
  return (
    <div className="gallery">
        <span className="gallery__background">
          <div className="gallery__photos">
            <img src={image1} className="gallery__photo"></img>
            <img src={image2} className="gallery__photo"></img>
            <img src={image3} className="gallery__photo"></img> 
          </div>
        </span>
      

    </div>

  )
}

export default Gallery