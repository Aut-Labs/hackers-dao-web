import React from "react";
import CardSliderStyle, {BulletButton} from "./card-slider.style";
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_left_twotone} from 'react-icons-kit/md/ic_keyboard_arrow_left_twotone';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <BulletButton
      className={className+ ' right'}
      onClick={onClick}
    >
        <Icon size={18} icon={ic_keyboard_arrow_right} />
    </BulletButton>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <BulletButton
      className={className + ' left'}
      onClick={onClick}
    >
        <Icon size={18} icon={ic_keyboard_arrow_left_twotone} />
    </BulletButton>
  );
}

const settings = {
  className: "slider variable-width",
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CardSlider = ({ className, children }) => {
  return (
    <CardSliderStyle className={className} {...settings}>
      {children}
    </CardSliderStyle>
  );
};
export default CardSlider;
