import styled from "styled-components";
import { variant, alignItems, boxShadow } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { buttonStyle, colorStyle, sizeStyle } from "../customVariant";
import { base } from "../base";

const ButtonStyle = styled.button`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 5.25rem;
  min-width: 25rem;
  border-radius: 0;
  font-family: inherit;
  font-size: 2.625rem;

  font-weight: 900;
  text-decoration: none;
  text-transform: capitalize;
  border: 0;
  transition: all 0.3s ease;
  border-width: 1px;
  border-style: solid;
  span.btn-text {
    // padding-left: ${themeGet("space.1", "4")}px;
    // padding-right: ${themeGet("space.1", "4")}px;
  }

  &:not([disabled]).dark {
    background-color: #000;
    border-color: #000;
    color: #fff;

    &:hover {
      background-color: #fff;
      border-color: #000;
      color: #000;
    }
  }

  &:not([disabled]).light {
    &:hover {
      background-color: black;
      border-color: white;
      color: white;
    }
  }

  &[disabled] {
    cursor: unset;
    color: black;
    background-color: #939393;
  }

  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:focus {
    outline: none;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: ${themeGet("space.2", "8")}px;
      padding-right: ${themeGet("space.2", "8")}px;
    }
  }

  /* Style system support */
  ${alignItems}
  ${boxShadow}
  ${buttonStyle}
  ${colorStyle}
  ${sizeStyle}
  ${base}
`;

export const LinkStyle = styled.a`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 7.114rem;
  min-width: 24.375rem;
  border-radius: 0;
  font-family: inherit;
  font-size: 2.625rem;
  text-decoration: none;
  text-transform: capitalize;
  border: 0;
  transition: all 0.3s ease;
  border-width: 1px;
  border-style: solid;
  span.btn-text {
    padding-left: 16px;
    padding-right: 16px;
  }
  background-color: #fff;
  color: #000;

  &:not([disabled]).dark {
    background-color: #000;
    border-color: #000;
    color: #fff;

    &:hover {
      background-color: #fff;
      border-color: #000;
      color: #000;
    }
  }

  &:not([disabled]).light {
    &:hover {
      background-color: black;
      border-color: white;
      color: white;
    }
  }

  &[disabled] {
    cursor: unset;
  }

  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:focus {
    outline: none;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: ${themeGet("space.2", "8")}px;
      padding-right: ${themeGet("space.2", "8")}px;
    }
  }

  /* Style system support */
  ${alignItems}
  ${boxShadow}
  ${buttonStyle}
  ${colorStyle}
  ${sizeStyle}
  ${base}
`;

// prop types can also be added from the style functions
ButtonStyle.propTypes = {
  ...alignItems.propTypes,
  ...boxShadow.propTypes,
  ...variant.propTypes,
};

ButtonStyle.displayName = "ButtonStyle";

export default ButtonStyle;
