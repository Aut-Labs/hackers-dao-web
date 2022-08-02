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

  .manifesto-title {
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 28px;
    margin-bottom: 40px;
  }

  .manifesto-subtitle {
    text-align: center;
    color: white;
    font-size: 24px;
  }

  .manifesto-email {
    text-align: center;
    font-weight: 300;
    color: white;
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 70px;
  }

  @media (max-width: 576px) {
    .manifesto-title {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .manifesto-subtitle {
      font-size: 14px;
    }

    .manifesto-email {
      font-size: 14px;
      margin-top: 20px;
      margin-bottom: 40px;
    }

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
