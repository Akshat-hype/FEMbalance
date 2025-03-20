import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ImageSlider.css"; // Import CSS file

const ImageSlider = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  return (
    <div className="slider-container">
      {/* Swiper Slider */}
      <Swiper loop={true} className="slider">
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Bottom Buttons */}
      <div className="button-container">
        <button className="button button-blue">Button 1</button>
        <button className="button button-green">Button 2</button>
      </div>
    </div>
  );
};

export default ImageSlider;
