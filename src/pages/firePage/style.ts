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
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBox = styled.div`
  display: flex;
  max-width: 250px;
  margin-top: 30px;
  margin-left: 5px;
  background: #ff1744;
  height: 160px;
  border-radius: 5px;
`;

export const Card = styled.div`
  text-align: center;

  img {
    width: 100%;
    transition: 1s;

    &:hover {
      transform: scale(1.1);
    }
  }

  hr {
    border: 0;
    border-top: 1px dashed #ccc;
  }
  button {
    padding-top: 6px;
    padding-bottom: 6px;

    background-color: #ff1744;
    border: none;
    border-radius: 0px 0px 5px 5px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    width: 100%;
    transition: 1s;

    &:hover {
      background-color: ${shade(0.2, '#ff1744')};
    }
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
`;

export const ContentCar = styled.div`
  width: 60vh;
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
