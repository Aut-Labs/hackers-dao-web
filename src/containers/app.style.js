import styled, { createGlobalStyle } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;

    // @media only screen and (max-width: 1600px) {
    //   font-size: 62.8%;
    // }
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    // font-size: 16px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Source Sans Pro', sans-serif;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
  section {
    position: relative;
  }
  .reusecore__button {
    font-weight: 500;
  }
  .container {
    max-width: 1600px;
    @media only screen and (max-width: 1600px) {
      max-width: 1170px;
      padding-left: 0;
      padding-right: 0;
    }
    @media(max-width: 1199px) {
      padding-left: 30px;
      padding-right: 30px;
    }
    @media only screen and (max-width: 667px) {
      width: 100%;
    }
    @media only screen and (max-width: 667px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media only screen and (width: 375px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a {
            text-transform: uppercase;
            font-size: 1.25rem;
            font-weight: 400;
            color: #000;
            position: relative;
            transition: 0.15s ease-in-out;
            &:hover {
              text-shadow: 0 1px 0px #000;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #000;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: #000;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 1.625rem;
        color: #000;
        transform: rotate(45deg);
        display: block;
      }
    }
  }

  
  .sticky-nav-active {
    .sassminimal_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
      .main-logo {
        display: none;
      }
      .stricky-logo {
        display: block;
      }
      .main_menu li a {
        color: #000;
      }
      .main_menu li:hover a,
      .main_menu li.is-current a {
        text-shadow: 0 1px 0px #000;
      }
      .reusecore-drawer__handler {
        .hamburgMenu__bar {
          > span {
            // background-color: #0F2137;
            text-shadow: 0 1px 0px #000;
          }
        }
      }
    }
  }

  .sassminimal_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;

    .main-logo {
      display: block;
    }
    .stricky-logo {
      display: none;
    }
    .mainMenuWrapper {
      flex: 1 1 100%;
      justify-content: flex-end;

      @media (max-width: 991px) {
        flex: 0 0 auto;
        margin-left: auto;
      }
      
    }
    .main_menu {
      margin-right: 45px;
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            text-shadow: 0 1px 0px #ffffff;
          }
        }
        a {
          padding: 5px;
          transition: 0.15s ease-in-out;
          font-style: normal;
          font-weight: normal;
          font-size: 1.438rem;
          color: #000;
          text-transform: uppercase;
          &:hover {
            text-shadow: 0 1px 0px #000;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
          background-color: #000;
        }
      }
    }
  }

`;

export const AppWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .sticky-active {
    .navbar {
      padding: 20px 0 21px;
      background-color: ${themeGet("colors.white", "#ffffff")};
      @media only screen and (max-width: 1366px) {
        padding: 15px 0 16px;
      }
      .mobile-menu {
        top: 72px;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
  overflow: hidden;
`;

export const SectionHeader = styled.header`
  max-width: 550px;
  width: 100%;
  margin: 0 auto 85px;
  text-align: center;
  @media only screen and (max-width: 1600px) {
    margin-bottom: 60px;
  }
  p {
    font-weight: normal;
    line-height: 2;
    margin-bottom: 12px;
    color: ${themeGet("colors.textColor", "#343D48")};
  }
  h2 {
    font-size: 1.75rem;
    line-height: 1.3;
    font-weight: 500;
    color: ${themeGet("colors.headingColor", "#0F2137")};
    margin-bottom: 18px;
    letter-spacing: -0.5px;
    @media only screen and (max-width: 1600px) {
      letter-spacing: -0.7px;
      margin-bottom: 12px;
    }
    @media only screen and (max-width: 991px) {
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
  &.section-header-two {
    text-align: left;
    margin-top: -10px;
    margin-bottom: 40px;
    h2 {
      font-size: 2.5rem;
      line-height: 1.35;
      margin-bottom: 25px;
      letter-spacing: -0.5px;
    }
  }
`;

export const GradientWrapper = styled.section`
  flex: 1 0 auto;
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(
    180deg,
    rgba(246, 247, 249, 0) 0%,
    #f3f7fb 36.35%
  );
`;

export default GlobalStyle;
