import styled from 'styled-components';

export const Container = styled.div``;

export const Navigate = styled.div`
  padding: 12px 8px;
  background: #e52207;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 250px;

  img {
    width: 200px;
  }

  form {
    input {
      flex: 1;
      border: 0;
      border-radius: 5px 0 0 5px;
      border: 2px solid #fff;
      border-right: 0;
    }

    svg {
      border: 2px solid #fff;
      background: #fff;
      color: #e52207;
    }
  }
`;
