import styled from "styled-components";
import Slider from "react-slick";

const CardSliderStyle = styled(Slider)`
  transition: all 0.3s ease 0s;
  &:hover {
    .slick-arrow {
      visibility: visible;
    }
  }
`;

export const BulletButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  min-width: 48px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;
  border: 0px;
  width: 40px;
  height: 40px;
  padding: 0px;
  border-radius: 50%;
  justify-content: center;
  background: #000;
  color: #fff;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  position: absolute;
  z-index: 999;
  top: 50%;
  transform: translateY(-50%);
  visibility: hidden;

  &:hover {
    background-color: #fff;
    color: #000;
    border-color: #000;
  }

  &.right {
    right: 0;
  }

  &.left {
    left: 0;
  }
`;

export default CardSliderStyle;
