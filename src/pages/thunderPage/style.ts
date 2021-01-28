import styled from 'styled-components';

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
  max-width: 120vh;
  flex-wrap: wrap;
`;
