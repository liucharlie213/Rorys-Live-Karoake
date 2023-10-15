import React from "react"
import Slider from "react-slick";
import image1 from "../../assets/photos/RorysLK image1.png"
import image2 from "../../assets/photos/RorysLK image2.png"

const Carousel = () => {
  const images = [
    { 
      src: image1,
      // description: "image 1" 
    },
    {
      src: image2,
      // description: "image 2"
    }
      // },
    // {
    //   src: {image3},
    //   description: "image 3"
    // }
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <p>hello</p>
  )
}

export default Carousel


