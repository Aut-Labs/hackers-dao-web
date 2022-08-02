import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { base } from "../base";
import Slider from "rc-slider";

const SwSliderStyle = styled(Slider)`
  height: 30px;
  padding: 0;

  .rc-slider-rail, .rc-slider-track, .rc-slider-step {
    height: 30px;
    border-radius: 0;
  }

  .rc-slider-handle {
    transform: translate(-50%, -50%) !important;
    top: 50%;
    margin-top: 0;
  }
`;

export default SwSliderStyle;
