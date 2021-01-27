import styled from 'styled-components';
import { shade } from 'polished';

export const Navigate = styled.div`
  padding: 8px 4px 8px 4px;
  background: #2196f3;
  display: flex;
  align-items: center;
  max-height: 250px;

  img {
    margin-left: 1rem;
    width: 200px;
  }

  form {
    margin-left: 6rem;
    fieldset,
    input {
      border-radius: 5px;
    }

    fieldset {
      background: #fff;
    }

    input {
      width: 700px;
      height: 50px;
      flex: 1;
    }

    button {
      border: none;
      background: transparent;
    }

    svg {
      margin-right: 1rem;
      fill: #2196f3;
    }
  }
  a {
    margin-left: 40px;
    text-decoration: none;
    background-color: #ff1744;
    border-radius: 5px;
    color: black;
    padding: 10px;
  }
`;
export const Container = styled.div`
  display: flex;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContentCar = styled.div`
  width: 80vh;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 16px;
  background: #e0e0e0;
  height: 450px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      margin-left: 5px;
      height: 40px;
    }
    p {
      font-size: 16px;
      margin-right: 10px;
    }
  }

  hr {
    margin: 5px 0px 5px 0px;
    border: 0;
    border-top: 1px dashed #ccc;
  }

  .Total {
    margin: 5px 10px 5px 10px;
    color: black;
  }

  button {
    background-color: #2196f3;
    border: none;
    color: white;
    padding: 20px 80px;
    text-decoration: none;
    font-size: 16px;
    transition: 1s;
    width: 100%;
    border-radius: 5px;

    &:hover {
      background-color: ${shade(0.2, '#2196f3')};
    }
  }
`;
