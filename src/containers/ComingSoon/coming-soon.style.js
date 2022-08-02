import styled from "styled-components";
const BannerArea = styled.section`
  background-color: #000;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-animation {
    position: absolute;
    top: 70px;
    right: 70px;
  }

  .text-animation {
    position: absolute;
    width: 100%;
    max-width: 636px;
    text-align: right;
  }

  .coming-soon-text {
    text-align: center;
    font-weight: bold;
    letter-spacing: 8px;
    color: white;
    font-size: 40px;
  }

  .coming-soon-link {
    color: white;
    font-size: 20px;
    text-decoration: underline;
    margin-right: 10px;
    margin-top: 10px;
    cursor: pointer;
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    grid-gap: 2rem;
    position: absolute;
    bottom: 75px;
    right: 75px;

    img {
      height: 20px;
    }
  }

  @media (max-width: 576px) {
    .logo-animation {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
    }

    .text-animation {
      padding: 15px;

      .coming-soon-text {
        font-size: 25px;
      }
    }

    .coming-soon-link {
      font-size: 16px;
      margin-right: 30px;
    }

    .social-links {
      left: 50%;
      right: auto;
      transform: translateX(-50%);

      img {
        height: 20px;
      }
    }
  }
`;

export default BannerArea;
