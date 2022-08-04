import styled from "styled-components";

const NewsletterFormWrapper = styled.form`
  .form-fields {
    display: flex;
    grid-gap: 12px;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    border: none;
    width: 100%;
    input {
      font-size: 18px;
      height: 40px;
    }
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 100%;
    grid-gap: 12px;

    button {
      min-width: unset;
      width: 400px;
      height: 50px;
      min-height: 50px;
      font-size: 22px;
    }
  }


  @media (max-width: 768px) {
    .submit-btn {
      flex-direction: column;
      button {
        min-width: unset;
        width: 300px;
        height: 45px;
        width: 300px;
        min-height: 45px;
        font-size: 22px;
      }
    }

    .form-field {
      input {
        font-size: 14px;
        height: 35px;
      }
    }
  }
`;

export default NewsletterFormWrapper;
