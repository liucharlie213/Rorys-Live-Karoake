import React from "react"
import musicIcon from "../../assets/icons/itunes.png"
import image1 from "../../assets/photos/RorysLK image1.png"
import "./landing.css"

const Landing = () => {
  return (
    <div className="landing__page" >
      <div className="landing__text">
        <p id="landing__quote">Live <span className="landing__highlight">Acoustic</span> Karaoke</p>
        <p id="landing__info">750+ songs, full lyric projection. Taking bookings now for parties and business events. Singing along is a state of mind.</p>
        <div className="landing__btns">
          <button className="landing__btn" id="book__btn">Book</button>
          {/* add href for browse songs button to scroll to songs page */}
          <div className="landing__browse">
            <a className="landing__btn"> 
              <img src={musicIcon} className="landing__icon"></img>
            </a>
          <a className="landing__btn" id="browse__btn">Browse Songs</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
