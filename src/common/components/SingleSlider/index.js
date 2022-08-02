import React from "react";
import SingleSliderStyle from "./single-slider.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const settings = {
  nextArrow: null,
  prevArrow: null,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SingleSlider = ({ className, children }) => {
  return (
    <Swiper
      className={className}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};
export default SingleSlider;
