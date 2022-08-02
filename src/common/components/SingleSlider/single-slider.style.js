import styled from "styled-components";
import Slider from "react-slick";

const SingleSliderStyle = styled(Slider)`
  transition: all 0.3s ease 0s;
  &:hover {
    .slick-arrow {
      visibility: visible;
    }
  }
`;

export default SingleSliderStyle;
