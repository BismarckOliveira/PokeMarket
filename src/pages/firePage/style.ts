import styled from 'styled-components';

export const Container = styled.div``;

export const Navigate = styled.div`
  padding: 8px 4px 8px 4px;
  background: #e52207;
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

    svg {
      margin-right: 1rem;
      fill: #e52207;
    }
  }
`;
