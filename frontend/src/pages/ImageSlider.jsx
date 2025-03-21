import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ImageSlider.css"; // Import CSS file

const ImageSlider = () => {
  const images = [
    ".\assets\image1.webp",
    ".\assets\image2.webp",
    
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
        <button className="button button-blue">Create an account</button>
        <button className="button button-green">Already have an account</button>
      </div>
    </div>
  );
};

export default ImageSlider;
