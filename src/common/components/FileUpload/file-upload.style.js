import styled from "styled-components";

const UploadWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 94px;
  height: 94px;

  img {
    width: 90px;
    height: 90px;
  }

  opacity: 1;
  transition: all .3s;
  backface-visibility: hidden;
  border: 2px solid #000;
  background: #fff;
  box-sizing: border-box;

  .avatar svg {
    width: 90px;
    height: 90px;
  }

  .sw-upload-action {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    transition: all .3s;

    svg {
      width: 1.5em;
      height: 1.5em;

      &.remove {
        color: red;
      }

      &.upload {
      }
    }
  }

  &:hover .avatar {
    opacity: 0.3;
    border-color: #000;
  }

  &:hover .sw-upload-action {
    opacity: 1;
  }
`;

export default UploadWrapper;
