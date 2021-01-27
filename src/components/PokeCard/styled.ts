import styled from 'styled-components';
import { shade } from 'polished';

export const CardBox = styled.div`
  display: flex;
  max-width: 180px;
  margin-top: 30px;
  margin-left: 12px;
  background: #ff1744;
  height: 250px;
  border-radius: 5px;
`;

export const Card = styled.div`
  text-align: center;

  img {
    width: 180px;
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
    padding-bottom: 12px;

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
