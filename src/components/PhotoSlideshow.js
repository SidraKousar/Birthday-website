import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoSlideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div><img src="photo1.jpg" alt="Memory 1" /></div>
      <div><img src="photo2.jpg" alt="Memory 2" /></div>
      <div><img src="photo3.jpg" alt="Memory 3" /></div>
    </Slider>
  );
};

export default PhotoSlideshow;
