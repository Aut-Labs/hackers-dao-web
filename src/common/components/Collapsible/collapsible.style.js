const { default: Collapsible } = require("react-collapsible");
const { default: styled } = require("styled-components");

const SwCollapsibleStyle = styled.div`
  width: 28.375rem;
  //   background-color: #fff;

  //   .Collapsible__trigger {
  //     display: flex;
  //     align-items: center;
  //     height: 3.125rem;
  //     font-size: 1.125rem;
  //   }

  .Collapsible {
    background-color: white;
    border: 1px solid #000;
  }

  + .sw-collapsible {
    margin-top: 1.5rem;
  }

  //The content within the collaspable area
  .Collapsible__contentInner {
    padding: 10px;
    border: 1px solid $lightGrey;
    border-top: 0;
  }

  .Collapsible__trigger {
    color: #000;
    display: block;
    font-weight: 400;
    text-decoration: none;
    position: relative;
    padding: 10px;
    font-size: 1.125rem;
    height: 3.125rem;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;

    &.is-disabled {
      opacity: 0.5;
      background-color: grey;
    }

    &.is-open {
      .trigger-icon {
        transform: rotateZ(180deg);
      }
    }
  }
`;

export default SwCollapsibleStyle;
