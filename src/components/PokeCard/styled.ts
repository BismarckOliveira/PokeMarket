import styled from 'styled-components';
import { shade } from 'polished';

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  margin-top: 20px;
  margin-left: 12px;
  background: #2196f3;
  height: 250px;
  border-radius: 5px;
  margin-bottom: 2px;

  hr {
    border: 0;
    border-top: 1px dashed #ccc;
  }

  button {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
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

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;

  img {
    width: 170px;
    transition: 1s;

    &:hover {
      transform: scale(1.1);
    }
  }
  div {
    display: flex;
    flex-direction: row;
    p {
      font-size: medium;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }
`;
