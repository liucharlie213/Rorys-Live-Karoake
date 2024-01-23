import React from "react"
import musicIcon from "../../assets/icons/itunes.png"
import image1 from "../../assets/photos/RorysLK image1.png"
import "./landing.css"


const Landing = () => {


  return (
    <section id="landing">
      <div className="landing__page" >
        <div className="landing__text">
          <p id="landing__quote">LIVE <span className="landing__highlight">ACOUSTIC</span> KARAOKE</p>
          <p id="landing__info">750+ songs, full lyric projection. Taking bookings now for parties and business events. Singing along is a state of mind.</p>
          <div className="landing__btns">
            <a href="mailto:karaoke@rorychambers.com?subject=Booking%20Inquiry&amp;body=Please%20include%20the%20following%20details%3A%0A%0ADate%3A%0ALocation%3A%0AEvent%20Type%3A%0ATime%20and%20Length%20of%20Performance%3A%0ANumber%20of%20Guests%3A%0APA%20system%20required%20yes%2Fno%3A%0AWhere%20did%20you%20see%2Fhear%20about%20Rory's%20Live%20Karaoke%3A" target="_blank" className="landing__btn" id="book__btn">
              Book
            </a>
            <a href="#search" className="landing__browse">
              <div id="landing__btn"> 
                <img src={musicIcon} className="landing__icon"></img>
              </div>
              <div className="landing__btn" id="browse__btn">Browse Songs</div>
            </a>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Landing
