import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ImageSlider.css";

const ImageSlider = () => {
  const navigate = useNavigate();

  return (
    <div className="slider-container">
      <Swiper loop={true} className="slider">
        <SwiperSlide>
          <img src=".assetsimage1.webp" alt="Slide 1" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".assetsimage2.webp" alt="Slide 2" className="slide-image" />
        </SwiperSlide>
      </Swiper>

      <div className="button-container">
        <button
          className="button button-blue"
          onClick={() => navigate("/login")}
        >
          Create an account
        </button>
        <button
          className="button button-green"
          onClick={() => navigate("/login")}
        >
          Already have an account
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
