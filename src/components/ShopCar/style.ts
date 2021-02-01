import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
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
    align-items: center;
    justify-content: space-between;
    color: black;

    .itens li {
      display: flex;

      justify-content: space-between;
    }

    p {
      font-size: 16px;
      margin-right: 10px;
    }
  }

  hr {
    margin: 5px 0px 5px 0px;
    border: 0;
    border-top: 1px dashed #aaaa;
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
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 50%;
    margin: 25px 0 0 0;
  }
`;
