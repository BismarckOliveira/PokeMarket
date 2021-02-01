import styled from 'styled-components';

export const Navigate = styled.div`
  padding: 8px 4px 8px 4px;
  background: #2196f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 250px;

  img {
    margin-left: 1rem;
    width: 200px;
  }

  form {
    fieldset,
    input {
      border-radius: 5px;
    }

    fieldset {
      background: #fff;
      text-align: center;

      button {
        text-align: center;
        flex: 1;
        border: none;
        background: transparent;
      }
    }

    input {
      max-width: 450px;
      height: 50px;
      flex: 1;
    }

    svg {
      margin-right: 1rem;
      fill: #2196f3;
    }
  }
  .lojas {
    margin-left: 40px;
    text-decoration: none;
    background-color: #ff1744;
    border-radius: 5px;
    color: black;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    img {
      margin-left: 0;
      margin-bottom: 5px;
    }

    form {
      fieldset,
      input {
        border-radius: 5px;
        display: flex;
        justify-content: center;
      }

      fieldset {
        width: 28vh;
        height: 3.6vh;
      }

      input {
        width: auto;
        height: 15px;
      }
    }

    .lojas {
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      font-size: 8px;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  max-width: 120vh;
  flex-wrap: wrap;
  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;
