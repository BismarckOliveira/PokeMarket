import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 180px;
  margin-top: 24px;
  margin-left: 5px;
  background: #ff1744;
  max-height: 280px;
  border-radius: 5px;
`;

export const Card = styled.div`
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  :hover img {
    transform: scale(1.1);
  }
  text-align: center;

  img {
    width: 100%;
  }

  p {
    margin: 8px 0px 8px 0;
  }
  hr {
    margin: 5px 0px 5px 0px;
    border: 0;
    border-top: 1px dashed #ccc;
  }

  button {
    background-color: #ff1744;
    border: none;
    border-radius: 0px 0px 5px 5px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    width: 100%;
  }
`;
